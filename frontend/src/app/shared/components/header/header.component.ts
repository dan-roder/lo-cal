import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lo-cal-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() featuredImage : any;
  @Input() pageContent : any;

  constructor() { }

  ngOnInit() {
  }

}
