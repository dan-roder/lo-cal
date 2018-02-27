import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../../services/wp.service';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@Component({
  selector: 'lo-cal-our-story',
  templateUrl: './our-story.component.html'
})

@AutoUnsubscribe()

export class OurStoryComponent implements OnInit {
  public pageContent : any;
  public acf : any;
  public featuredImage : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getCustomPostTypeById('landing_page', 80).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;

      console.log(page);

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

  ngOnDestroy(){

  }
}
