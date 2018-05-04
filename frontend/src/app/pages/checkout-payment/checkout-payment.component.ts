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
  public timeForm : FormGroup;
  public times : any;
  public timeSelectBox : string;
  private selectedTime : string = '';
  public sectionOpen : number = 1;
  public paymentChoice : string = '1';

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.contactInfoForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'phone' : [null, Validators.required]
    });
    this.paymentForm = fb.group({
      'payment-choice' : [this.paymentChoice, Validators.required],
      'card-number' : [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      'expiration-date' : [null, [Validators.required, Validators.pattern('^[0-9]{2}\/{1}[0-9]{2}$')]],
      'name-on-card' : [null, Validators.required],
      'cvv' : [null, [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
    });
    this.timeForm = fb.group({
      'pickup-time' : ['', Validators.required],
      'pickup-selection' : ['', Validators.required],
      'vehicle-make' : [null],
      'vehicle-model' : [null],
      'vehicle-color' : [null]
    })
  }

  ngOnInit() {
    // This returns undefined if page is not accessed from review screen
    this.currentOrder = this.orderService.currentOrder;
    // this.retrievePickupTimes();
  }

  private getNextAvailableTime(){
    this.orderService.getNextAvailableTime().subscribe(nextTime => {
      console.log(nextTime);
      // this.selectedTime = nextTime;
    })
  }

  private retrievePickupTimes(){
    this.orderService.retrieveTimes('4').subscribe(times => {
      this.times = times;
      console.log(times);
    })
  }

  public editSection(num: number){
    this.sectionOpen = (this.sectionOpen === num) ? -1 : num;
  }

  public nextStep(){
    this.sectionOpen++;
  }

  public paymentChoiceChanged(){
    console.log(this.paymentChoice);
    // User chose pay at store. set payment form to valid
    if(this.paymentChoice === '2'){
      this.paymentForm.clearValidators();
    }
    else{

    }
  }

  timeSelectChanged(){
    console.log(this.timeSelectBox);
    switch(this.timeSelectBox){
      case 'next':
        this.getNextAvailableTime();
      break;
      default:
        this.selectedTime = this.timeSelectBox;
      break;
    }
  }

}
