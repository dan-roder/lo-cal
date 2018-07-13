import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '@local/services/order.service';
import { Order } from '@local/models/Order';
import { BagService } from '@local/services/bag.service';
import { WordpressService } from '@local/services/wp.service';
import * as _ from 'lodash';

@Component({
  selector: 'lo-cal-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
  private orderId : number;
  public orderDetails : Order;
  public menuMap : any;
  public menuItemPosts : Array<any> = [];

  constructor(private route: ActivatedRoute, private orderService: OrderService, private bagService: BagService, private wpService: WordpressService) {
    this.route.params.subscribe( params => this.orderId = params.orderid );
  }

  ngOnInit() {
    this.orderService.getFullOrderDetails(this.orderId).subscribe(orderDetails => {
      this.orderDetails = orderDetails;

      this.wpService.getMenuMapObject().subscribe(map => {
        this.menuMap = map;
        let wpService = this.wpService;
        let menuItemArray = this.menuItemPosts;

        _.forEach(orderDetails.LineItems, function(value){
          let obj = _.find(map, {'menuid' : String(value.MenuItemId)});

          wpService.getCustomPostTypeById('menu_item', obj.id).subscribe(post => {
            menuItemArray.push(post);
          })
        })
      })
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

}
