import { Directive, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[loCalMonthMask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)'
  }
})
export class MonthMaskDirective {
  // @Output() rawChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public model: NgControl) { }

  onInputChange(e, backspace){
    let x = e.replace(/[^0-9]/g, '').match(/([0-9]{0,2})([0-9]{0,4})/);
    let rawValue = !x[2] ? x[1] : x[1] + '/' + x[2];
    console.log(rawValue);
    // new value
    this.model.valueAccessor.writeValue( rawValue );
    // this.rawChange.emit( rawValue );
  }
}