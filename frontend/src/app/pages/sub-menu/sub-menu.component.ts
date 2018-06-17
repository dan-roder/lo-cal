import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu-service.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private menuService: MenuService, private router: ActivatedRoute, private wpService: WordpressService, private bagService: BagService) { }

  ngOnInit() {
    // Check for subMenuId
    this.subMenuId = this.menuService.menuItemId;
    let wp = this.wpService;

    let slug = (this.router.snapshot.paramMap.get('category'));

    // Get custom post type
    this.wpService.getPostBySlug(slug, 'menu_categories').subscribe(_post => {
      this.pageContent = _post[0];
      this.acf = _post[0].acf;
      this.subMenuId = this.acf.submenuid;

      this.menuService.getSubMenuItems(this.subMenuId).subscribe(_subMenuItems => {
        this.subMenuItems = _subMenuItems;
      });
    });

    // Get featured menu item menu
    this.wpService.getMenu(5).subscribe(m => this.subMenuLinks = m.items);
  }

  addToBag(item){
    // Push full object to bag service
    this.bagService.quickAddLineItem(item);
  }

  ngOnDestroy(){

  }

}
