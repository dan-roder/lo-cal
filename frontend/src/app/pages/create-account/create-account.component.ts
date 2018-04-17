import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer, CustomerAddress } from '@local/models/Customer';

@Component({
  selector: 'lo-cal-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {
  public accountForm : FormGroup;
  public submittedOnce : boolean = false;

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
        'address' : [null, Validators.required],
        'address2' : null,
        'city' : [null, Validators.required],
        'state' : ['', Validators.required],
        'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    })
  }

  ngOnInit() {
  }

  public submitForm(form){
    this.submittedOnce = true;
    console.log(form.controls);

    // Set up customer object for submission to API
    if(form.valid) {
      let customer : Customer = {
        EMail : form.controls.email.value,
        FirstName : form.controls['first-name'].value,
        LastName : form.controls['last-name'].value,
        Addresses : [{
          AddressLine1 : form.controls['full-address'].controls.address.value,
          AddressLine2 : form.controls['full-address'].controls.address2.value,
          City : form.controls['full-address'].controls.city.value,
          State : form.controls['full-address'].controls.state.value,
          Postal : form.controls['full-address'].controls.zip.value
        }]
      }

      console.log(customer);
    }
  }
}
