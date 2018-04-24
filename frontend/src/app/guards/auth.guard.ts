import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { CustomerService } from '@local/services/customer.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private currentUser : any;

  constructor(private router: Router, private localStorage: LocalStorage, private customerService: CustomerService){
    this.localStorage.getItem('user').subscribe(user => {this.currentUser = user;});
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.customerService.isLoggedIn().map(data => {
        if(data === null || data === undefined){
          this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
          return false;
        }
        else{
          return true;
        }
      });
  }
}
