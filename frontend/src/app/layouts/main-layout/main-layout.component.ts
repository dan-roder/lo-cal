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
  public numberOfItemsInBag : number = 0;
  public _bagItems : Array<LineItem> = [];

  constructor(
    private wpService: WordpressService,
    private bagService: BagService,
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {
    this.wpService.getMenu(2).subscribe(m => this.mainMenuLinks = m.items);
  }

  toggleBagState(state){
    this.bagState = (this.bagState === 'invisible') ? 'visible' : 'invisible';
  }

  get bagItems() : Array<LineItem>{
    console.log('calling service getter for bag items');
    return this.bagService.itemsInBag;
  }

}
