import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lo-cal-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {
  public accountForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = fb.group({
      'first-name' : [null, Validators.required],
      'last-name' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
      'confirm-password' : [null, Validators.required],
      'security-question' : [null, Validators.required],
      'security-answer' : [null, Validators.required],
      'full-address' : fb.group({
        'address' : null,
        'address2' : null,
        'city' : null,
        'state' : ['', Validators.required],
        'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    })
  }

  ngOnInit() {
  }

  public submitForm(formData){
    console.log(formData);
    console.log(formData.controls);
  }
}
