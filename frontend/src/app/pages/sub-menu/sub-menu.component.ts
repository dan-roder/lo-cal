import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { WordpressService } from '@local/services/wp.service';
import { IPost } from '@local/models/post';
import { BagService } from '@local/services/bag.service';
import * as _ from 'lodash';

@Component({
  selector: 'lo-cal-sub-menu',
  templateUrl: './sub-menu.component.html',
  encapsulation: ViewEncapsulation.None
})

@AutoUnsubscribe()

export class SubMenuComponent implements OnInit {
  private subMenuId: string = null;
  public pageContent : IPost;
  public acf : any;
  public subMenuItems: any;
  public subMenuLinks : any;
  public images: Array<any>;
  public navSubscription : any;
  public headerImage : any;
  public menuMap : any;
  private menuSlug : string = '';
  public wpSubMenuItems : any;
  public fullPosts : any;
  public featuredImage : string = '';
  public featuredImageAlt : string = '';

  constructor(private menuService: MenuService, private activatedRoute: ActivatedRoute, private wpService: WordpressService, private bagService: BagService, private router: Router) {
    this.navSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getPostAndMenuItems();
      }
    });
  }

  ngOnInit() {
    // Check for subMenuId
    this.subMenuId = this.menuService.menuItemId;

    // Get featured menu item menu
    if(this.wpService.subMenu === null){
      this.wpService.getMenu(5).subscribe(m => {
        this.wpService.subMenu = m.items;
        this.subMenuLinks = m.items;
      });
    }
    else{
      this.subMenuLinks = this.wpService.subMenu;
    }
  }

  public getPostAndMenuItems(){
    this.menuSlug = (this.activatedRoute.snapshot.paramMap.get('category'));
    // Get custom post type
    this.wpService.getPostBySlug(this.menuSlug, 'menu_categories').subscribe(post => {
      this.pageContent = post[0];
      this.acf = post[0].acf;
      this.subMenuId = this.acf.submenuid;

      // TODO: Find alternative placeholder image for submenu pages
      this.featuredImage = (post[0].featured_media !== 0) ? post[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : '//via.placeholder.com/1440x500';
      this.featuredImageAlt = (post[0].featured_media !== 0) ? post[0]._embedded['wp:featuredmedia'][0].alt_text : post[0].title.rendered;

      // If the menu service is still holding onto the same submenu items, don't call for them again
      if(this.menuService.subMenuId !== this.subMenuId){
        this.menuService.getSubMenuItems(this.subMenuId).subscribe(subMenuItems => {
          this.menuService.subMenuItems = subMenuItems;
          this.menuService.subMenuId = this.subMenuId;
          this.subMenuItems = subMenuItems;
        });
      }
      else{
        this.subMenuItems = this.menuService.subMenuItems;
      }
    });

    this.wpService.getSubMenu(this.menuSlug).subscribe((items) => {
      this.wpSubMenuItems = _(items).map('acf').flatten().value();
    });
  }

  // TODO: create your own items shouldn't be able to be quick added
  public addToBag(item){
    let cartImage = _.find(this.wpSubMenuItems, {'menuid': String(item.MenuItemId)});
    item.cartImage = (cartImage.cart_image !== undefined) ? cartImage.cart_image.url : '';
    // Push full object to bag service
    this.bagService.quickAddLineItem(item);
  }

  ngOnDestroy(){
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navSubscription) {
      this.navSubscription.unsubscribe();
    }
  }

}
