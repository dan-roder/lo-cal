import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';
import { Customer } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordMatch } from '@local/utils/passwordmatch';

@Component({
  selector: 'lo-cal-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public customer : Customer;
  private customerId : string = '';
  public accountForm : FormGroup;
  public editing : boolean = false;

  constructor(private customerService: CustomerService, private localStorage : LocalStorage, private fb: FormBuilder) {
    this.accountForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirm-password' : ['', Validators.required],
      'full-address' : fb.group({
        'address' : [null, Validators.required],
        'address2' : null,
        'city' : [null, Validators.required],
        'state' : ['', Validators.required],
        'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    })
  }

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

  editAccountDetails(){
    this.editing = true;

    return false;
  }

  saveAccountDetails(formData){
    console.log(formData);
    this.editing = false;
  }

}
