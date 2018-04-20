import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AuthGuard implements CanActivate {
  private currentUser : any;

  constructor(private router: Router, private localStorage: LocalStorage){
    this.localStorage.getItem('user').subscribe(user => {this.currentUser = user;});
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.currentUser !== null){
        // Already logged in
        return true;
      }

    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
