import { Injectable } from '@angular/core';
import { LineItem, LineItemModifier } from '@local/models/LineItem';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class BagService {
  public _lineItems : Array<LineItem> = [];
  public _itemsInBag : Array<LineItem> = [];
  public _itemCountInBag : number = 0;
  private _totalPrice : number;

  constructor(protected localStorage: LocalStorage) {
    this.localStorage.getItem('bag').subscribe(bagItemsFromLocalStorage => {
      this.itemsInBag = bagItemsFromLocalStorage || [];
      this.updatePrice(bagItemsFromLocalStorage);
    })
  }

  public createLineItem( passedMenuItem ){
    // Send item to get Modifiers
    let modifiers = this.constructLineItemModifiers(passedMenuItem.Modifiers);

    console.log(passedMenuItem);

    let lineItem : LineItem = {
      SalesItemId : passedMenuItem.SalesItemId,
      MenuItemId : passedMenuItem.item.MenuItemId,
      Name : passedMenuItem.Name,
      ShortDescription : passedMenuItem.item.Description,
      SpecialInstructions : passedMenuItem.SpecialInstructions,
      UnitPrice : passedMenuItem.salesItems[0].Price,
      Quantity : passedMenuItem.Quantity,
      ExtendedPrice : passedMenuItem.TotalPrice * passedMenuItem.Quantity,
      Modifiers : modifiers,
      cartImage : passedMenuItem.cartImage
    };

    // Push menuItem and lineItem into arrays
    this._itemsInBag.push(lineItem);
    // Update pricing
    this._totalPrice += passedMenuItem.TotalPrice;

    // Save to localStorage
    this.saveToLocalStorage();

    lineItem = null;
  }

  public quickAddLineItem( passedMenuItem ){
    console.log(passedMenuItem);

    let lineItem : LineItem = {
      SalesItemId : passedMenuItem.DefaultItemId, // Not sure if this should come from the SalesItem object instead of the DefaultItemId
      MenuItemId : passedMenuItem.MenuItemId,
      Name : passedMenuItem.Name,
      ShortDescription : passedMenuItem.Description,
      SpecialInstructions : passedMenuItem.SpecialInstructions,
      UnitPrice : passedMenuItem.defaultPrice,
      Quantity : 1,
      ExtendedPrice : passedMenuItem.defaultPrice
    };

    // Push menuItem and lineItem into arrays
    this._itemsInBag.push(lineItem);
    // Update pricing
    this._totalPrice += passedMenuItem.defaultPrice;

    // Save to localStorage
    this.saveToLocalStorage();

    lineItem = null;
  }

  public orderItemAgain( lineItem: LineItem ){
    this._itemsInBag.push(lineItem);
    this._totalPrice += lineItem.UnitPrice;
    this.saveToLocalStorage();
  }

  private constructLineItemModifiers(allModifiers) : Array<LineItemModifier>{
    let formattedLineItemModifierArray : Array<LineItemModifier> = [];

    _.forEach(allModifiers, function(modGroup, key){
      let modifierGroupId = modGroup.groupDetails.ModifierGroupId;

      if(modGroup.currentlySelected.length > 0){

        _.forEach(modGroup.currentlySelected, function(modifier, key){
          // Set initial quantity for the modifier being added
          let modifierQuantity : number = 1;

          // If the modifier ID we're iterating over exists
          let modExists = _.findIndex(formattedLineItemModifierArray, {SalesItemOptionId: modifier.ModifierId});

          // If it does, increase the quantity of that modifier
          if(modExists !== -1){
            formattedLineItemModifierArray[modExists].Quantity++;
          }
          // Else, construct the object and insert it
          else{
            let lineItemModifierObject : LineItemModifier = {
              Name : modifier.Name,
              ItemOptionGroupId : modifierGroupId,
              SalesItemOptionId : modifier.ModifierId,
              Quantity : modifierQuantity
            };

            formattedLineItemModifierArray.push(lineItemModifierObject);
          }
        });
      }
    });

    return formattedLineItemModifierArray;
  }

  public removeFromBagAtIndex( index ){
    // Update front facing price
    this._totalPrice -= this._itemsInBag[index].ExtendedPrice;
    // Remove item from both arrays
    this._itemsInBag.splice(index, 1);
    // Bag was modified, overwrite localStorage object with saved object
    this.saveToLocalStorage();
  }

  private updatePrice(bagItems){
    let value = 0;

    _.forEach(bagItems, function(item, key){
      value += item.ExtendedPrice;
    });

    this._totalPrice = value;
  }

  get itemCountInBag() : number{
    return (this._itemsInBag === null) ? 0 : this._itemsInBag.length;
  }

  get itemsInBag() : Array<LineItem>{
    return this._itemsInBag;
  }

  set itemsInBag(items: Array<LineItem>){
    this._itemsInBag = items;
  }

  get totalPrice(): number{
    return this._totalPrice;
  }

  set totalPrice(price: number){
    this._totalPrice = price;
  }

  protected saveToLocalStorage(){
    this.localStorage.setItem('bag', this.itemsInBag).subscribe(() => {});
  }

  public retrieveBagFromStorage(): Observable<Array<LineItem>>{
    return this.localStorage.getItem('bag').map(data => {
      return data;
    })
  }

}
