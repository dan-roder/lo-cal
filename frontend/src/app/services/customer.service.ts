import { Injectable } from '@angular/core';
import { Config } from '@local/utils/constants';
import { HttpClient } from '@angular/common/http';
import { RailsCustomer, RailsLogin, Customer, RailsUpdate } from '@local/models/Customer';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { RailsSavePayment } from '@local/models/Payment';

@Injectable()
export class CustomerService {
  public _customer: Customer;

  constructor(
    private config: Config,
    private httpClient: HttpClient,
    private localStorage: LocalStorage,
    private router: Router) { }

  public createCustomer(customer: RailsCustomer){
    return this.httpClient.put(this.config.railsCustomerEndpoint, customer).map(returnData => {
      return returnData;
    }, errorData => {
      return errorData;
    })
  }

  public logIn(loginInfo : RailsLogin): Observable<any>{
    return this.httpClient.post(this.config.authenticateEndpoint, loginInfo).map(data => {
      return data;
    })
  }

  public logOut(){
    this.localStorage.removeItem('user').subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  public isLoggedIn(){
    return this.localStorage.getItem('user').map(userInfo => {
      return userInfo;
    });
  }

  public getCustomerInfo(customerId: string): Observable<any>{
    return this.httpClient.get(this.config.railsCustomerEndpoint + `/${customerId}`).map(userData => {
      return userData;
    })
  }

  public updateCustomerInfo(customer: RailsUpdate): Observable<any>{
    return this.httpClient.post(this.config.railsCustomerEndpoint + `/${customer.customer_info.CustomerId}`, customer)
      .map(returnData => {
        return returnData;
      })
  }

  /**
   *
   * getSavedPayments function
   *
   * @param customerId
   *
   * @returns saved payment tokens
   */
  public getSavedPayments(customerId: string): Observable<any>{
    return this.httpClient.get(this.config.railsCustomerEndpoint + `/${customerId}` + '/payments').map(data => {
      return data;
    })
  }

  /**
   *
   * @param payment RailsSavePayment: payment data
   * @param customerId string: Aloha customer ID
   */
  public savePaymentMethod(payment: RailsSavePayment, customerId: string): Observable<any>{
    return this.httpClient.post(this.config.railsCustomerEndpoint + `/${customerId}` + '/payments', payment).map(data => {
      return data;
    })
  }

  public deleteSavedPayment(customerId: string, paymentId: string){
    return this.httpClient.delete(this.config.railsCustomerEndpoint + `/${customerId}/payments/${paymentId}`).map(result => {
      return result;
    })
  }

  public getCurrentCustomer(): Observable<any>{
    return this.localStorage.getItem('user').map(userInfo => {
      return userInfo;
    });
  }

  public updatePassword(){

  }

  get customer(): Customer{
    return this._customer;
  }

  set customer(customer: Customer){
    console.log('set customer', customer);
    this._customer = customer;
  }

}
