import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { stagger } from '@angular/animations/src/animation_metadata';
import { BagService } from '@local/services/bag.service';
import { MenuItem } from '@local/models/MenuItem';

@Component({
  selector: 'lo-cal-bag',
  templateUrl: './bag.component.html',
  animations: [
    trigger('hideShowBag', [
      state('invisible', style({
          right: '-500px',
      })),
      state('visible', style({
          right: '0px',
      })),
      transition('invisible <=> visible', animate('300ms ease-in-out'))
    ])
  ]
})
export class BagComponent implements OnInit {
  @Input() state: string = 'invisible';
  @Output() bagState: EventEmitter<string> = new EventEmitter<string>();
  public stepState: number = 1;
  public menuItemsInBag : Array<MenuItem> = [];
  public itemsInBagCounter : number = 0;

  constructor(private bagService: BagService) { }

  ngOnInit() {
    // this.menuItemsInBag = this.bagService.menuItemsInBag;
  }

  toggleBagState(){
    this.state = (this.state === 'invisible') ? 'visible' : 'invisible';
    this.bagState.emit(this.state);
  }

  nextStep(){
    this.stepState++;
  }

  previousStep(){
    this.stepState = (this.stepState > 0) ? (this.stepState - 1) : this.stepState;
  }

  public removeFromBagAtIndex( index ){
    this.bagService.removeFromBagAtIndex(index);
  }

}
