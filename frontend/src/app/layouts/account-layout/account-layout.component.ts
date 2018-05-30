import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';

@Component({
  selector: 'lo-cal-account-layout',
  templateUrl: './account-layout.component.html'
})
export class AccountLayoutComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  public logout(){
    this.customerService.logOut();
  }

}
