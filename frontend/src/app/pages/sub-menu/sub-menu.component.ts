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
  private subMenuId: number = null;
  public pageContent : IPost;
  public acf : any;
  public subMenuItems: any;
  public subMenuLinks : any;
  public images: Array<any>;
  public navSubscription : any;

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
    this.wpService.getMenu(5).subscribe(m => this.subMenuLinks = m.items);
  }

  public getPostAndMenuItems(){
    let slug = (this.activatedRoute.snapshot.paramMap.get('category'));
    // Get custom post type
    this.wpService.getPostBySlug(slug, 'menu_categories').subscribe(_post => {
      this.pageContent = _post[0];
      this.acf = _post[0].acf;
      this.subMenuId = this.acf.submenuid;

      this.menuService.getSubMenuItems(this.subMenuId).subscribe(_subMenuItems => {
        this.subMenuItems = _subMenuItems;
      });
    });
  }

  addToBag(item){
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
