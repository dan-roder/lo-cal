import { Directive, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[loCalCreditCardMask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)'
  }
})
export class CreditCardMaskDirective {
  @Output() rawChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public model: NgControl) { }

  onInputChange(e){
    let rawValue = e.replace(/\D/g, '').match(/\d{0,16}/);
    // new value
    this.model.valueAccessor.writeValue( rawValue );
    this.rawChange.emit( rawValue );
  }

}
