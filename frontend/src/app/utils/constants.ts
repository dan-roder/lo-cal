import { Injectable } from "@angular/core";
import { WindowRef } from './windowref';

@Injectable()
export class Config {
  public wordpressApiUrl : string = '';
  public railsMenuApi : string = 'http://138.197.123.70/menus/1';
  public railsCustomerEndpoint : string = 'http://138.197.123.70/customers';
  public authenticateEndpoint : string = 'http://138.197.123.70/authenticate';
  public railsOrderEndpoint : string = 'http://138.197.123.70/orders';
  public railsTimeEndpoint : string = 'http://138.197.123.70/times/1';
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

  constructor(private winRef: WindowRef){
    // Setting API URL based on current environment
    switch(winRef.nativeWindow.location.hostname){
      case 'localhost':
        this.wordpressApiUrl = "http://lo-cal.local/wp-json";
      break;
      case 'live-lo-cal.pantheonsite.io':
        this.wordpressApiUrl = "https://www.lo-calkitchen.com/wp-json";
      break;
      default:
        this.wordpressApiUrl = "http://" + winRef.nativeWindow.location.hostname + "/wp-json";
      break;
    }

  }
}