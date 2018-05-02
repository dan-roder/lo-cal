import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lo-cal-hamburger',
  templateUrl: './hamburger.component.html'
})
export class HamburgerComponent implements OnInit {
  public toggleClass : string = 'closed';
  @Output() mobileMenuState : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggleClass = (this.toggleClass == 'mobileMenuClosed') ? 'mobileMenuOpen' : 'mobileMenuClosed';
    this.mobileMenuState.emit(this.toggleClass);
  }

}
