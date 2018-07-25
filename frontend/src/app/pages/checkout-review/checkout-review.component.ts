import { Component, OnInit } from '@angular/core';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { Config } from '@local/utils/constants';
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
  public _bagItems : Array<LineItem> = [];
  public isOpen: number = -1;
  public allOrderDetails : Order;
  public timeForm : FormGroup;
  public timeSelectBox : string;
  public selectedTime : any;
  public times : any;
  public processing : boolean = false;
  public errorData : any = {};
  public addressData : any;

  constructor(
    private bagService: BagService,
    private constants: Config,
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

  get bagItems(){
    console.log(this.bagService.itemsInBag);
    return this.bagService.itemsInBag;
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

  // TODO: Ensure incrementing the quantity here calculates the correct price
  public incrementQuantity(menuItem){
    menuItem.Quantity++;
  }

  public decrementQuantity(menuItem){
    if(menuItem.Quantity > 1){
      menuItem.Quantity--;
    }
  }

  public putOrder(){
    this.processing = true;
    console.log(this.bagItems);

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
}
