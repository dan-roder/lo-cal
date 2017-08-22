import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lo-cal-intro-section',
  templateUrl: './intro-section.component.html'
})
export class IntroSectionComponent implements OnInit {
  @Input() acf : any;
  @Input() color : string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
