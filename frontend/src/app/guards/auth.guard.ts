import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '@local/services/customer.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private customerService: CustomerService){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.customerService.isLoggedIn().map(data => {
        if(data === null || data === undefined || data.CustomerId === undefined){
          this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
          return false;
        }
        else{
          return true;
        }
      });
  }
}
