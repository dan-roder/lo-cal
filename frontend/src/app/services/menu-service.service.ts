import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '../utils/constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {
  public menuItemId: number = null;

  constructor(private config: Config, private httpClient: HttpClient) { }

  getSubMenus(){
    return this.get('submenus');
  }

  getSubMenuItems(subMenuItemName){
    return this.get(subMenuItemName);
  }

  get(apiMethod: string){
    let url = this.config.railsApi + '/' + apiMethod;

    return this.httpClient.get(url);
  }

}
