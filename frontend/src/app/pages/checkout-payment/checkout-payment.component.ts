import { Component, OnInit } from '@angular/core';
import { OrderService } from '@local/services/order.service';
import { Order, InSubmitOrderInformation, RailsInSubmitOrder, RailsSavePayment } from '@local/models/Order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ccinfo from 'credit-card-type';
import { Config } from '@local/utils/constants';
import { CustomerService } from '@local/services/customer.service';
import { Customer } from '@local/models/Customer';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'lo-cal-checkout-payment',
  templateUrl: './checkout-payment.component.html'
})
export class CheckoutPaymentComponent implements OnInit {
  public currentOrder : Order;
  public contactInfoForm : FormGroup;
  public submittedOnce : boolean = false;
  public paymentForm : FormGroup;
  public pickupForm : FormGroup;
  public sectionOpen : number = 1;
  public paymentChoice : string = '1';
  public processing : boolean = false;
  public cardType : number = undefined;
  public activeCardClass : string = '';
  public currentCustomer : Customer;
  public orderForDisplay : Array<any>;


  constructor(private orderService: OrderService, private fb: FormBuilder, private constants: Config, private customerService: CustomerService, private router: Router) {
    this.contactInfoForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'phone' : null
    });
    this.paymentForm = fb.group({
      'payment-choice' : [this.paymentChoice, Validators.required],
      'card-number' : [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      'expiration-date' : [null, [Validators.required, Validators.pattern('^[0-9]{2}\/{1}[0-9]{4}$')]],
      'cvv' : [null, [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      'save-payment' : [null]
    });
    this.pickupForm = fb.group({
      'pickup-selection' : ['', Validators.required],
      'vehicle-make' : [null],
      'vehicle-model' : [null],
      'vehicle-color' : [null]
    })
  }

  ngOnInit() {
    // Get current customer info. Patch contact form
    this.customerService.isLoggedIn().subscribe(customer => {
      this.currentCustomer = customer;
      this.patchContactForm(customer);
    })

    // Get Full Order Details from API
    this.orderService.getPreSavedOrder().subscribe(order => {
      let orderId = order.OrderId;

      this.orderService.getFullOrderDetails(orderId).subscribe(fullOrder => {
        this.calculateTotal(fullOrder);
        this.currentOrder = fullOrder;
      })
    });
  }

  public editSection(num: number){
    this.sectionOpen = (this.sectionOpen === num) ? -1 : num;
  }

  public nextStep(){
    this.sectionOpen++;
  }

  public submitOrder(){
    // 1. Start spinner
    this.processing = true;
    // 2. Retrieve order
    // TEMPORARY
    this.orderService.getPreSavedOrder().subscribe(order => {
      let orderId = order.OrderId;

      // Retrieve order again to ensure local storage order wasn't manipulated
      this.orderService.getFullOrderDetails(orderId).subscribe(fullOrder => {
        this.currentOrder = fullOrder;
        // 3. Construct order with all form details
        this.constructOrder(fullOrder);
      })
    });

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

    let finalOrderForSubmission : RailsInSubmitOrder = {
      order_submission : orderForApi
    }

    // Order object with payment has been created, submit to API
    this.orderService.submitOrder(finalOrderForSubmission, this.currentOrder.OrderId).subscribe(orderResults => {
      if(orderResults.ResultCode == 0){

        // If Customer wishes to save payment method
        if(this.paymentForm.get('save-payment').value){
          let paymentInfoForSaving : RailsSavePayment = {
            payment : {
              AccountNumber: this.paymentForm.get('card-number').value,
              ExpirationDate: this.formatDate(this.paymentForm.get('expiration-date').value),
              PaymentMethodType: this.cardType
            }
          }

          // Save payment method, then navigate to confirmation
          this.customerService.savePaymentMethod(paymentInfoForSaving, this.currentCustomer.CustomerId).subscribe(response => {
            this.navigateToConfirmation();
          });
        }
        else{
          this.navigateToConfirmation();
        }
      }
    });
  }

  protected constructClearCreditCardPayment(): InSubmitOrderInformation{
    let expirationDate = this.paymentForm.get('expiration-date').value;
    let finalExpDate = this.formatDate(expirationDate);

    let inSubmitOrderInfo : InSubmitOrderInformation = {
      PaymentMethods : [{
        PaymentMethod : 1,
        Amount : this.currentOrder.BalanceDueAmount,
        AccountNumber : this.paymentForm.get('card-number').value,
        ExpirationDate : finalExpDate,
        SecurityCode : this.paymentForm.get('cvv').value,
        PaymentMethodType : this.cardType,
        ProcessingType : 0
      }],
      SendEmail: true
    }

    return inSubmitOrderInfo;
  }

  protected constructPayAtSitePayment(): InSubmitOrderInformation{
    let inSubmitOrderInfo : InSubmitOrderInformation = {
      PaymentMethods : [{
        PaymentMethod : 2
      }],
      SendEmail: true
    }

    return inSubmitOrderInfo;
  }

  protected calculateTotal(fullOrder){
    let orderArray = Array();

    _.forEach(fullOrder.LineItems, function(value, key){
      let initialPrice = value.UnitPrice;
      let addOnPrice = 0;
      let modArray = Array();
      _.forEach(value.Modifiers, function(value, key){
        addOnPrice += (value.ExtendedPrice > 0) ? value.ExtendedPrice : 0;
        let modOject = {
          'name' : value.Name
        }
        modArray.push(modOject);
      });
      let finalPrice = initialPrice + addOnPrice;
      let obj = {
        'name' : value.Name,
        'fullPrice' : finalPrice,
        'quantity' : value.Quantity,
        'modifiers' : modArray
      }
      orderArray.push(obj);
    });

    this.orderForDisplay = orderArray;
  }

  public detectCardType(val){
    let cardType = ccinfo(val);
    this.activeCardClass = (val.length > 0) ? cardType[0].type : '';
    let cardNumber : number = (val.length > 0) ? this.constants.paymentTypeMap[cardType[0].niceType] : undefined;
    this.cardType = cardNumber;
  }

  private patchContactForm(customer: Customer){
    this.contactInfoForm.patchValue({
      'first-name' : customer.FirstName,
      'last-name' : customer.LastName,
      'email' : customer.EMail
    })
  }

  protected formatDate(date: string){
    return moment('01/' + date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  }

  protected navigateToConfirmation(){
    this.router.navigate(['/checkout/confirmation']);
  }

}