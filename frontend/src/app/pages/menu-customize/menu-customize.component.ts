import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { MenuService } from '@local/services/menu-service.service';
import { BagService } from '@local/services/bag.service';
import { ActivatedRoute } from '@angular/router';
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
  public multipleSalesItems : Array<SalesItem> = [];
  private _itemPrice : number;
  private _totalPrice : number;
  private defaultItemId : number;
  public customizationData : Object;
  public specialInstructions : string;
  private _calorieCount : number = 0;
  public currentModifierArray : Array<any> = [];
  public featuredImage : string = '';
  public featuredImageAlt : string = '';
  public sizeChoice : any;
  public requiredModifierGroups : Array<any> = [];

  constructor(
    private wpService: WordpressService,
    private menuService: MenuService,
    private bagService: BagService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    let slug = (this.router.snapshot.paramMap.get('item'));

    this.wpService.getPostBySlug(slug, 'menu_item').subscribe(item => {
      this.itemContent = item;
      let menuItemId = item[0].acf.menuid;

      this.featuredImage = (item[0].featured_media !== 0) ? item[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : '//via.placeholder.com/1440x500';
      this.featuredImageAlt = (item[0].featured_media !== 0) ? item[0]._embedded['wp:featuredmedia'][0].alt_text : '';
      this.getMenuItemDetails(menuItemId);
    });
  }

  public addModifier(modGroup, modifierClicked){
    // Retrieve maxSelections for Modifier Group and if any are currently selected
    let maxSelectionsForGroup = modGroup.MaximumItems;
    let currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];

    // Check required mods array for any required modGroups
    if(this.requiredModifierGroups.length > 0){
      // Check to see if modGroup added is in the requireds
      let indexToFind = _.findIndex(this.requiredModifierGroups, {'$id' : modGroup.$id});
      if(indexToFind > -1){
        this.requiredModifierGroups.splice(indexToFind, 1);
      }
    }

    if(currentSelectionsArray.length < maxSelectionsForGroup || maxSelectionsForGroup === 0){

      // If maxSelectionsForGroup is 0. only allow 1 of anything
      if(maxSelectionsForGroup === 0){
        let isItemAlreadySelected = _.findIndex(this.currentModifierArray, {'$id': modifierClicked.$id});

        // Only allowing 1 to be selected
        if(isItemAlreadySelected !== -1){
          return;
        }
      }

      this.customizationData[modGroup.$id]['currentlySelected'].push(modifierClicked);
      this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] += 1;
      // Add to basic array for displaying near item description
      this.currentModifierArray.push(modifierClicked);

      // If modifier item has modifier values with it
      if(modifierClicked.ItemModifiers.length > 0){
        // Add to total calorie count
        this.calorieCount += modifierClicked.ItemModifiers[0].CaloricValue;

        // If there are FreeModifiers allowed in the modGroup &&
        //    If modGroup's currently selected items exceed the amount of free modifiers, add to price
        if(this.customizationData[modGroup.$id]['currentlySelected'].length > modGroup.FreeModifiers){
          // If modifier includes additional price, add to itemPrice
          this.itemPrice += modifierClicked.ItemModifiers[0].Price;
          this.recalculateCost();
        }
      }
    }
  }

  public removeModifier(modGroup, modifierClicked){
    let currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];

    // If the modGroup clicked has a minimum requirement
    if(modGroup.MinimumItems > 0){
      // Look for group id in the required mods array
      let indexOfModGroup = _.findIndex(this.requiredModifierGroups, {'$id': modGroup.$id});
      if(indexOfModGroup === -1){
        // Re-add index to requirements, display error
        this.requiredModifierGroups.push({'$id': modGroup.$id});
      }
    }

    // If max selections for the current group is not reached
    if(currentSelectionsArray.length > 0){
      let indexToRemove = _.findIndex(currentSelectionsArray, {'$id' : modifierClicked.$id});
      let indexInDisplayArray = _.findIndex(this.currentModifierArray, {'$id' : modifierClicked.$id});

      let currentQuantity = this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'];

      if(indexToRemove > -1 && currentQuantity > 0){
        let newSelectionsArray = currentSelectionsArray.splice(indexToRemove, 1);
        this.currentModifierArray.splice(indexInDisplayArray, 1);

        currentSelectionsArray = newSelectionsArray;

        this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] -= 1;
      }

      // Subract from calorie count if the modifier has calorie changes and it's a modifier already in the array
      if(modifierClicked.ItemModifiers.length > 0 && indexToRemove !== -1){

        this.calorieCount -= modifierClicked.ItemModifiers[0].CaloricValue;

        // If there are FreeModifiers allowed in the modGroup &&
        //    If modGroup's currently selected items exceed the amount of free modifiers, add to price
        if(this.customizationData[modGroup.$id]['currentlySelected'].length >= modGroup.FreeModifiers){
          // If modifier includes additional price, remove from price
          this.itemPrice -= modifierClicked.ItemModifiers[0].Price;
          this.recalculateCost();
        }
      }
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
    menuItem['SalesItemId'] = this.salesItemDetails.SalesItemId;
    menuItem['Name'] = this.menuItemDetails.item.DisplayName;
    // Temporarily adding cart image to object so it's visible in cart
    menuItem['cartImage'] = (this.itemContent[0].acf !== undefined && this.itemContent[0].acf.cart_image !== undefined) ? this.itemContent[0].acf.cart_image.url : '//via.placeholder.com/160x240';
    menuItem['caloricValue'] = this.calorieCount;

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

  private getMenuItemDetails( menuItemId ){
    this.menuService.getMenuItemDetails(menuItemId).subscribe(menuItemDetails => {
      // Set necessary variables for template rendering
      this.menuItemDetails = menuItemDetails;

      // Find default Sales Item Id
      this.defaultItemId = menuItemDetails['item']['DefaultItemId'];

      // Using default Sales Item Id, return object with all details of that Sales Item
      this.salesItemDetails = _.find(menuItemDetails['salesItems'], {'SalesItemId': this.defaultItemId});

      // Need to account for sizes if there is more than 1 sales item
      if(menuItemDetails['salesItems'].length > 1){
        this.multipleSalesItems = menuItemDetails['salesItems'];
        this.sizeChoice = this.salesItemDetails.SalesItemId;
      }

      this.calorieCount = (this.salesItemDetails.CaloricValue !== null) ? this.salesItemDetails.CaloricValue : +this.menuItemDetails.item.CaloricServingUnit;
      this.itemPrice = this.salesItemDetails.Price;

      // Calculate initial cost based on initial quantity of 1
      this.recalculateCost();

      // Initialize defaults
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

  // Set up initial customization object and required modifier object to handle customization logic
  private registerCustomizationVariables( allModifiers, defaultOptions : Array<DefaultOption> = [] ){
    let tempObj = new Object();
    let reqMods = new Array;
    console.log(allModifiers);

    _.forEach(allModifiers, function(modifierGroup, modGroupKey){
      // Create new object to store values in
      let modObject = new Object();
      modObject['maximumItems'] = (modifierGroup.MaximumItems === 0) ? 'unlimited' : modifierGroup.MaximumItems;
      modObject['minimumItems'] = modifierGroup.MinimumItems;
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

      // If the modifier group has a minimum item requirement, push to array
      if(modifierGroup.MinimumItems > 0 && modObject['currentlySelected'].length <= 0){
        reqMods.push({'$id' : modifierGroup.$id});
      }

      tempObj[modifierGroup.$id] = new Object();
      tempObj[modifierGroup.$id] = modObject;
    });

    this.customizationData = tempObj;
    this.requiredModifierGroups = reqMods;
  }

  public updateDataPerSize(salesId: string){
    this.salesItemDetails = _.find(this.menuItemDetails.salesItems, {'SalesItemId': +salesId});
    this.calorieCount = this.salesItemDetails.CaloricValue;
    this.itemPrice = this.salesItemDetails.Price;

    // Initialize defaults
    let defaults = [];
    if(this.salesItemDetails.ModGroups.length > 0){
      // Does the sales item have defaults?
      if(this.salesItemDetails.DefaultOptions.length > 0){
        defaults = this.salesItemDetails.DefaultOptions;
      }

      this.registerCustomizationVariables( this.salesItemDetails.ModGroups, defaults );
    }

    // Calculate initial cost based on initial quantity of 1
    this.recalculateCost();
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
