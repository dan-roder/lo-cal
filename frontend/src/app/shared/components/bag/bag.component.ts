import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'lo-cal-bag',
  templateUrl: './bag.component.html',
  animations: [
    trigger('hideShowBag', [
      state('invisible', style({
          right: '-740px',
      })),
      state('visible', style({
          right: '0px',
      })),
      transition('invisible => visible', animate('300ms ease-in-out')),
      transition('visible => invisible', animate('300ms ease-in-out')),
    ]),
  ]
})
export class BagComponent implements OnInit {
  @Input() state: string = 'invisible';

  constructor() { }

  ngOnInit() {
  }

  toggleBagState(){
    // Need to emit event that close button within this component was clicked
    //  so bag link/main layout component knows it was closed
    this.state = (this.state === 'invisible') ? 'visible' : 'invisible';
  }

}
