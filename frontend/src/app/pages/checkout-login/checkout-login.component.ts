import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestCustomer } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lo-cal-checkout-login',
  templateUrl: './checkout-login.component.html'
})
export class CheckoutLoginComponent implements OnInit {
  public guestForm : FormGroup;
  private returnUrl : string = '';

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorage,
    private router: Router,
    private route: ActivatedRoute) {
    this.guestForm = fb.group({
      'first-name' : ['', Validators.required],
      'last-name' : ['', Validators.required],
      'email-address' : ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public checkoutAsGuest(formData){
    console.log(formData);
    if(formData.valid){
      // Save customer as normal
      let customer: GuestCustomer = {
        FirstName : formData.controls['first-name'].value,
        LastName : formData.controls['last-name'].value,
        EMail : formData.controls['email-address'].value
      }

      // Redirect to checkout review
      this.localStorage.setItem('user', customer).subscribe(() => {
        this.router.navigate([this.returnUrl]);
      });
    }
  }

}
