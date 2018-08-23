import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';
import { Customer, RailsUpdate, InLoginUpdate } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordMatch } from '@local/utils/passwordmatch';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { SavedPayment } from '@local/models/Payment';
import { DOCUMENT } from '@angular/platform-browser';

@AutoUnsubscribe()

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
  public editingPayments : boolean = false;
  public errorOccurred : boolean = false;
  public submittedOnce : boolean = false;
  public savedPayments : SavedPayment;

  constructor(private customerService: CustomerService, private localStorage : LocalStorage, private fb: FormBuilder, @Inject(DOCUMENT) private document: any) {
    this.accountForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'full-address' : fb.group({
        'address' : [null, Validators.required],
        'address2' : null,
        'city' : [null, Validators.required],
        'state' : [{value:'', disabled: true}, Validators.required],
        'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    })

    this.passwordForm = fb.group({
      'password' : ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)])],
      'confirm-password' : ['', Validators.required],
      'security-answer' : ['', Validators.required],
    }, {
      validator : PasswordMatch.MatchPassword
    })
  }

  ngOnInit() {
    // Get customer ID
    this.localStorage.getItem('user').subscribe(customerData => {
      this.customer = customerData;
      this.customerId = customerData.CustomerId;
      this.patchAccountForm(customerData);

      this.customerService.getSavedPayments(this.customerId).subscribe(paymentMethods => {
        this.savedPayments = paymentMethods;
      })
    })
  }

  private patchAccountForm(customerData){
    this.accountForm.patchValue({
      'first-name' : customerData.FirstName,
      'last-name' : customerData.LastName,
      'email' : customerData.EMail
    })
  }

  public editAccountDetails(){
    this.editing = !this.editing;
    // Enable the select group
    this.accountForm.controls['full-address']['controls']['state'].enable();
    // If returning to not editing, replace form with original data
    if(!this.editing) this.patchAccountForm(this.customer);
    // Return false to negate clicking an <a> tag
    return false;
  }

  public editPassword(){
    this.editingPassword = !this.editingPassword;
    return false;
  }

  public editPayments(){
    this.editingPayments = !this.editingPayments;
    return false;
  }

  public saveAccountDetails(formData){
    if(formData.valid){
      let updateCustomer : RailsUpdate = {
        customer_info : {
          CustomerId : this.customerId,
          EMail : formData.get('email').value,
          FirstName : formData.get('first-name').value,
          LastName : formData.get('last-name').value,
          Addresses : [{
            AddressLine1 : formData.controls['full-address'].get('address').value,
            AddressLine2 : formData.controls['full-address'].get('address2').value,
            City : formData.controls['full-address'].get('city').value,
            State : formData.controls['full-address'].get('state').value,
            Postal : formData.controls['full-address'].get('zip').value,
          }]
        }
      };

      // Disable the select again
      this.accountForm.controls['full-address']['controls']['state'].disable();

      // TODO: Customer Address does not save to lo-cal api
      this.customerService.updateCustomerInfo(updateCustomer).subscribe(data => {
        console.log(data);
        this.customerService.getCustomerInfo(this.customerId).subscribe(updatedCustomerInfo => {
          this.patchAccountForm(updatedCustomerInfo);
          this.localStorage.setItem('user', updatedCustomerInfo).subscribe(() => {});
          this.editing = false;
        })
      }, error => {
        // Update failed for some reason. Show error, return form to initial state
        console.log(error);
        this.errorOccurred = true;
        this.patchAccountForm(this.customer);
      })
    }
  }

  public saveNewPassword(formData){
    console.log(formData);

    if(formData.valid){
      let inLoginUpdate : InLoginUpdate = {
        Email : this.customer.EMail,
        OldPassword : formData.controls['old-password'].value,
        NewPassword : formData.controls['new-password'].value
      }

      // TODO: Submit password update to API

      // TODO: If successful, destroy login session and redirect to login page
    }

    this.editingPassword = false;
  }

  public deletePaymentMethod(paymentId: string){
    let areYouSure = confirm("Are you sure? This cannot be undone");

    if (areYouSure) {
      this.customerService.deleteSavedPayment(this.customerId, paymentId).subscribe(result => {
        let paymentMethodObject = this.document.getElementsByClassName('id-'+paymentId);
        paymentMethodObject[0].parentNode.removeChild(paymentMethodObject[0]);
      });
    }
  }
}
