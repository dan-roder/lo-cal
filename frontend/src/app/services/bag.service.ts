import { Injectable } from '@angular/core';
import { LineItem } from '@local/models/LineItem';

@Injectable()
export class BagService {
  public menuItemsInBag : Array<any> = [];
  public lineItems : Array<LineItem> = [];


  constructor() { }

  public createLineItem ( menuItem ){
    console.log(menuItem);

    let lineItem : LineItem = {};
    lineItem.SalesItemId = menuItem.item.DefaultItemId; // Not sure if this should come from the SalesItem object instead of the DefaultItemId
    lineItem.MenuItemId = menuItem.item.MenuItemId;
    lineItem.Name = menuItem.item.Name;
    lineItem.ShortDescription = menuItem.item.Description;
    lineItem.SpecialInstructions = menuItem.SpecialInstructions;
    lineItem.UnitPrice = menuItem.salesItems[0].Price;
    lineItem.Quantity = menuItem.Quantity;

    // Push menuItem and lineItem into arrays
    this.lineItems.push(lineItem);
    this.menuItemsInBag.push(menuItem);
  }

  public removeFromBag( ){

  }
}
