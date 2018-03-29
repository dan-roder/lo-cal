import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { MenuService } from '@local/services/menu-service.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@local/models/post';

@Component({
  selector: 'lo-cal-menu-customize',
  templateUrl: './menu-customize.component.html'
})
export class MenuCustomizeComponent implements OnInit {
  public quantity: number = 1;
  public itemContent : IPost;
  public menuItemDetails : any;
  public salesItemDetails : any;
  public itemPrice : number;
  public totalPrice : number;

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

  toggleChoice(el){
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

  private recalculateCost(){
    this.totalPrice = this.itemPrice * this.quantity;
  }

  getMenuItemDetails( _menuItemId ){
    this.menuService.getMenuItemDetails(_menuItemId).subscribe(_menuItemDetails => {
      // Set necessary variables for template rendering
      this.menuItemDetails = _menuItemDetails;
      this.salesItemDetails = _menuItemDetails['salesItems'][0];
      this.itemPrice = _menuItemDetails['salesItems'][0]['Price'];
      // Calculate initial cost based on initial quantity of 1
      this.recalculateCost();
    });
  }
}
