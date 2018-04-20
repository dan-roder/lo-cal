import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';
import { Customer } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'lo-cal-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  private customer : Customer;
  private customerId : string = '';

  constructor(private customerService: CustomerService, private localStorage : LocalStorage) { }

  ngOnInit() {
    // Get customer ID
    this.localStorage.getItem('user').subscribe(userId => {
      this.customerId = userId;
      this.customerService.getCustomerInfo(userId).subscribe(customerData => {
        this.customer = customerData;
        console.log(customerData);
      })
    })
  }

}
