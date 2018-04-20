import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer, SimpleChange, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Directive({
  selector: '[inputSwitcher]',
  exportAs: 'InputSwitcherDirective'
})
export class InputSwitcherDirective {
  @Input() edit: boolean;
  @Input() type: string = 'text';
  @Input() subsetKey: string;
  @Input() id: string = '';
  private nativeElement : Node;
  private previousValue : string;
  private currentValue : string;
  private elementName : string;
  private model;
  private component;

  constructor(public el: ElementRef, public renderer: Renderer, private vc: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    this.previousValue = el.nativeElement.textContent;
  }

  handleChange(value, firstChange){
    // Ensure this isn't the first time the variable was set
    if(!firstChange){
      if(value === 'true'){
        this.editMode();
      }
      else if(value === 'saved'){
        this.newValues();
      }
      else{
        this.el.nativeElement.textContent = this.previousValue;
      }
    }
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}){

    // if the datepicker is on, will remove the datepicker when edit is closed ( or else the datepicker just hangs around after the edit is closed )
    if (this.component) {
      this.component.destroy();
    }
    this.handleChange(changes['edit'].currentValue, changes['edit'].isFirstChange());

  }


  editMode(){
    // Store current value
    this.currentValue = _.trim(this.el.nativeElement.textContent);
    // Set previousValue to current value
    this.previousValue = this.currentValue;
    // Wipe out text node
    this.el.nativeElement.textContent = '';

    //Create and render element

    switch(this.type){
      case 'text':
        this.generateElement('input', {'value': this.currentValue, 'name': this.el.nativeElement.getAttribute('name'), 'type': 'text'});
      break;

      case 'ta':
        this.generateTextarea({'value': this.currentValue, 'name': this.el.nativeElement.getAttribute('name')});
      break;

      case 'select':
        this.generateSelectBox({'name': this.el.nativeElement.getAttribute('name'), 'ele': this.el})
      break;

      default:
        this.generateElement('input', {'value': this.currentValue, 'name': this.el.nativeElement.getAttribute('name'), 'type': 'text'});
      break;

    }
  }

  generateElement(type, attrs){
    let inputElement = this.renderer.createElement(this.el.nativeElement, type);
    this.renderer.setElementAttribute(inputElement, 'type', 'text');
    this.renderer.setElementAttribute(inputElement, 'value', _.trim(attrs.value));
    this.renderer.setElementAttribute(inputElement, 'name', attrs.name);
    this.elementName = attrs.name;
    this.renderer.listen(inputElement, 'change', (event) => {
      this.currentValue = event.target.value;
    });
  }

  generateTextarea(attrs){
    let ele = this.renderer.createElement(this.el.nativeElement, 'textarea');
    this.renderer.createText(ele, _.trim(attrs.value));
    this.renderer.setElementAttribute(ele, 'name', attrs.name);
    this.renderer.setElementAttribute(ele, 'rows', '6');
    this.elementName = attrs.name;
    this.renderer.listen(ele, 'change', (event) => {
      this.currentValue = event.target.value;
    });
  }

  generateSelectBox(attrs){
    var opts = attrs.ele.nativeElement.getAttribute('options');
    var arr = opts.split('/');
    var rend = this.renderer;
    var curValue = this.currentValue;

    let select = this.renderer.createElement(this.el.nativeElement, 'select');
    this.renderer.setElementAttribute(select, 'name', attrs.name);
    this.elementName = attrs.name;
    _.forEach(arr, function(value, key){
      let option = rend.createElement(select, 'option');
      rend.setElementAttribute(option, 'value', value);
      rend.createText(option, value);
      if(value == curValue){
        rend.setElementAttribute(option, 'selected', 'selected');
      }
    });
    this.renderer.listen(select, 'change', (event) => {
      this.currentValue = event.target.value;
    })
  }

  newValues(){
    // Taking value from input/datepicker/select and placing in on the page as text
    this.el.nativeElement.textContent = this.currentValue;
  }

}
