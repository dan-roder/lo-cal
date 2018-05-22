import { Component, OnInit } from '@angular/core';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { Config } from '@local/utils/constants';
import { OrderService } from '@local/services/order.service';
import { OrderResults, Order } from '@local/models/Order';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'lo-cal-checkout-review',
  templateUrl: './checkout-review.component.html'
})
export class CheckoutReviewComponent implements OnInit {
  public _bagItems : Array<LineItem> = [];
  public isOpen: number = -1;
  public envUrl : string = '';
  private currentOrder : any;
  public allOrderDetails : Order;
  public timeForm : FormGroup;
  public timeSelectBox : string;
  private selectedTime : string = '';
  public times : any;

  constructor(
    private bagService: BagService,
    private constants: Config,
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder) {
      this.timeForm = fb.group({
        'pickup-time' : ['', Validators.required]
      })
    }

  ngOnInit() {
    // TODO: Retrieve times on init to populate dropdown
    // this.retrievePickupTimes();
  }

  get bagItems(){
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

  public incrementQuantity(menuItem){
    menuItem.Quantity++;
  }

  public decrementQuantity(menuItem){
    if(menuItem.Quantity > 1){
      menuItem.Quantity--;
    }
  }

  public putOrder(){
    // TODO: See order service, need to retrieve next available time before putting order
    this.orderService.putOrder(this.bagItems).subscribe(response => {
      if(response){
        console.log(response);
        // Route to checkout
        // this.router.navigate(['/checkout/payment']);
      }
    });
  }

  public timeSelectChanged(){
    switch(this.timeSelectBox){
      case 'next':
        this.getNextAvailableTime();
      break;
      default:
        this.selectedTime = this.timeSelectBox;
      break;
    }
  }

  private getNextAvailableTime(){
    this.orderService.getNextAvailableTime().subscribe(nextTime => {
      console.log(nextTime);
      // this.selectedTime = nextTime;
    })
  }

  private retrievePickupTimes(){
    this.orderService.retrieveTimes('4').subscribe(times => {
      this.times = times;
      console.log(times);
    })
  }
}
