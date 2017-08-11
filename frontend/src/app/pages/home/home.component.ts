import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wp.service';

@Component({
  selector: 'lo-cal-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public pageContent : any;
  public acf : any;
  public featuredImage : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getPage(4).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;
      console.log(this.acf);

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

}
