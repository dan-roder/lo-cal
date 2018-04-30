import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OrderService } from '@local/services/order.service';

@Injectable()
export class OrderGuard implements CanActivate {

  constructor(private orderService: OrderService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.orderService.hasOrderBeenCreated().map(data => {
        if(data === null || data === undefined){
          this.router.navigate(['/menu']);
          return false;
        }
        else{
          return true;
        }
      });
  }
}
