import { Injectable } from '@angular/core';
import { Config } from '@local/utils/constants';
import { HttpClient } from '@angular/common/http';
import { RailsCustomer, RailsLogin, Customer, RailsUpdate, InPasswordReset } from '@local/models/Customer';
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
    // Destroy all IndexedDB data and redirect to homepage
    this.localStorage.clear().subscribe(() => {
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

  /**
   *
   * deleteSavedPayment
   *
   * @param customerId
   * @param paymentId
   *
   * @returns Observable of result from Aloha API
   */
  public deleteSavedPayment(customerId: string, paymentId: string){
    return this.httpClient.delete(this.config.railsCustomerEndpoint + `/${customerId}/payments/${paymentId}`).map(result => {
      return result;
    })
  }

  /**
   *
   * @param customerId string
   *
   * @returns Observable of order history
   */
  public getOrderHistory(customerId: string): Observable<any>{
    return this.httpClient.get(this.config.railsCustomerEndpoint + `/${customerId}/order/recent`).map(result => {
      return result;
    })
  }

  /**
   * getCurrentCustomer function
   *
   * @returns Observable of UserInfo
   */
  public getCurrentCustomer(): Observable<any>{
    return this.localStorage.getItem('user').map(userInfo => {
      return userInfo;
    });
  }

  /**
   *
   * @param email string
   *
   * @returns Observable of User Security Question
   */
  public getSecurityQuestion(email: string): Observable<any>{
    return this.httpClient.get(this.config.railsCustomerEndpoint + `/securityquestions?Email=${email}`, {responseType: 'text'}).map((question) => {
      return question;
    })
  }

  /**
   *
   * updatePassword function
   *
   * @param passwordResetData InPasswordReset
   *
   * @returns Observable of PasswordReset result from Aloha API
   */
  public updatePassword(passwordResetData: InPasswordReset): Observable<any>{
    return this.httpClient.post(this.config.railsCustomerEndpoint + `/passwordreset`, passwordResetData).map((result) => {
      return result;
    });
  }

  get customer(): Customer{
    return this._customer;
  }

  set customer(customer: Customer){
    this._customer = customer;
  }

}
