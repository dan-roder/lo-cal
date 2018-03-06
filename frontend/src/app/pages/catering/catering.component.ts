import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@Component({
  selector: 'lo-cal-catering',
  templateUrl: './catering.component.html',
  encapsulation: ViewEncapsulation.None
})

@AutoUnsubscribe()

export class CateringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){}
}
