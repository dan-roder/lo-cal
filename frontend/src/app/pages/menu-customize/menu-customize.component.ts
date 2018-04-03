import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { MenuService } from '@local/services/menu-service.service';
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

  constructor(
    private wpService: WordpressService,
    private menuService: MenuService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    let slug = (this.router.snapshot.paramMap.get('item'));

    this.wpService.getPostBySlug(slug, 'menu_item').subscribe(_item => {
      let menuItemId = _item[0].acf.menuid;

      this.getMenuItemDetails(menuItemId);
    });
  }

  public toggleChoice(el){
    console.log(el);
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

      console.log(this.salesItemDetails);
      this.itemPrice = this.salesItemDetails['Price'];

      // Calculate initial cost based on initial quantity of 1
      this.recalculateCost();
    });
  }
}
