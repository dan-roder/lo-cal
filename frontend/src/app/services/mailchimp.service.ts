import { Injectable } from '@angular/core';
import { Config } from '@local/utils/constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MailchimpSignup } from '@local/models/Customer';

@Injectable()
export class MailchimpService {
  private httpOptions: any;
  protected apiKey: string = '44a3b36ccc5b4109a29346f9c892b443-us14';

  constructor(private constants: Config, private http: HttpClient) {

  }

  public signUpForNewsletter(email: string): Observable<any>{
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('local:' + this.apiKey));

    this.httpOptions = {
      headers: httpHeaders
    }

    let payload: MailchimpSignup = {
      email_address : email,
      status : "subscribed"
    }

    console.log(httpHeaders);
    console.log(payload, this.httpOptions);

    return this.http.post(this.constants.mailchimpEndpoint, payload, {headers: httpHeaders}).map(result => {
      return result;
    });
  }

}
