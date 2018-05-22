import { Component, OnInit } from '@angular/core';
import { OrderService } from '@local/services/order.service';
import { Order, InSubmitOrderInformation } from '@local/models/Order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ccinfo from 'credit-card-type';
import { Config } from '@local/utils/constants';

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
  public processing : boolean = false;
  public cardType : number = undefined;
  public activeCardClass : string = '';

  constructor(private orderService: OrderService, private fb: FormBuilder, private constants: Config) {
    this.contactInfoForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'phone' : [null, Validators.required]
    });
    this.paymentForm = fb.group({
      'payment-choice' : [this.paymentChoice, Validators.required],
      'card-number' : [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      'expiration-date' : [null, [Validators.required, Validators.pattern('^[0-9]{2}\/{1}[0-9]{4}$')]],
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

  public timeSelectChanged(){
    switch(this.timeSelectBox){
      case 'next':
        this.getNextAvailableTime();
      break;
      default:
        this.selectedTime = this.timeSelectBox;
      break;
    }
  }

  public submitOrder(){
    // 1. Start spinner
    this.processing = true;
    // 2. Retrieve order
    // TEMPORARY
    this.orderService.getPreSavedOrder().subscribe(order => {
      let orderId = order.OrderId;

      this.orderService.getFullOrderDetails(orderId).subscribe(fullOrder => {
        console.log(fullOrder);
        this.currentOrder = fullOrder;
        this.constructOrder(fullOrder);
      })
    })
    // 3. Construct order with all form details
    //
  }

  protected constructOrder(order: Order){
    let orderForApi : InSubmitOrderInformation;

    // If saved card checked
    switch(this.paymentChoice){
      case '1' :
        orderForApi = this.constructClearCreditCardPayment();
      break;
      case '2' :
        orderForApi = this.constructPayAtSitePayment();
      break;
    }

    console.log(orderForApi);
    // Order object with payment has been created, submit to API


  }

  protected constructClearCreditCardPayment(): InSubmitOrderInformation{

    let inSubmitOrderInfo : InSubmitOrderInformation = {
      PaymentMethods : {
        PaymentMethod : 1,
        Amount : this.currentOrder.BalanceDueAmount,
        AccountId : this.paymentForm.get('card-number').value,
        ExpirationDate : this.paymentForm.get('expiration-date').value,
        SecurityCode : this.paymentForm.get('cvv').value,
        PaymentMethodType : this.cardType
      },
      SendEmail: true
    }

    return inSubmitOrderInfo;
  }

  protected constructPayAtSitePayment(): InSubmitOrderInformation{
    let inSubmitOrderInfo : InSubmitOrderInformation = {
      PaymentMethods : {
        PaymentMethod : 2,
        Amount : this.currentOrder.BalanceDueAmount
      },
      SendEmail: true
    }

    return inSubmitOrderInfo;
  }

  public detectCardType(val){
    let cardType = ccinfo(val);
    this.activeCardClass = (val.length > 0) ? cardType[0].type : '';
    let cardNumber : number = (val.length > 0) ? this.constants.paymentTypeMap[cardType[0].niceType] : undefined;
    this.cardType = cardNumber;
  }

}
