import { Component, OnInit } from '@angular/core';
import { OrderService } from '@local/services/order.service';
import { Order } from '@local/models/Order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lo-cal-checkout-payment',
  templateUrl: './checkout-payment.component.html'
})
export class CheckoutPaymentComponent implements OnInit {
  public currentOrder : Order;
  public contactInfoForm : FormGroup;
  public submittedOnce : boolean = false;
  public paymentForm : FormGroup;

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.contactInfoForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'phone' : [null, Validators.required]
    });
    this.paymentForm = fb.group({
      'card-number' : [null, Validators.required],
      'expiration-date' : [null, Validators.required],
      'name-on-card' : [null, Validators.required],
      'cvv' : [null, Validators.required],
    });
  }

  ngOnInit() {
    // This returns undefined if page is not accessed from review screen
    this.currentOrder = this.orderService.currentOrder;
  }

}
