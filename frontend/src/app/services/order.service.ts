import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { RailsOrder, InOrderLineItem, Order, OrderResults, InSubmitOrderInformation, RailsInSubmitOrder } from '@local/models/Order';
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
  private orderTime : any;

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorage,
    private config: Config,
    private customerService: CustomerService
  ) { }

  public putOrder(bagItems: Array<LineItem>): Observable<any>{
    let orderEndpoint = this.config.railsOrderEndpoint + '/' + this.config.siteId;
    let order = this.constructOrderObject(bagItems);

    console.log('constructed order', order);

    return this.httpClient.put(orderEndpoint, order).map(apiResponse => {
      return apiResponse;
    });
  }

  public saveOrderToLocalStorage(order){
    return this.localStorage.setItem('order', order).map((response) => {
      return response;
    });
  }

  protected constructOrderObject(bagItems: Array<LineItem>){

    let order : RailsOrder = {
      order : {
        SiteId : this.config.siteId,
        MenuId : this.config.menuId,
        PromiseDateTime : this.orderTime,
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

  public getPreSavedOrder(): Observable<OrderResults>{
    return this.localStorage.getItem('order').map(orderDetails => {
      return orderDetails;
    })
  }

  public getFullOrderDetails(orderId: number): Observable<Order>{
    let orderEndpoint = this.config.railsOrderEndpoint + `/${this.config.siteId}/${orderId}`;
    return this.httpClient.get(orderEndpoint).map(fullOrder => {
      this.currentOrder = fullOrder;
      return fullOrder;
    })
  }

  public getNextAvailableTime(){
    return this.httpClient.get(this.config.railsTimeEndpoint + '/1').map(time => {
      this.orderTime = time;
      return time;
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

  set currentOrder(order: Order){
    this._currentOrder = order;
  }

  public submitOrder(order: RailsInSubmitOrder, orderId: number): Observable<any>{
    return this.httpClient.post(this.config.railsOrderEndpoint + `/${this.config.siteId}/${orderId}`, order).map(orderResponse => {
      return orderResponse;
    })
  }
}
