import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
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


  constructor(private bagService: BagService, private router: Router) { }

  ngOnInit() {
    this.bagCount = this.bagService.itemCountInBag;
  }

  toggleBagState(target){
    if(target !== undefined){
      if(target.className !== undefined && (target.className.indexOf('checkout-overlay') !== -1 || target.className.indexOf('close') !== -1)){
        this.bagService.toggleBagState();
      }

      return;
    }
    this.bagService.toggleBagState();
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

  public goToCheckout(){
    this.bagService.toggleBagState();
    this.router.navigateByUrl('/checkout/review');
  }

}
