import { Component, OnInit } from '@angular/core';
import { BagService } from '@local/services/bag.service';
import { OrderService } from '@local/services/order.service';
import { Order } from '@local/models/Order';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomerService } from '@local/services/customer.service';
import { WordpressService } from '@local/services/wp.service';

@Component({
  selector: 'lo-cal-checkout-review',
  templateUrl: './checkout-review.component.html'
})
export class CheckoutReviewComponent implements OnInit {
  public isOpen: number = -1;
  public allOrderDetails : Order;
  public timeForm : FormGroup;
  public timeSelectBox : string;
  public selectedTime : any;
  public times : any;
  public processing : boolean = false;
  public errorData : any = {};
  public addressData : any;
  public bagTotalPrice : number;

  constructor(
    private bagService: BagService,
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private wpService: WordpressService) {
      this.timeForm = fb.group({
        'pickup-time' : ['', Validators.required]
      })
    }

  ngOnInit() {
    this.retrievePickupTimes();

    // Need to retrieve current customer so order PUT doesn't fail
    this.customerService.getCurrentCustomer().subscribe(customerData => {
      this.orderService.customerInfo = customerData;
    });

    this.getAddressContent();
  }

  public removeFromBagAtIndex( index ){
    this.bagService.removeFromBagAtIndex(index);
  }

  public editItemAtIndex(newVal: number): boolean {
    if (this.isOpen === newVal) {
      this.isOpen = -1;
    } else {
      this.isOpen = newVal;
    }

    return false;
  }

  public incrementQuantity(menuItem){
    menuItem.Quantity++;
    this.bagService.updatePrice();
  }

  public decrementQuantity(menuItem){
    if(menuItem.Quantity > 1){
      menuItem.Quantity--;
      this.bagService.updatePrice();
    }
  }

  public putOrder(){
    this.processing = true;

    this.orderService.putOrder(this.bagItems).subscribe(response => {
      // TODO: Error checking for other result codes
      if(response.ResultCode === 0){
        // Save to LocalStorage and route to checkout
        this.orderService.saveOrderToLocalStorage(response).subscribe(result => {
          if(result){
            this.router.navigate(['/checkout/payment']);
          }
        });
      }
      else{
        console.log('putOrder: error', response);
        this.processing = false;
        this.errorData.error = "We're sorry. There was an error placing your order. Please try again."
        this.wpService.logError('Put Order Error: ' + JSON.stringify(response)).subscribe(() => {});
      }
    });
  }

  public timeSelectChanged(){
    switch(this.timeSelectBox){
      case 'next':
        this.getNextAvailableTime();
      break;
      default:
        this.orderService.promiseDateTime = this.timeSelectBox;
        this.selectedTime = this.timeSelectBox;
      break;
    }
  }

  private getNextAvailableTime(){
    this.orderService.getNextAvailableTime().subscribe(nextTime => {
      this.selectedTime = nextTime;
    })
  }

  private retrievePickupTimes(){
    this.orderService.retrieveTimes('1').subscribe(times => {
      // 0 position in array indicates current day
      this.times = times[0].Value;
    })
  }

  private getAddressContent(){
    this.wpService.getPost(3812).subscribe(postData => {
      this.addressData = postData;
    })
  }

  get totalBagPrice(){
    return this.bagService.totalPrice;
  }

  get bagItems(){
    return this.bagService.itemsInBag;
  }
}