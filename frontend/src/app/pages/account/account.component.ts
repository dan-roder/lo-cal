import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';
import { Customer, RailsUpdate, InLoginUpdate } from '@local/models/Customer';
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
  public passwordForm : FormGroup;
  public editing : boolean = false;
  public editingPassword : boolean = false;
  public submittedOnce : boolean = false;

  constructor(private customerService: CustomerService, private localStorage : LocalStorage, private fb: FormBuilder) {
    this.accountForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'full-address' : fb.group({
        'address' : [null, Validators.required],
        'address2' : null,
        'city' : [null, Validators.required],
        'state' : ['', Validators.required],
        'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    })

    this.passwordForm = fb.group({
      'old-password' : ['', Validators.required],
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirm-password' : ['', Validators.required],
    }, {
      validator : PasswordMatch.MatchPassword
    })
  }

  ngOnInit() {
    // Get customer ID
    this.localStorage.getItem('user').subscribe(customerData => {
      this.customerId = customerData.CustomerId;
      this.patchAccountForm(customerData);
    })
  }

  private patchAccountForm(customerData){
    this.accountForm.patchValue({
      'first-name' : customerData.FirstName,
      'last-name' : customerData.LastName,
      'email' : customerData.EMail,
      'full-address' : {
        'address' : customerData.Addresses[0].AddressLine1,
        'address2' : customerData.Addresses[0].AddressLine2,
        'city' : customerData.Addresses[0].City,
        'zip' : customerData.Addresses[0].Postal
      }
    })
  }

  public editAccountDetails(){
    this.editing = !this.editing;
    // If returning to not editing, replace form with original data
    if(!this.editing) this.patchAccountForm(this.customer);
    // Return false to negate clicking an <a> tag
    return false;
  }

  public editPassword(){
    this.editingPassword = !this.editingPassword;
    return false;
  }

  public saveAccountDetails(formData){
    console.log(formData);

    if(formData.valid){
      let updateCustomer : RailsUpdate = {
        customer_info : {
          CustomerId : this.customerId,
          EMail : formData.controls.email.value,
          FirstName : formData.controls['first-name'].value,
          LastName : formData.controls['last-name'].value,
          Addresses : [{
            AddressLine1 : formData.controls['full-address'].controls['address'].value,
            AddressLine2 : formData.controls['full-address'].controls['address2'].value,
            City : formData.controls['full-address'].controls['city'].value,
            State : formData.controls['full-address'].controls['state'].value,
            Postal : formData.controls['full-address'].controls['zip'].value,
            IsDefault : true
          }]
        }
      };

      this.customerService.updateCustomerInfo(updateCustomer).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
    }

    this.editing = false;
  }

  public saveNewPassword(formData){
    console.log(formData);

    if(formData.valid){
      let inLoginUpdate : InLoginUpdate = {
        Email : this.customer.EMail,
        OldPassword : formData.controls['old-password'].value,
        NewPassword : formData.controls['new-password'].value
      }

      // Submit password update to API

      // If successful, destroy login session and redirect to login page
    }

    this.editingPassword = false;
  }

  public logout(){
    this.customerService.logOut();
  }

}
