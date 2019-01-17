import { Component, OnInit, EventEmitter } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { Router } from '@angular/router';


@Component({
  selector: 'lo-cal-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  public mainMenuLinks: any;
  public currentUrl : any;
  public openBag: EventEmitter<any> = new EventEmitter<any>();
  public _bagState: string = 'invisible';
  public _numberOfItemsInBag : number = 0;
  public _bagItems : Array<LineItem> = [];
  public mobileMenuState: string = 'mobileMenuClosed';

  constructor(
    private wpService: WordpressService,
    private bagService: BagService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.wpService.getMenu(2).subscribe(m => {this.mainMenuLinks = m.items; console.log(m)});
  }

  toggleBagState(){
    if(this.numberOfItemsInBag > 0 || this.bagState === 'visible'){
      this.bagService.toggleBagState();
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

  get bagState(): string{
    return this.bagService.bagState;
  }

  get bagItems() : Array<LineItem>{
    return this.bagService.itemsInBag;
  }

  get numberOfItemsInBag() : number{
    return this.bagService.itemCountInBag;
  }

}
