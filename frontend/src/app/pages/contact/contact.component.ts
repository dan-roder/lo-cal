import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe/dist/ngx-auto-unsubscribe';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WordpressService } from '@local/services/wp.service';

@AutoUnsubscribe()
@Component({
  selector: 'lo-cal-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public pageContent : any;
  public cateringForm : FormGroup;
  public featuredImage : any;
  public acf : any;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.wpService.getPage(132).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

}
