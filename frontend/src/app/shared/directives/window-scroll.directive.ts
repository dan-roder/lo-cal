import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { WindowRef } from '../../utils/windowref';

@Directive({
  selector: '[loCalWindowScroll]'
})
export class WindowScrollDirective {

  constructor(private winRef: WindowRef, private renderer: Renderer2, private hostElement: ElementRef) { }
  ngOnInit() {
    this.winRef.nativeWindow.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    this.winRef.nativeWindow.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
    if(this.winRef.nativeWindow.scrollY > 0){
      this.renderer.addClass(this.hostElement.nativeElement, 'scrolled');
    }
    else{
      this.renderer.removeClass(this.hostElement.nativeElement, 'scrolled');
    }
  };
}