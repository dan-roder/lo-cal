import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';
import { Order } from '@local/models/Order';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@Component({
  selector: 'lo-cal-order-history',
  templateUrl: './order-history.component.html'
})

@AutoUnsubscribe()

export class OrderHistoryComponent implements OnInit {
  public orderHistory: Array<Order>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.isLoggedIn().subscribe(customer => {
      this.customerService.getOrderHistory(customer.CustomerId).subscribe(orderHistory => {
        this.orderHistory = orderHistory;
      })
    });
  }

  ngOnDestroy(){

  }

}
