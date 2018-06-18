import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '@local/services/order.service';
import { Order } from '@local/models/Order';

@Component({
  selector: 'lo-cal-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
  private orderId : number;
  public orderDetails : Order;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.route.params.subscribe( params => this.orderId = params.orderid );
  }

  ngOnInit() {
    this.orderService.getFullOrderDetails(this.orderId).subscribe(orderDetails => {
      console.log(orderDetails);
      this.orderDetails = orderDetails;
    })
  }

  addOrderToBag(){

  }

}
