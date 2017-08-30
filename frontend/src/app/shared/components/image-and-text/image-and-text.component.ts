import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lo-cal-image-and-text',
  templateUrl: './image-and-text.component.html'
})
export class ImageAndTextComponent implements OnInit {
  @Input() acf : any;
  @Input() color : string = 'white';

  constructor() { }

  ngOnInit() {
  }

}
