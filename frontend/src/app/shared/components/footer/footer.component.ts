import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { MailchimpService } from '@local/services/mailchimp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'lo-cal-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public footerMenu;
  public footerLinks: any;
  public newsletterForm: FormGroup;
  public signUpResponse: string = '';
  public signUpSuccess: boolean = false;

  constructor(private wpService : WordpressService, private fb: FormBuilder, private mailchimpService: MailchimpService) {
    this.newsletterForm = fb.group({
      'email' : ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {
    this.wpService.getMenu(3).subscribe(m => this.footerMenu = m.items);
    this.wpService.getMenu(4).subscribe(m => {
      this.footerLinks = m.items
    });
  }

  public signUp(formData){
    if(formData.valid){
      let email = formData.get('email').value;

      this.mailchimpService.signUpForNewsletter(email).subscribe(result => {
        let resp = JSON.parse(result);

        switch(resp.title){
          case 'Member Exists':
            this.signUpResponse = `Looks like you're already signed up!`;
            this.signUpSuccess = true;
          break;
          default:
            if(resp.id != undefined || resp.id != null){
              this.signUpSuccess = true;
              this.signUpResponse = `Thank you for signing up!`;
            }
            else{
              this.signUpResponse = `There was an unexpected error. Try again.`;
            }
          break;
        }
      }, error => {
        this.wpService.logError('Newsletter Error: ' + JSON.stringify(error)).subscribe(() => {});
      });
    }
    return false;
  }
}
