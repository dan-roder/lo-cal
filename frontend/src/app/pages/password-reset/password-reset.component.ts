import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { CustomerService } from '@local/services/customer.service';
import { PasswordMatch } from '@local/utils/passwordmatch';
import { InPasswordReset } from '@local/models/Customer';

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
  public passwordResetError: string = '';
  public passwordSuccess: boolean = false;
  public forcePasswordSuccess: boolean = false;
  public forceProcessing: boolean = false;
  public processing: boolean = false;
  public securityQuestionError: string = '';
  public forcePasswordError: string = '';

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.passwordResetForm = fb.group({
      'email' : [null, [Validators.required, Validators.email]],
      'security-answer' : [null, Validators.required],
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirm-password' : ['', Validators.required]
    }, {
      validator : PasswordMatch.MatchPassword
    });

    this.forcePasswordResetForm = fb.group({
      'email' : [null, [Validators.required, Validators.email]]
    });
  }

  public retrieveSecurityQuestion(email){
    // Start spinner
    this.processing = true;
    this.securityQuestionError = '';

    // Call API to get security question for user's email
    this.customerService.getSecurityQuestion(email).subscribe(question => {
      this.processing = false;
      this.foundSecurityQuestion = true;
      this.securityQuestion = question;
    }, error => {
      this.processing = false;
      let errorMessage = JSON.parse(error.error).message;
      this.securityQuestionError = errorMessage;
    });

    return false;
  }

  public resetPasswordWithAnswer(formData){

    if(formData.valid){
      this.processing = true;
      let newPassData: InPasswordReset = {
        Email : formData.get('email').value,
        SecurityAnswer : formData.get('security-answer').value,
        NewPassword : formData.get('password').value
      }

      this.customerService.passwordResetWithAnswer(newPassData).subscribe(result => {
        if(result){
          this.processing = false;
          this.passwordResetError = '';
          this.passwordSuccess = true;
        }
      }, error => {
        this.processing = false;
        this.passwordResetError = error.error.message;
      })
    }
  }

  public forcePasswordReset(formData){
    this.forceProcessing = true;
    this.forcePasswordError = '';

    if(formData.valid){
      let psReset = {
        Email : formData.get('email').value
      }
      this.customerService.forcePasswordReset(psReset).subscribe(result => {
        this.forcePasswordSuccess = true;
        this.forceProcessing = false;
      }, error => {
        this.forcePasswordError = error.error.message;
        this.forceProcessing = false;
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
