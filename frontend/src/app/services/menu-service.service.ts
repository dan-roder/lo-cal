import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '@local/utils/constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {
  public menuItemId: string = null;
  public localMenu: any;
  public _subMenuItems: any;
  public _subMenuId: string;

  constructor(private config: Config, private httpClient: HttpClient) { }

  getFullMenuAndStore(){
    // Using local storage
    this.localMenu = this.get().subscribe(menu => {
      localStorage.setItem('menu', JSON.stringify(menu));
      return menu;
    });
  }

  public saveSubMenuItems(){

  }

  getMenuItemDetails( _menuItemId : number ){
    return this.get(`menu-item/${_menuItemId}`);
  }

  getSubMenus(){
    return this.get('submenus');
  }

  getSubMenuItems(subMenuId){
    return this.get('submenus/' + subMenuId);
  }

  get(apiMethod: string = ''){
    let url = this.config.railsMenuApi + '/' + apiMethod;
    return this.httpClient.get(url);
  }

  get subMenuId(): string{
    return this._subMenuId;
  }

  set subMenuId(id: string){
    this._subMenuId = id;
  }

  get subMenuItems(){
    return this._subMenuItems;
  }

  set subMenuItems(items){
    this._subMenuItems = items;
  }
}
