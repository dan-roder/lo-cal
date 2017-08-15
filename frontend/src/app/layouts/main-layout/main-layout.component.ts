import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordpressService } from '../../services/wp.service';

@Component({
  selector: 'lo-cal-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  public mainMenuLinks;
  public currentUrl : any;

  constructor( private wpService: WordpressService, private _router: Router ) {
    _router.events.subscribe( (url : any) => this.currentUrl = url);
  }

  ngOnInit() {
    this.wpService.getMenu(2).subscribe(m => this.mainMenuLinks = m.items);
  }

}
