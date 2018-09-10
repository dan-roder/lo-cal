import { Component, OnInit, EventEmitter } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';


@Component({
  selector: 'lo-cal-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  public mainMenuLinks: any;
  public currentUrl : any;
  public openBag: EventEmitter<any> = new EventEmitter<any>();
  public bagState: string = 'invisible';
  public _numberOfItemsInBag : number = 0;
  public _bagItems : Array<LineItem> = [];
  public mobileMenuState: string = 'mobileMenuClosed';

  constructor(
    private wpService: WordpressService,
    private bagService: BagService,
    private localStorage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.router.url);
    this.currentUrl = this.router.url;
    this.wpService.getMenu(2).subscribe(m => this.mainMenuLinks = m.items);
  }

  toggleBagState(){
    if(this.numberOfItemsInBag > 0){
      this.bagState = (this.bagState === 'invisible') ? 'visible' : 'invisible';
    }
  }

  public toggleMobileMenuState(target){
    // Keep mobile menu open if menu is scrolled/clicked, otherwise close
    if(target !== undefined){
      if(target.className.indexOf('mobile-menu-content') === -1){
        this.mobileMenuState = (this.mobileMenuState === 'mobileMenuClosed') ? 'mobileMenuOpen' : 'mobileMenuClosed';
      }
      return;
    }
    this.mobileMenuState = (this.mobileMenuState === 'mobileMenuClosed') ? 'mobileMenuOpen' : 'mobileMenuClosed';
  }

  get bagItems() : Array<LineItem>{
    return this.bagService.itemsInBag;
  }

  get numberOfItemsInBag() : number{
    return this.bagService.itemCountInBag;
  }

}
