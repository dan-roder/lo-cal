import { Injectable } from '@angular/core';
import { Config } from '@local/utils/constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MailchimpSignup } from '@local/models/Customer';

@Injectable()
export class MailchimpService {
  constructor(private constants: Config, private http: HttpClient) {

  }

  public signUpForNewsletter(email: string): Observable<any>{
    let payload: MailchimpSignup = {
      email_address : email,
      status : "subscribed"
    }

    let json = JSON.stringify(payload);
    return this.http.post(this.constants.wordpressApiUrl + `/mailchimp/v2/signup`, json).map(result => {
      return result;
    });
  }

}
