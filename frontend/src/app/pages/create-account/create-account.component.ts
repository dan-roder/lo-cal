import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RailsCustomer } from '@local/models/Customer';
import { PasswordMatch } from '@local/utils/passwordmatch';
import { CustomerService } from '@local/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideUpAnimation } from '@local/utils/animations';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'lo-cal-create-account',
  templateUrl: './create-account.component.html',
  animations: [SlideUpAnimation]
})
export class CreateAccountComponent implements OnInit {
  public accountForm : FormGroup;
  public submittedOnce : boolean = false;
  private redirectUrl : string = '';
  public errorMessage : string = '';
  public existingAccount : boolean = false;
  public accountSuccess : boolean = false;
  public checkoutAccountSuccess : boolean = false;
  public processing : boolean = false;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private localStorage: LocalStorage) {
    this.accountForm = fb.group({
      'first-name' : [null, [Validators.required, Validators.maxLength(28)]],
      'last-name' : [null, [Validators.required, Validators.maxLength(28)]],
      'email' : ['', [Validators.required, Validators.email, Validators.maxLength(45)]],
      'phone' : ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirm-password' : ['', Validators.required],
      'security-question' : ['', Validators.required],
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
    this.redirectUrl = (this.route.snapshot.queryParams['returnUrl'] !== undefined) ? this.route.snapshot.queryParams['returnUrl'] : undefined;
  }

  public submitForm(form){
    this.submittedOnce = true;

    // Set up customer object for submission to API
    if(form.valid) {
      this.processing = true;

      let registration : RailsCustomer = {
        customer_info : {
          Customer : {
            EMail : form.controls.email.value,
            FirstName : form.controls['first-name'].value,
            LastName : form.controls['last-name'].value,
            VoicePhone : form.controls['phone'].value,
            Addresses : [{
              AddressType : 1,
              AddressId : 1,
              AddressLine1: form.controls['full-address']['controls']['address'].value,
              AddressLine2: form.controls['full-address']['controls']['address2'].value,
              City: form.controls['full-address']['controls']['city'].value,
              State: form.controls['full-address']['controls']['state'].value,
              Postal: form.controls['full-address']['controls']['zip'].value,
            }]
          },
          Password : form.controls['password'].value,
          SecurityQuestion : form.controls['security-question'].value,
          SecurityAnswer : form.controls['security-answer'].value
        }
      }

      this.customerService.createCustomer(registration).subscribe(data => {
        if('Errors' in data){
          // TODO: Errors comes as an array, loop instead of cherry picking first one
          switch(data['Errors'][0]['ErrorCode']){
            case 163:
              this.existingAccount = true;
            break;
            default:
              this.errorMessage = `We're sorry. There was an error creating your account. If this problem persists please contact us for assistance.`;
            break;
          }
        }
        else{
          // handle successful return of account created
          // redirect to appropriate location
          if(this.redirectUrl !== undefined){
            // Need to set logged in status
            this.handleRedirection(data);
          }
          else{
            console.log(data);
            // Account successfully created, show generic success message
            this.accountSuccess = true;
          }
        }
      });
    }
  }

  private handleRedirection(newCustomerInfo){
    // Show success message
    this.checkoutAccountSuccess = true;
    // Get user's data using new customer ID
    this.customerService.getCustomerInfo(newCustomerInfo.CustomerId).subscribe((customer) => {
      // Set full user details to localStorage
      this.localStorage.setItem('user', customer).subscribe(() => {
        this.startRedirect();
      });
    }, error => {
      console.log(error);
    });
  }

  private startRedirect(){
    // Start timeout to redirect to checkout review
    setTimeout(() => {
      this.router.navigate([this.redirectUrl]);
    }, 4000);
  }
}
