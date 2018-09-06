import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { CustomerService } from '@local/services/customer.service';
import { PasswordMatch } from '@local/utils/passwordmatch';

@AutoUnsubscribe()

@Component({
  selector: 'lo-cal-password-reset',
  templateUrl: './password-reset.component.html'
})
export class PasswordResetComponent implements OnInit {
  public passwordResetForm: FormGroup;
  public forcePasswordResetForm: FormGroup;
  public foundSecurityQuestion: boolean = false;
  public errorData: any = {};
  public securityQuestion: string = '';
  public switchForms: boolean = false;
  public submittedOnce: boolean = false;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.passwordResetForm = fb.group({
      'email' : [null, [Validators.required, Validators.email]],
      'security-answer' : [null, Validators.required],
      'password' : [null, [Validators.required, Validators.minLength(8)]],
      'confirm-password' : [null, Validators.required]
    }, {
      validator : PasswordMatch.MatchPassword
    });

    this.forcePasswordResetForm = fb.group({
      'email' : [null, [Validators.required, Validators.email]]
    });
  }

  public retrieveSecurityQuestion(email){
    this.customerService.getSecurityQuestion(email).subscribe(question => {
      console.log(question);
      this.foundSecurityQuestion = true;
      this.securityQuestion = question;
    }, error => {
      console.log(error);
    });

    return false;
  }

  public resetPasswordWithAnswer(formData){

    if(formData.valid){

    }
  }

  public forcePasswordReset(formData){
    if(formData.valid){
      let psReset = {
        Email : formData.get('email').value
      }
      this.customerService.forcePasswordReset(psReset).subscribe(result => {
        console.log(result);
      }, error => {
        console.log(error);
      })
    }
  }

  public swapForms(): boolean{
    this.switchForms = !this.switchForms;
    return false;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

}
