import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordpressService } from '../../services/wp.service';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@Component({
  selector: 'lo-cal-our-food',
  templateUrl: './our-food.component.html'
})

@AutoUnsubscribe()

export class OurFoodComponent implements OnInit {
  public pageContent : any;
  public acf : any;
  public featuredImage : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getCustomPostTypeById('landing_page', 98).subscribe(page => {
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
