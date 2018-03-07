import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { WordpressService } from '@local/services/wp.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lo-cal-catering',
  templateUrl: './catering.component.html',
  encapsulation: ViewEncapsulation.None
})

@AutoUnsubscribe()

export class CateringComponent implements OnInit {
  public cateringForm : FormGroup;
  public pageContent : any;
  public acf : any;
  public featuredImage : any;
  public submittedOnce : boolean = false;

  constructor(private wpService: WordpressService, public fb: FormBuilder) {
    this.cateringForm = fb.group({
      'full-name' : [null, Validators.required],
      'phone' : [null, Validators.required],
      'email' : [null, Validators.required, Validators.email],
      'service-date' : [null, Validators.required],
      'notes' : null
    })
  }

  submitForm(formData){
    this.submittedOnce = true;
  }

  ngOnInit() {
    this.wpService.getCustomPostTypeById('landing_page', 126).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

  ngOnDestroy(){}
}
