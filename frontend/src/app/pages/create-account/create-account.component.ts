import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer, CustomerAddress, InRegistration } from '@local/models/Customer';
import { PasswordMatch } from '@local/utils/passwordmatch';


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
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirm-password' : ['', Validators.required],
      'security-question' : [null, Validators.required],
      'security-answer' : [null, Validators.required],
      'full-address' : fb.group({
        'address' : [null, Validators.required],
        'address2' : null,
        'city' : [null, Validators.required],
        'state' : ['', Validators.required],
        'zip' : [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      })
    }, {
      validator : PasswordMatch.MatchPassword
    })
  }

  ngOnInit() {
  }

  showErrors(){
    console.log(this.accountForm.controls['password']);
  }

  public submitForm(form){
    this.submittedOnce = true;
    console.log(form);

    // Set up customer object for submission to API
    if(form.valid) {
      let registration : InRegistration = {
        Customer : {
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
        },
        Password : form.controls['password'].value,
        SecurityQuestion : form.controls['security-question'].value,
        SecurityAnswer : form.controls['security-answer'].value
      }

      let customerDataForApi = {
        "customer_info" : registration
      }

      // Call service to insert
      console.log(customerDataForApi);
    }
  }
}
