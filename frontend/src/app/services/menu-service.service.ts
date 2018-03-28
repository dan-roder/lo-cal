import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '@local/utils/constants';
import { Observable } from 'rxjs/Observable';

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

  getSubMenuItems(subMenuId){
    return this.get('submenus/' + subMenuId);
  }

  get(apiMethod: string = ''){
    let url = this.config.railsApi + '/' + apiMethod;
    console.log(url);
    return this.httpClient.get(url);
  }

}
