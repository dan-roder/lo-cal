import { Injectable } from '@angular/core';
import { Config } from '@local/utils/constants';
import { HttpClient } from '@angular/common/http';
import { RailsCustomer, RailsLogin } from '@local/models/Customer';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Injectable()
export class CustomerService {

  constructor(
    private config: Config,
    private httpClient: HttpClient,
    private localStorage: LocalStorage,
    private router: Router) { }

  public createCustomer(customer: RailsCustomer, ){
    this.httpClient.put(this.config.railsCustomerEndpoint, customer).subscribe(returnData => {
      console.log(returnData);
    }, errorData => {
      console.log(errorData);
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
    return this.localStorage.getItem('user').map(userInfo => {return userInfo});
  }

}
