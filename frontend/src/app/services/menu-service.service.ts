import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '../utils/constants';
import { Observable } from 'rxjs/Observable';
import { Window } from 'selenium-webdriver';
import { WindowRef } from '../utils/windowref';

@Injectable()
export class MenuService {
  public menuItemId: number = null;
  public localMenu: any;

  constructor(private config: Config, private httpClient: HttpClient) { }

  getFullMenuAndStore(){
    // Using local storage
    this.localMenu = this.get().subscribe(menu => {
      localStorage.setItem('menu', JSON.stringify(menu));
      return menu;
    });
  }

  getSubMenus(){
    return this.get('submenus');
  }

  getSubMenuItems(subMenuItemName){
    return this.get(subMenuItemName);
  }

  get(apiMethod: string = ''){
    let url = this.config.railsApi + '/' + apiMethod;
    console.log(url);
    return this.httpClient.get(url);
  }

}
