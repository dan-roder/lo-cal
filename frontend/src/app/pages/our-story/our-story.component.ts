import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wp.service';

@Component({
  selector: 'lo-cal-our-story',
  templateUrl: './our-story.component.html'
})
export class OurStoryComponent implements OnInit {
  public pageContent : any;
  public acf : any;
  public featuredImage : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getPage(47).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;
      console.log(this.pageContent);

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

}
