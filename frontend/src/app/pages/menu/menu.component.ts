import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../../services/wp.service';
import { MenuService } from '../../services/menu-service.service';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@Component({
  selector: 'lo-cal-menu',
  templateUrl: './menu.component.html'
})
export class MenuPageComponent implements OnInit {
  public pageContent : any;
  public acf : any;
  public featuredImage : any;
  public subMenus : any;

  constructor(private wpService: WordpressService, private menuService: MenuService) { }

  ngOnInit() {
    this.wpService.getPage(103).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;
      console.log(this.pageContent);

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });

    this.menuService.getSubMenus().subscribe(submenus => {
      console.log(submenus);
      this.subMenus = submenus;
    })
  }

  ngOnDestroy(){

  }

  setMenuId(id){
    this.menuService.menuItemId = id;
  }

}
