import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WordpressService } from '../../services/wp.service';
import { WindowScrollDirective } from '../../shared/directives/window-scroll.directive';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { LocalStorage } from '@ngx-pwa/local-storage';


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
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {
    this.wpService.getMenu(2).subscribe(m => this.mainMenuLinks = m.items);
  }

  toggleBagState(){
    if(this.numberOfItemsInBag > 0){
      this.bagState = (this.bagState === 'invisible') ? 'visible' : 'invisible';
    }
  }

  public toggleMobileMenuState(){
    this.mobileMenuState = (this.mobileMenuState === 'mobileMenuClosed') ? 'mobileMenuOpen' : 'mobileMenuClosed';
  }

  get bagItems() : Array<LineItem>{
    return this.bagService.itemsInBag;
  }

  get numberOfItemsInBag() : number{
    return this.bagService.itemCountInBag;
  }

}
