import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '../utils/constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuServiceService {

  constructor(private config: Config, private httpClient: HttpClient) { }

  getMenuCategories(){

  }

}
