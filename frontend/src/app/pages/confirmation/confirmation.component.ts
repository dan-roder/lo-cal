import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BagService } from '@local/services/bag.service';
import { OrderService } from '@local/services/order.service';
import { OrderResults } from '@local/models/Order';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Config } from '@local/utils/constants';
import { WordpressService } from '@local/services/wp.service';
import { CustomerService } from '@local/services/customer.service';
import { Customer } from '@local/models/Customer';

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
  public orderItemsForDisplay : any;

  constructor(private localStorage: LocalStorage, private bagService: BagService, private orderService: OrderService, private config: Config, private wpService: WordpressService, private customerService: CustomerService) { }

  ngOnInit() {
    this.localStorage.removeItem('order').subscribe(() => {});
    this.localStorage.removeItem('bag').subscribe(() => {});
    // Get current customer to check if they were a guest customer
    this.customerService.getCurrentCustomer().subscribe((customer: Customer) => {
      if(customer.IsGuest){
        // If they were a guest customer, remove the user from localStorage
        this.localStorage.removeItem('user').subscribe(() => {});
      }
    })

    this.bagService.itemsInBag = [];

    this.wpService.getPage(3660).subscribe(content => {
      this.confirmationContent = content;
    })

    this.orderService.getOrderResult().subscribe(result => {
      console.log(result);
      this.orderItemsForDisplay = this.orderService.calculateTotalWithModifiers(result.Order);
      console.log(this.orderItemsForDisplay);
      this.orderResult = result;
      this.activeCardClass = this.config.cardClassMap[result.Order.Payments[0].CardType];
      this.paidWithCardType = this.config.cardTypeMap[result.Order.Payments[0].CardType];
    });
  }

  ngOnDestroy(){}

}
