import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Order } from '@local/models/Order';
import { LineItem } from '@local/models/LineItem';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient, private localStorage: LocalStorage) { }

  public putOrder(bagItems: Array<LineItem>){
    console.log(bagItems);
    let order : Order = {

    }
  }

}
