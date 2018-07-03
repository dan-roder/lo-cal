import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BagService } from '@local/services/bag.service';
import { OrderService } from '@local/services/order.service';
import { OrderResults } from '@local/models/Order';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Config } from '@local/utils/constants';
import { WordpressService } from '@local/services/wp.service';

@AutoUnsubscribe()

@Component({
  selector: 'lo-cal-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
  public orderResult : OrderResults;
  public activeCardClass : string = '';
  public paidWithCardType : string = '';
  public confirmationContent : any;

  constructor(private localStorage: LocalStorage, private bagService: BagService, private orderService: OrderService, private config: Config, private wpService: WordpressService) { }

  ngOnInit() {
    this.localStorage.removeItem('order').subscribe(() => {});
    this.localStorage.removeItem('bag').subscribe(() => {});
    this.bagService.itemsInBag = [];

    this.wpService.getPage(3660).subscribe(content => {
      this.confirmationContent = content;
    })

    this.orderService.getOrderResult().subscribe(result => {
      this.orderResult = result;
      this.activeCardClass = this.config.cardClassMap[result.Order.Payments[0].CardType];
      this.paidWithCardType = this.config.cardTypeMap[result.Order.Payments[0].CardType];
    });
  }

}
