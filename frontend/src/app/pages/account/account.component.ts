import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { CustomerService } from '@local/services/customer.service';
import { Customer, RailsUpdate, InLoginUpdate,  } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordMatch } from '@local/utils/passwordmatch';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { SavedPayment } from '@local/models/Payment';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
  public questionForm : FormGroup;
  public editing : boolean = false;
  public editingPassword : boolean = false;
  public editingPayments : boolean = false;
  public editingQuestion : boolean = false;
  public errorOccurred : boolean = false;
  public submittedOnce : boolean = false;
  public savedPayments : SavedPayment;
  public securityQuestion : string = '';
  public passwordError : string = '';
  public passwordSuccess : string = '';
  public questionError : string = '';
  public questionSuccess : string = '';
  public accountProcessing : boolean = false;
  public passwordProcessing : boolean = false;


  constructor(private customerService: CustomerService, private localStorage : LocalStorage, private fb: FormBuilder, @Inject(DOCUMENT) private document: any, private router: Router) {
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
    });

    this.passwordForm = fb.group({
      'old-password' : ['', Validators.required],
      'password' : ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)])],
      'confirm-password' : ['', Validators.required]
    }, {
      validator : PasswordMatch.MatchPassword
    });

    this.questionForm = fb.group({
      'current-password' : ['', Validators.required],
      'security-question' : ['', Validators.required],
      'security-answer' : ['', Validators.required]
    });
  }

  ngOnInit() {
    // Get customer ID
    this.localStorage.getItem('user').subscribe(customerData => {
      this.customer = customerData;
      this.customerId = customerData.CustomerId;
      this.patchAccountForm(customerData);

      // Retrieve security question
      this.getSecurityQuestion();

      this.customerService.getSavedPayments(this.customerId).subscribe(paymentMethods => {
        this.savedPayments = paymentMethods;
      });
    });
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
        'state' : customerData.Addresses[0].State,
        'zip' : customerData.Addresses[0].Postal
      }
    });
    this.accountForm.controls['full-address']['controls']['state'].disable();
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
    this.passwordError = '';
    this.passwordSuccess = '';
    return false;
  }

  public editPayments(){
    this.editingPayments = !this.editingPayments;
    return false;
  }

  public editQuestion(){
    this.editingQuestion = !this.editingQuestion;
    this.questionError = '';
    this.questionSuccess = '';
    return false;
  }

  public saveAccountDetails(formData){
    if(formData.valid){
      this.accountProcessing = true;
      let updateCustomer : RailsUpdate = {
        customer_info : {
          CustomerId : this.customerId,
          EMail : formData.get('email').value,
          FirstName : formData.get('first-name').value,
          LastName : formData.get('last-name').value,
          Addresses : [{
            AddressType : 1,
            AddressId : 1,
            AddressLine1 : formData.controls['full-address'].get('address').value,
            AddressLine2 : formData.controls['full-address'].get('address2').value,
            City : formData.controls['full-address'].get('city').value,
            State : formData.controls['full-address'].get('state').value,
            Postal : formData.controls['full-address'].get('zip').value,
            IsDefault : true
          }]
        }
      };

      // Disable the select again
      this.accountForm.controls['full-address']['controls']['state'].disable();

      // TODO: Customer Address does not save to lo-cal api
      this.customerService.updateCustomerInfo(updateCustomer).subscribe(data => {
        this.customerService.getCustomerInfo(this.customerId).subscribe(updatedCustomerInfo => {
          this.patchAccountForm(updatedCustomerInfo);
          this.localStorage.setItem('user', updatedCustomerInfo).subscribe(() => {});
          this.editing = false;
          this.accountProcessing = false;
        })
      }, error => {
        // Update failed for some reason. Show error, return form to initial state
        this.errorOccurred = true;
        this.patchAccountForm(this.customer);
      })
    }
  }

  public updatePassword(formData){
    if(formData.valid){
      let loginInfo : InLoginUpdate = {
        Email : this.customer.EMail,
        OldPassword : formData.get('old-password').value,
        NewPassword : formData.get('password').value
      }

      this.customerService.updateLoginInfo(loginInfo).subscribe((result) => {
        if(result === null){
          this.passwordSuccess = 'Password successfully changed. You will now be logged out and need to log in again.';
          this.destroyAndLogout();
        }
      }, (error) => {
        this.passwordError = error.error.message;
      });
    }

    this.editingPassword = false;
  }

  public updateSecurityQuestion(formData){
    if(formData.valid){
      let loginInfo : InLoginUpdate = {
        Email : this.customer.EMail,
        OldPassword : formData.get('current-password').value,
        NewSecurityQuestion : formData.get('security-question').value,
        NewAnswer : formData.get('security-answer').value
      }

      this.customerService.updateLoginInfo(loginInfo).subscribe((result) => {
        this.questionSuccess = 'Your security question has been succesfully updated';
        this.editingQuestion = !this.editingQuestion;
      }, (error) => {
        this.questionError = error.error.message;
      });
    }
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

  private destroyAndLogout(){
    setTimeout(() => {
      this.localStorage.removeItem('user').subscribe(() => {
        this.router.navigateByUrl('/login');
      });
    }, 4000);
  }

  public getSecurityQuestion(){
    // Retrieve security question if it hasn't been fetched before
    if(this.securityQuestion === ''){
      this.customerService.getSecurityQuestion(this.customer.EMail).subscribe((question) => {
        this.securityQuestion = question;

        this.questionForm.patchValue({
          'security-question' : question
        });
      }, (error) => {
        console.log(error);
      })
    }
  }
}
