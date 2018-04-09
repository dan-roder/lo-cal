import { Injectable } from '@angular/core';
import { LineItem } from '@local/models/LineItem';

@Injectable()
export class BagService {
  public _menuItemsInBag : Array<any> = [];
  public _lineItems : Array<LineItem> = [];


  constructor() { }

  public createLineItem ( menuItem ){
    let lineItem : LineItem = {};
    lineItem.SalesItemId = menuItem.item.DefaultItemId; // Not sure if this should come from the SalesItem object instead of the DefaultItemId
    lineItem.MenuItemId = menuItem.item.MenuItemId;
    lineItem.Name = menuItem.item.Name;
    lineItem.ShortDescription = menuItem.item.Description;
    lineItem.SpecialInstructions = menuItem.SpecialInstructions;
    lineItem.UnitPrice = menuItem.salesItems[0].Price;
    lineItem.Quantity = menuItem.Quantity;

    menuItem['totalPrice'] = lineItem.UnitPrice * lineItem.Quantity;

    // Push menuItem and lineItem into arrays
    this._lineItems.push(lineItem);
    this._menuItemsInBag.push(menuItem);

    lineItem = null;
    menuItem = null;
    console.log(this._menuItemsInBag);
  }

  public removeFromBagAtIndex( index ){
    // Remove item from both arrays
    this._lineItems.splice(index, 1);
    this._menuItemsInBag.splice(index, 1);
  }

  get menuItemsInBag() : any{
    return this._menuItemsInBag;
  }
}
