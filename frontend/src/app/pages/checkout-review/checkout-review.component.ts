import { Component, OnInit } from '@angular/core';
import { BagService } from '@local/services/bag.service';
import { LineItem } from '@local/models/LineItem';
import { Config } from '@local/utils/constants';

@Component({
  selector: 'lo-cal-checkout-review',
  templateUrl: './checkout-review.component.html'
})
export class CheckoutReviewComponent implements OnInit {
  public _bagItems : Array<LineItem> = [];
  public isOpen: number = -1;
  public envUrl : string = '';

  constructor(private bagService: BagService, private constants: Config) { }

  ngOnInit() {
    // this.envUrl = this.constants.wordpressApiUrl
  }

  get bagItems(){
    return this.bagService.itemsInBag;
  }

  public removeFromBagAtIndex( index ){
    this.bagService.removeFromBagAtIndex(index);
  }

  public editItemAtIndex(newVal: number): boolean {
    if (this.isOpen === newVal) {
      this.isOpen = -1;
    } else {
      this.isOpen = newVal;
    }

    return false;
  }

  public incrementQuantity(menuItem){
    menuItem.Quantity++;
  }

  public decrementQuantity(menuItem){
    if(menuItem.Quantity > 1){
      menuItem.Quantity--;
    }
  }


}
