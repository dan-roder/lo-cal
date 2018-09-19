import { Component, OnInit, OnDestroy } from '@angular/core';
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
  public contactForm : FormGroup;
  public submittedOnce : boolean = false;
  public processing : boolean = false;
  public formSuccess : boolean = false;

  constructor(private wpService: WordpressService, private fb: FormBuilder) {
    this.contactForm = fb.group({
      'contact-reason' : [null, Validators.required],
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'comments' : null
    })
  }

  ngOnInit() {
    this.wpService.getPage(132).subscribe(page => {
      this.pageContent = page;
      this.acf = page.acf;

      if(page.featured_media != 0){
        this.wpService.getMedia(page.featured_media).subscribe(media => this.featuredImage = media);
      }
    });
  }

  submitForm(formData){
    this.submittedOnce = true;

    if(formData.valid){
      this.processing = true;
      let data = {
        'contactReason' : formData.get('contact-reason').value,
        'firstName' : formData.get('first-name').value,
        'lastName' : formData.get('last-name').value,
        'email' : formData.get('email').value,
        'comments' : formData.get('comments').value
      }
      this.wpService.submitContactForm(data).subscribe((response) => {
        this.processing = false;
        this.formSuccess = true;
      }, (error) => {
        console.log(error);
      });
    }
  }

  ngOnDestroy(){}

}
