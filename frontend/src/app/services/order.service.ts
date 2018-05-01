import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { RailsOrder, InOrderLineItem, Order } from '@local/models/Order';
import { LineItem } from '@local/models/LineItem';
import { Config } from '@local/utils/constants';
import * as moment from 'moment';
import { CustomerService } from '@local/services/customer.service';
import { Customer } from '@local/models/Customer';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@AutoUnsubscribe()

@Injectable()
export class OrderService {
  private userId : string;
  private _customerInfo : Customer;
  public _currentOrder : Order;

  constructor(private httpClient: HttpClient, private localStorage: LocalStorage, private config: Config, private customerService: CustomerService) {
    this.customerService.isLoggedIn().subscribe(userId => {
      this.userId = userId;

      if(userId !== null || userId !== undefined){
        this.customerService.getCustomerInfo(userId).subscribe(data => {
          this.customerInfo = data;
        })
      }
    })
  }

  public putOrder(bagItems: Array<LineItem>): Observable<any>{
    let order = this.constructOrderObject(bagItems);

    let orderEndpoint = this.config.railsOrderEndpoint + '/' + this.config.siteId;
    return this.httpClient.put(orderEndpoint, order).map(response => {
      // Save order to localStorage
      this.localStorage.setItem('order', response).subscribe(() => {});
      return response;
    });
  }

  protected constructOrderObject(bagItems: Array<LineItem>){
    let now = moment().format('YYYY-MM-DDThh:mm:ss');

    let order : RailsOrder = {
      order : {
        SiteId : this.config.siteId,
        MenuId : this.config.menuId,
        PromiseDateTime : now,
        LineItems : bagItems,
        Customer : this.customerInfo,
        OrderMode : 'Pickup',
        PaymentMode : 'Unknown'
      }
    }

    return order;
  }

  public hasOrderBeenCreated(){
    return this.localStorage.getItem('order').map(orderDetails => {
      return orderDetails;
    });
  }

  public getPreSavedOrder(){
    return this.localStorage.getItem('order').map(orderDetails => {
      return orderDetails;
    })
  }

  public getFullOrderDetails(orderId: number){
    let orderEndpoint = this.config.railsOrderEndpoint + `/${this.config.siteId}/${orderId}`;
    return this.httpClient.get(orderEndpoint).map(fullOrder => {
      this.currentOrder = fullOrder;
      return fullOrder;
    })
  }

  public getNextAvailableTime(){
    return this.httpClient.get(this.config.railsTimeEndpoint + '/1').map(times => {
      return times;
    })
  }

  public retrieveTimes(orderMode: string, orderSource: string = '0'): Observable<any>{
    // Order Sources
    //  0 - Website
    //  1 - Mobile (iPhone)
    //  2 - Mobile Web
    return this.httpClient.get(this.config.railsTimeEndpoint + `/${orderMode}/${orderSource}/${this.config.menuId}`).map(times => {
      return times;
    })
  }

  get customerInfo(): Customer{
    return this._customerInfo;
  }

  set customerInfo(customer: Customer){
    this._customerInfo = customer;
  }

  get currentOrder(): Order{
    return this._currentOrder;
  }

  set currentOrder(order){
    this._currentOrder = order;
  }
}
