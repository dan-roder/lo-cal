import { Injectable } from "@angular/core";
import { WindowRef } from './windowref';

@Injectable()
export class Config {
  //public wordpressApiUrl = "http://dev-lo-cal.pantheonsite.io/wp-json"
  public wordpressApiUrl:string = '';

  constructor(private winRef: WindowRef){
    console.log(winRef.nativeWindow.location);
    switch(winRef.nativeWindow.location.hostname){
      case 'localhost':
        this.wordpressApiUrl = "http://lo-cal.dev/wp-json";
      break;
      default:
        this.wordpressApiUrl = "http://" + winRef.nativeWindow.location.hostname + "/wp-json";
      break;
    }

  }
}