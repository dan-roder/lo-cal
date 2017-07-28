import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wp.service';

@Component({
  selector: 'lo-cal-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent implements OnInit {
  public mainMenuLinks;

  constructor( private wpService: WordpressService ) { }

  ngOnInit() {
    this.wpService.getMenu(2).subscribe(m => this.mainMenuLinks = m.items);
  }

}
