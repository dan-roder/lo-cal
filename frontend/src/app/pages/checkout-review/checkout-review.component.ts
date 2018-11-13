import { Component, OnInit } from '@angular/core';
import { BagService } from '@local/services/bag.service';
import { OrderService } from '@local/services/order.service';
import { Order } from '@local/models/Order';
import { Router } from '@angular/router';
import { CustomerService } from '@local/services/customer.service';
import { WordpressService } from '@local/services/wp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lo-cal-checkout-review',
  templateUrl: './checkout-review.component.html'
})
export class CheckoutReviewComponent implements OnInit {
  public isOpen: number = -1;
  public allOrderDetails : Order;
  public timeSelectBox : string;
  public selectedTime : any;
  public times : any;
  public processing : boolean = false;
  public errorData : any = {};
  public addressData : any;
  public bagTotalPrice : number;
  public submitAttempted : boolean = false;
  public pickupForm : FormGroup;

  constructor(
    private bagService: BagService,
    private orderService: OrderService,
    private router: Router,
    private customerService: CustomerService,
    private wpService: WordpressService,
    private fb: FormBuilder) {
      this.pickupForm = fb.group({
        'pickup-selection' : [null, Validators.required]
      });
    }

  ngOnInit() {
    this.retrievePickupTimes();

    // Need to retrieve current customer so order PUT doesn't fail
    this.customerService.getCurrentCustomer().subscribe(customerData => {
      this.orderService.customerInfo = customerData;
    });

    // Get address data from post
    if(!this.wpService.addressContent){
      this.wpService.getAddressContent().subscribe(addressData => {
        this.addressData = addressData;
        this.wpService.addressContent = addressData;
      })
    }
    else{
      this.addressData = this.wpService.addressContent;
    }
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
    // Ensure time was selected
    if(!this.selectedTime || !this.pickupForm.valid){
      this.submitAttempted = true;

      // TODO: Ensure when order is PUT, 30min delay has not elapsed
      return;
    }

    this.processing = true;

    this.orderService.orderMode = this.pickupForm.get('pickup-selection').value;

    this.orderService.putOrder(this.bagItems).subscribe(response => {

      if(response.ResultCode === 0 || response.ResultCode === 4){
        // Save to LocalStorage and route to checkout
        this.orderService.saveOrderToLocalStorage(response).subscribe(result => {
          if(result){
            this.router.navigate(['/checkout/payment']);
          }
        });
      }
      else{
        this.processing = false;
        this.errorData.error = "We're sorry. There was an error placing your order. Please try again."
        this.wpService.logError('Put Order Error: ' + JSON.stringify(response)).subscribe(() => {});
      }
    }, error => {
      this.processing = false;
      this.errorData.error = "We're sorry. There was an error placing your order. Please try again."
      this.wpService.logError('Put Order Error: ' + JSON.stringify(error)).subscribe(() => {});
    });
  }

  public selectTime(time){
    this.selectedTime = time;
    this.orderService.promiseDateTime = time;
  }

  private retrievePickupTimes(){
    this.orderService.retrieveTimes('1').subscribe(times => {
      // 0 position in array indicates current day
      // TODO: Filter out times that are shorter than 30min from current time
      this.times = times[0].Value;
    })
  }

  public customizeReturn(item, index){
    this.bagService.editingLineItem = item;
    this.bagService.editingIndex = index;
    this.router.navigate([item.returnUrl], {'queryParams': {'returnUrl': '/checkout/review'}});
  }

  get totalBagPrice(){
    return this.bagService.totalPrice;
  }

  get bagItems(){
    return this.bagService.itemsInBag;
  }
}