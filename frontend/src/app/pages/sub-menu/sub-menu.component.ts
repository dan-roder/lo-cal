import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu-service.service';
import { ActivatedRoute } from '@angular/router';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@Component({
  selector: 'lo-cal-sub-menu',
  templateUrl: './sub-menu.component.html',
  encapsulation: ViewEncapsulation.None
})

@AutoUnsubscribe()

export class SubMenuComponent implements OnInit {
  public subMenuId: number = null;
  public subMenuType: string = '';
  public subMenuItems: any;
  public pageContent: any;

  constructor(private menuService: MenuService, private router: ActivatedRoute) { }

  ngOnInit() {
    // Check for subMenuId
    this.subMenuId = this.menuService.menuItemId;
    console.log(this.subMenuId);

    this.router.params.subscribe(params => {
      this.subMenuType = params.category;

      this.menuService.getSubMenuItems(this.subMenuType).subscribe(subMenu => {
        this.subMenuItems = subMenu;
        console.log(subMenu);
      });

    });
  }

  addToBag(item){
    console.log(item);
    return false;
  }

  ngOnDestroy(){

  }

}
