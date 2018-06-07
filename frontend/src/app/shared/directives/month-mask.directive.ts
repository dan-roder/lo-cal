import { NgModule, Component, Directive, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';

@Directive({
  selector: '[loCalMonthMask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)'
  }
})
export class MonthMaskDirective {
  @Output() rawChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public model: NgControl) { }

  onInputChange(e, backspace){
    let x = e.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})/);
    let rawValue = !x[2] ? x[1] : x[1] + '/' + x[2];
    // new value
    this.model.valueAccessor.writeValue( rawValue );
    this.rawChange.emit( rawValue );
  }
}