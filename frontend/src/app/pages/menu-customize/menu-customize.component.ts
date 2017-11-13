import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lo-cal-menu-customize',
  templateUrl: './menu-customize.component.html'
})
export class MenuCustomizeComponent implements OnInit {
  private lettuceChoices: number = 0;
  private maxLettuceChoices: number = 2;
  public quantity: number = 0;

  constructor() { }

  ngOnInit() {
  }


  toggleChoice(el){
    console.log(el);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 0){
      this.quantity--;
    }
  }
}
