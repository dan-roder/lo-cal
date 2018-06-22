import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BagService } from '@local/services/bag.service';
import { OrderService } from '@local/services/order.service';
import { OrderResults } from '@local/models/Order';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()

@Component({
  selector: 'lo-cal-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
  public orderResult : OrderResults;

  constructor(private localStorage: LocalStorage, private bagService: BagService, private orderService: OrderService) { }

  ngOnInit() {
    // TODO: Destroy Bag and Order from LocalStorage
    this.localStorage.removeItem('order').subscribe(() => {});
    this.localStorage.removeItem('bag').subscribe(() => {});
    this.bagService.itemsInBag = [];

    this.orderService.getOrderResult().subscribe(result => {this.orderResult = result; console.log(result)});
  }

}
