import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../../services/wp.service';
import { MenuService } from '../../services/menu-service.service';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { SubMenu } from '@local/models/SubMenu';

@Component({
  selector: 'lo-cal-menu',
  templateUrl: './menu.component.html'
})

@AutoUnsubscribe()

export class MenuPageComponent implements OnInit {
  public pageContent : any;
  public acf : any;
  public featuredImage : any;
  public subMenus : any;
  public menu : any;
  public subMenuLinks : any;

  constructor(private wpService: WordpressService, private menuService: MenuService) { }

  ngOnInit() {
    this.wpService.getPage(103).subscribe(_page => {
      this.pageContent = _page;
      this.acf = _page.acf;
      this.featuredImage = _page._embedded['wp:featuredmedia'][0].media_details.sizes.full;
    });

    this.wpService.getCustomPostType('menu_categories', 30).subscribe(_subMenus => {
      this.subMenus = _subMenus;
    });

    // Get featured menu item menu
    this.wpService.getMenu(5).subscribe(m => this.subMenuLinks = m.items);
  }

  ngOnDestroy(){}

  setMenuId(id){
    this.menuService.menuItemId = id;
  }

}
