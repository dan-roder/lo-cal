import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lo-cal-title-body-images',
  templateUrl: './title-body-images.component.html'
})
export class TitleBodyImagesComponent implements OnInit {
  @Input() acf : any;

  constructor() { }

  ngOnInit() {
  }

}
