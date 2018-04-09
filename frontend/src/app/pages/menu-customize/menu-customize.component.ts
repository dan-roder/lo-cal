import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { MenuService } from '@local/services/menu-service.service';
import { BagService } from '@local/services/bag.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@local/models/post';
import { SalesItem } from '@local/models/SalesItem';
import * as _ from 'lodash';

@Component({
  selector: 'lo-cal-menu-customize',
  templateUrl: './menu-customize.component.html'
})
export class MenuCustomizeComponent implements OnInit {
  public quantity: number = 1;
  public itemContent : IPost;
  public menuItemDetails : any;
  public salesItemDetails : SalesItem;
  public itemPrice : number;
  public totalPrice : number;
  private defaultItemId : number;
  public customizationData : Object;
  public testArr : Array<Object>;
  public specialInstructions : string;

  constructor(
    private wpService: WordpressService,
    private menuService: MenuService,
    private bagService: BagService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    let slug = (this.router.snapshot.paramMap.get('item'));

    this.wpService.getPostBySlug(slug, 'menu_item').subscribe(_item => {
      let menuItemId = _item[0].acf.menuid;

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
    }
    else{
      console.log('selection for current category full');
    }
    console.log(this.customizationData);
  }

  public removeModifier(modGroup, modifierClicked){
    let currentSelectionsArray = this.customizationData[modGroup.$id]['currentlySelected'];
    // If max selections for the current group is not reached
    if(currentSelectionsArray.length > 0){
      let indexToRemove = _.findIndex(currentSelectionsArray, {'$id' : modifierClicked.$id});
      let currentQuantity = this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'];

      if(indexToRemove > -1 && currentQuantity > 0){
        let newSelectionsArray = currentSelectionsArray.splice(indexToRemove, 1);
        currentSelectionsArray = newSelectionsArray;
        this.customizationData[modGroup.$id].modifiers[modifierClicked.$id]['quantity'] -= 1;
      }
    }
    else{
      console.log('selection for current category already empty');
    }
    console.log(this.customizationData);
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
    // Special instructions don't already exist on the menuItem so add them
    menuItem['SpecialInstructions'] = this.specialInstructions;
    // Retrieve Quantity and add it to menuItem sent to bagService
    menuItem['Quantity'] = this.quantity;

    this.bagService.createLineItem(menuItem);
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

      // Calculate initial cost based on initial quantity of 1
      this.recalculateCost();

      /**
       * NEED TO SET A LOT OF VARIABLES HERE FOR CUSTOMIZATION
       *  MOSTLY FOR CREATE YOUR OWN VARIETY OPTIONS
       *
       * 1) DOES ITEM HAVE MODIFIERS AT ALL. IF NOT SKIP EVERYTHING
       * */
      if(this.salesItemDetails.ModGroups.length > 0){
        this.registerCustomizationVariables( this.salesItemDetails.ModGroups );
      }
      /**
       *
       *
       * 2) DOES IT HAVE MODIFIERS
       *    a) Are the modifiers optional (juices with protein powder). No defaults set
       *    b) Are there default options. Need to check the boxes if they're defaults
       *
       *
       *
       */
    });
  }

  private registerCustomizationVariables( allModifiers ){
    let tempObj = new Object();
    let tempArr = new Array();

    _.forEach(allModifiers, function(modifierGroup, key){
      // Create new object to store values in
      let modObject = new Object();
      modObject['maximumItems'] = modifierGroup.MaximumItems;
      modObject['minimumItems'] = modifierGroup.MaximumItems;
      modObject['currentlySelected'] = new Array;
      modObject['modifiers'] = new Object();

      _.forEach(modifierGroup.Mods, function(modifier, key){
        modObject['modifiers'][modifier.$id] = new Object();
        modObject['modifiers'][modifier.$id]['quantity'] = 0;
      });

      tempObj[modifierGroup.$id] = new Object();
      tempObj[modifierGroup.$id] = modObject;
      tempArr.push(tempObj);
    });
    this.testArr = tempArr;
    console.log(this.testArr);

    this.customizationData = tempObj;
  }
}
