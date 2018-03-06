import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { WordpressService } from '@local/services/wp.service';

@Component({
  selector: 'lo-cal-catering',
  templateUrl: './catering.component.html',
  encapsulation: ViewEncapsulation.None
})

@AutoUnsubscribe()

export class CateringComponent implements OnInit {

  public pageContent : any;
  public acf : any;
  public featuredImage : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getCustomPostTypeById('landing_page', 126).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

  ngOnDestroy(){

  }
}
