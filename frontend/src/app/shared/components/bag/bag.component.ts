import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { stagger } from '@angular/animations/src/animation_metadata';
import { BagService } from '@local/services/bag.service';
import { MenuItem } from '@local/models/MenuItem';
import { LineItem } from '@local/models/LineItem';
import * as _ from 'lodash';
import { OrderService } from '@local/services/order.service';
import { Router } from '@angular/router';

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
  @Input() bagCount : number = 0;
  @Output() bagState: EventEmitter<string> = new EventEmitter<string>();
  private _bagItems : Array<LineItem>;
  public _bagTotalPrice : number;
  public itemsInBagCounter : number = 0;


  constructor(private bagService: BagService, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.bagCount = this.bagService.itemCountInBag;
  }

  toggleBagState(){
    this.state = (this.state === 'invisible') ? 'visible' : 'invisible';
    this.bagState.emit(this.state);
  }

  public removeFromBagAtIndex( index ){
    this.bagService.removeFromBagAtIndex(index);
  }

  @Input()
  set bagItems(items: Array<LineItem>){
    this._bagItems = items;
  }

  get bagItems(): Array<LineItem>{
    return this._bagItems;
  }

  get bagTotalPrice(): number{
    return this.bagService.totalPrice;
  }

  public createOrder(){
    this.orderService.putOrder(this.bagItems).subscribe(response => {
      if(response){
        // Route to checkout
        this.router.navigate(['/checkout']);
      }
    });
  }

}
