import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lo-cal-hamburger',
  templateUrl: './hamburger.component.html'
})
export class HamburgerComponent implements OnInit {
  public toggleClass : string = 'closed';

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggleClass = (this.toggleClass == 'closed') ? 'open' : 'closed';
  }

}
