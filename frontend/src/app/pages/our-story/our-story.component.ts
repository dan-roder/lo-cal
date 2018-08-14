import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../../services/wp.service';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { IPost } from '@local/models/post';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lo-cal-our-story',
  templateUrl: './our-story.component.html'
})

@AutoUnsubscribe()

export class OurStoryComponent implements OnInit {
  public pageContent : IPost;
  public acf : any;
  public featuredImage : any;
  public bgImage : string = '';

  constructor(private wpService: WordpressService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.wpService.getCustomPostTypeById('landing_page', 80).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;
      this.bgImage = (page.acf.background_image !== undefined) ? page.acf.background_image.url : '';

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

  public getBgImage(){
    let style = `background-image: url(${this.bgImage})`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  ngOnDestroy(){

  }
}
