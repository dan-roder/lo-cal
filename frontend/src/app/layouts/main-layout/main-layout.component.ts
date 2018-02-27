import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WordpressService } from '../../services/wp.service';
import { WindowScrollDirective } from '../../shared/directives/window-scroll.directive';

@Component({
  selector: 'lo-cal-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  public mainMenuLinks: any;
  public currentUrl : any;
  public openBag: EventEmitter<any> = new EventEmitter<any>();
  public bagState: string = 'invisible';


  constructor( private wpService: WordpressService, private _router: Router ) {
    _router.events.subscribe( (url : any) => this.currentUrl = url);
  }

  ngOnInit() {
    this.wpService.getMenu(2).subscribe(m => this.mainMenuLinks = m.items);
  }

  toggleBagState(state){
    this.bagState = (this.bagState === 'invisible') ? 'visible' : 'invisible';
  }

}
