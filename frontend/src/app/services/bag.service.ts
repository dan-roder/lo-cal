import { Injectable } from '@angular/core';
import { LineItem } from '@local/models/LineItem';

@Injectable()
export class BagService {
  public _menuItemsInBag : Array<any> = [];
  public _lineItems : Array<LineItem> = [];


  constructor() { }

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
    this._lineItems.push(lineItem);

    lineItem = null;
    console.log(this._lineItems);
  }

  public removeFromBagAtIndex( index ){
    // Remove item from both arrays
    this._lineItems.splice(index, 1);
    this._menuItemsInBag.splice(index, 1);
  }

  // get menuItemsInBag() : any{
  //   return this._menuItemsInBag;
  // }

  get lineItems() : Array<LineItem>{
    return this._lineItems;
  }
}
