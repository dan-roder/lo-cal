import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { MenuService } from '@local/services/menu-service.service';
import { BagService } from '@local/services/bag.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@local/models/post';
import { SalesItem } from '@local/models/SalesItem';
import * as _ from 'lodash';
import { DefaultOption } from '@local/models/DefaultOption';

@Component({
  selector: 'lo-cal-menu-customize',
  templateUrl: './menu-customize.component.html'
})
export class MenuCustomizeComponent implements OnInit {
  public quantity: number = 1;
  public itemContent : any;
  public menuItemDetails : any;
  public salesItemDetails : SalesItem;
  private _itemPrice : number;
  private _totalPrice : number;
  private defaultItemId : number;
  public customizationData : Object;
  public specialInstructions : string;
  private _calorieCount : number = 0;
  public currentModifierArray : Array<any> = [];
  public featuredImage : any;

  constructor(
    private wpService: WordpressService,
    private menuService: MenuService,
    private bagService: BagService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    let slug = (this.router.snapshot.paramMap.get('item'));

    this.wpService.getPostBySlug(slug, 'menu_item').subscribe(_item => {
      this.itemContent = _item;
      let menuItemId = _item[0].acf.menuid;
      this.featuredImage = _item[0]._embedded['wp:featuredmedia'][0];
      this.getMenuItemDetails(menuItemId);
    });
  }

  public addModifier(modGroup, modifierClicked){
    // Retrieve maxSelections for Modifier Group and if any are currently selected
    let maxSelectionsForGroup = modGroup.MaximumItems;
    let currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];

    // If max selections for the current group is not reached
    if(currentSelectionsArray.length < maxSelectionsForGroup){
      this.customizationData[modGroup.$id]['currentlySelected'].push(modifierClicked);
      this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] += 1;
      // Add to basic array for displaying near item description
      this.currentModifierArray.push(modifierClicked);

      // If modifier item has modifier values with it
      if(modifierClicked.ItemModifiers.length > 0){
        // Add to total calorie count
        this.calorieCount += modifierClicked.ItemModifiers[0].CaloricValue;

        // If modifier includes additional price, add to itemPrice
        this.itemPrice += modifierClicked.ItemModifiers[0].Price;
        this.recalculateCost();
      }
    }
    else{
      console.log('selection for current category full');
    }
  }

  public removeModifier(modGroup, modifierClicked){
    let currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];

    // If max selections for the current group is not reached
    if(currentSelectionsArray.length > 0){
      let indexToRemove = _.findIndex(currentSelectionsArray, {'$id' : modifierClicked.$id});
      let indexInDisplayArray = _.findIndex(this.currentModifierArray, {'$id' : modifierClicked.$id});
      console.log(modifierClicked.$id, indexInDisplayArray);

      let currentQuantity = this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'];

      if(indexToRemove > -1 && currentQuantity > 0){
        let newSelectionsArray = currentSelectionsArray.splice(indexToRemove, 1);
        this.currentModifierArray.splice(indexInDisplayArray, 1);

        currentSelectionsArray = newSelectionsArray;

        this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] -= 1;
      }

      // Subract from calorie count if the modifier has calorie changes
      if(modifierClicked.ItemModifiers.length > 0){
        this.calorieCount -= modifierClicked.ItemModifiers[0].CaloricValue;

        // If modifier includes additional price, remove from price
        this.itemPrice -= modifierClicked.ItemModifiers[0].Price;
        this.recalculateCost();
      }
    }
    else{
      console.log('selection for current category already empty');
    }
  }

  public incrementQuantity(){
    this.quantity++;
    this.recalculateCost();
  }

  public decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
      this.recalculateCost();
    }
  }

  public addToBag(){
    // Adding to bag needs to have all details of modifications
    //  Start simple. Add just the item itself
    let menuItem = {};

    menuItem = this.menuItemDetails;

    // add quantity and totalPrice to object
    let quantity = this.quantity;
    let totalPrice = this.totalPrice;
    menuItem['Quantity'] = quantity;
    menuItem['TotalPrice'] = totalPrice;
    menuItem['Modifiers'] = _.values(this.customizationData);

    // Push full object to bag service
    this.bagService.createLineItem(menuItem);

    // Wipe out local values
    menuItem = null;
    quantity = null;
    totalPrice = null;
  }

  private recalculateCost(){
    this.totalPrice = this.itemPrice * this.quantity;
  }

  private getMenuItemDetails( _menuItemId ){
    this.menuService.getMenuItemDetails(_menuItemId).subscribe(_menuItemDetails => {
      // Set necessary variables for template rendering
      this.menuItemDetails = _menuItemDetails;
      // Find default Sales Item Id
      this.defaultItemId = _menuItemDetails['item']['DefaultItemId'];
      // Using default Sales Item Id, return object with all details of that Sales Item
      this.salesItemDetails = _.find(_menuItemDetails['salesItems'], {'SalesItemId': this.defaultItemId});

      this.itemPrice = this.salesItemDetails['Price'];
      this.calorieCount = this.salesItemDetails.CaloricValue;

      // Calculate initial cost based on initial quantity of 1
      this.recalculateCost();

      /**
       * NEED TO SET A LOT OF VARIABLES HERE FOR CUSTOMIZATION
       *  MOSTLY FOR CREATE YOUR OWN VARIETY OPTIONS
       *
       * 1) DOES ITEM HAVE MODIFIERS AT ALL. IF NOT SKIP EVERYTHING
       * */
      let defaults = [];
      if(this.salesItemDetails.ModGroups.length > 0){
        // Does the sales item have defaults?
        if(this.salesItemDetails.DefaultOptions.length > 0){
          defaults = this.salesItemDetails.DefaultOptions;
        }

        this.registerCustomizationVariables( this.salesItemDetails.ModGroups, defaults );
      }
    });
  }

  private registerCustomizationVariables( allModifiers, defaultOptions : Array<DefaultOption> = [] ){
    let tempObj = new Object();
    let defaultsArray = new Array();

    _.forEach(allModifiers, function(modifierGroup, modGroupKey){
      // Create new object to store values in
      let modObject = new Object();
      modObject['maximumItems'] = modifierGroup.MaximumItems;
      modObject['minimumItems'] = modifierGroup.MaximumItems;
      modObject['currentlySelected'] = new Array;
      modObject['modifiers'] = new Object();
      modObject['groupDetails'] = new Object();

      _.forEach(modifierGroup.Mods, function(modifier, key){
        modObject['groupDetails'] = modifierGroup;
        modObject['modifiers'][modifier.$id] = new Object();
        let isModDefault = _.find(defaultOptions, {'ModifierId': modifier.ModifierId});
        if(isModDefault !== undefined){
          modObject['modifiers'][modifier.$id]['quantity'] = isModDefault.DefaultQuantity;
          modObject['currentlySelected'].push(modifier);
        }
        else{
          modObject['modifiers'][modifier.$id]['quantity'] = 0;
        }

      });

      tempObj[modifierGroup.$id] = new Object();
      tempObj[modifierGroup.$id] = modObject;
    });

    this.customizationData = tempObj;
  }

  /**
   *
   * Getters & Setters
   *
   */
  get calorieCount(): number{
    return this._calorieCount;
  }

  set calorieCount(calories: number){
    this._calorieCount = calories;
  }

  get totalPrice(): number{
    return this._totalPrice;
  }

  set totalPrice(price : number){
    this._totalPrice = price;
  }

  get itemPrice(): number{
    return this._itemPrice;
  }

  set itemPrice(price : number){
    this._itemPrice = price;
  }
}
