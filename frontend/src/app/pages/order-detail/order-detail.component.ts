import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '@local/services/order.service';
import { Order } from '@local/models/Order';
import { BagService } from '@local/services/bag.service';
import { WordpressService } from '@local/services/wp.service';
import * as _ from 'lodash';
import { CustomerService } from '@local/services/customer.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Customer } from '@local/models/Customer';

@Component({
  selector: 'lo-cal-order-detail',
  templateUrl: './order-detail.component.html'
})

@AutoUnsubscribe()

export class OrderDetailComponent implements OnInit {
  private orderId : number;
  public orderDetails : Order;
  public menuMap : any;
  public menuItemPosts : Array<any> = [];
  private currentUser : Customer;
  private canSeeOrder : boolean = false;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private bagService: BagService, private wpService: WordpressService, private customerService: CustomerService) {
    this.route.params.subscribe( params => this.orderId = params.orderid );
  }

  ngOnInit() {
    this.customerService.isLoggedIn().subscribe(user => {
      this.currentUser = user;
      this.getOrderDetails();
    })
  }

  public getOrderDetails(){
    this.orderService.getFullOrderDetails(this.orderId).subscribe(orderDetails => {
      this.orderDetails = orderDetails;
      if(this.currentUser.CustomerId === this.orderDetails.Customer.CustomerId){
        this.canSeeOrder = true;
      }
    })
  }

  addOrderToBag(){
    let bagService = this.bagService;
    let menuItemPosts = this.menuItemPosts;
    _.forEach(this.orderDetails.LineItems, function(lineItem, index){
      lineItem.cartImage = (menuItemPosts[index].acf !== undefined && menuItemPosts[index].acf.cart_image !== undefined) ? menuItemPosts[index].acf.cart_image : 'http://via.placeholder.com/160x240';

      bagService.orderItemAgain(lineItem);
    })
  }

  ngOnDestroy(){}

}
