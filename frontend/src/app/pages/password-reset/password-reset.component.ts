import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lo-cal-password-reset',
  templateUrl: './password-reset.component.html'
})
export class PasswordResetComponent implements OnInit {
  public passwordResetForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }



  ngOnInit() {
  }

}
