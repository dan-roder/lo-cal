import { Injectable } from "@angular/core";
import { WindowRef } from './windowref';

@Injectable()
export class Config {
  public wordpressApiUrl : string = '';
  public railsMenuApi : string = 'https://api.lo-calkitchen.com/menus/1';
  public railsCustomerEndpoint : string = 'https://api.lo-calkitchen.com/customers';
  public authenticateEndpoint : string = 'https://api.lo-calkitchen.com/authenticate';
  public railsOrderEndpoint : string = 'https://api.lo-calkitchen.com/orders';
  public railsTimeEndpoint : string = 'https://api.lo-calkitchen.com/times/1';
  public allTimesEndpoint : string = 'https://api.lo-calkitchen.com/times/1/1/0/1001';
  public siteId : number = 1;
  public menuId : number = 1001;
  public paymentTypeMap = {
    "American Express" : 0,
    "Credit" : 1,
    "Diners Club" : 2,
    "Discover" : 3,
    "GiftCard" : 4,
    "JCB" : 5,
    "Mastercard" : 6,
    "Visa" : 7,
    "PrePaid" : 8
  }
  public cardTypeMap = {
    0 : 'Unknown',
    1 : 'Visa',
    2 : 'Mastercard',
    3 : 'American Express',
    4 : 'Discover',
    5 : 'Diners Club',
    6 : 'JCB',
    7 : 'Paypal'
  }
  public cardClassMap = {
    0 : 'unknown',
    1 : 'visa',
    2 : 'master-card',
    3 : 'american-express',
    4 : 'discover',
    5 : 'diners-club',
    6 : 'jcb',
    7 : 'paypal'
  }

  constructor(private winRef: WindowRef){
    // Setting API URL based on current environment
    switch(winRef.nativeWindow.location.hostname){
      case 'localhost':
        this.wordpressApiUrl = "https://local.lndo.site/wp-json";
      break;
      case 'live-lo-cal.pantheonsite.io':
        this.wordpressApiUrl = "https://www.lo-calkitchen.com/wp-json";
      break;
      default:
        this.wordpressApiUrl = "https://" + winRef.nativeWindow.location.hostname + "/wp-json";
      break;
    }

  }
}