import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wp.service';

@Component({
  selector: 'lo-cal-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public pageContent : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getPage(4).subscribe(page => {this.pageContent = page; console.log(page)});

  }

}
