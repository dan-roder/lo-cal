import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '@local/services/order.service';

@Component({
  selector: 'lo-cal-checkout-login',
  templateUrl: './checkout-login.component.html'
})
export class CheckoutLoginComponent implements OnInit {
  public guestForm : FormGroup;
  private returnUrl : string = '';
  public submittedOnce : boolean = false;

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService) {
    this.guestForm = fb.group({
      'first-name' : ['', [Validators.required, Validators.maxLength(28)]],
      'last-name' : ['', [Validators.required, Validators.maxLength(28)]],
      'email-address' : ['', [Validators.required, Validators.email, Validators.maxLength(45)]],
      'phone' : ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public checkoutAsGuest(formData){
    if(formData.valid){
      // Save customer as normal
      let customer: Customer = {
        FirstName : formData.controls['first-name'].value,
        LastName : formData.controls['last-name'].value,
        EMail : formData.controls['email-address'].value,
        VoicePhone : formData.controls['phone'].value,
        IsGuest : true
      }

      // Redirect to checkout review
      this.localStorage.setItem('user', customer).subscribe(() => {
        this.orderService.customerInfo = customer;
        this.router.navigate([this.returnUrl]);
      });
    }
  }

}
