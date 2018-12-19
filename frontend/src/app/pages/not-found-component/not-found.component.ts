import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';

@Component({
  selector: 'lo-cal-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
  public pageContent : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getPost(4387).subscribe(page => {
      this.pageContent = page;
    })
  }

}
