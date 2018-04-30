import { Component, OnInit } from '@angular/core';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { Config } from '@local/utils/constants';
import { OrderService } from '@local/services/order.service';
import { OrderResults, Order } from '@local/models/Order';

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

  constructor(private bagService: BagService, private constants: Config, private orderService: OrderService) { }

  ngOnInit() {
    // this.envUrl = this.constants.wordpressApiUrl

    this.orderService.getPreSavedOrder().subscribe(orderResult => {
      this.currentOrder = orderResult;
      console.log(orderResult);
      let orderId = orderResult.OrderId;
      // Retrieve full order details from NCR
      this.orderService.getFullOrderDetails(orderId).subscribe(orderDetails => {
        console.log(orderDetails);
        this.allOrderDetails = orderDetails;
      });
    });
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


}
