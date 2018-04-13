import { Injectable } from '@angular/core';
import { LineItem } from '@local/models/LineItem';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BagService {
  public _lineItems : Array<LineItem> = [];
  public _itemsInBag : Array<LineItem> = [];
  public _itemCountInBag : number = 0;

  constructor(protected localStorage: LocalStorage) {
    this.localStorage.getItem('bag').subscribe(bagItemsFromLocalStorage => {
      console.log('bag items retrieved', bagItemsFromLocalStorage);
      this.itemsInBag = bagItemsFromLocalStorage;
    })
  }

  public createLineItem ( passedMenuItem ){
    let lineItem : LineItem = {};

    lineItem.SalesItemId = passedMenuItem.item.DefaultItemId; // Not sure if this should come from the SalesItem object instead of the DefaultItemId
    lineItem.MenuItemId = passedMenuItem.item.MenuItemId;
    lineItem.Name = passedMenuItem.item.Name;
    lineItem.ShortDescription = passedMenuItem.item.Description;
    lineItem.SpecialInstructions = passedMenuItem.SpecialInstructions;
    lineItem.UnitPrice = passedMenuItem.salesItems[0].Price;
    lineItem.Quantity = passedMenuItem.Quantity;
    lineItem.ExtendedPrice = lineItem.UnitPrice * lineItem.Quantity;

    // Push menuItem and lineItem into arrays
    this._itemsInBag.push(lineItem);

    // Save to localStorage
    this.saveToLocalStorage();

    lineItem = null;
  }

  public removeFromBagAtIndex( index ){
    // Remove item from both arrays
    this._itemsInBag.splice(index, 1);
    // Bag was modified, overwrite localStorage object with saved object
  }

  get itemCountInBag() : number{
    return this._itemsInBag.length;
  }

  get itemsInBag() : Array<LineItem>{
    // console.log('service bag items getter', this._itemsInBag);
    return this._itemsInBag;
  }

  set itemsInBag(items: Array<LineItem>){
    this._itemsInBag = items;
  }

  protected saveToLocalStorage(){
    this.localStorage.setItem('bag', this.itemsInBag).subscribe(() => {
      console.log('saved to localStorage', this.itemsInBag);
    })
  }

  public retrieveBagFromStorage(): Observable<Array<LineItem>>{
    return this.localStorage.getItem('bag').map(data => {
      return data;
    })
  }

}
