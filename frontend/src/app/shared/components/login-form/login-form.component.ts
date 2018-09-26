import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '@local/services/customer.service';
import { RailsLogin } from '@local/models/Customer';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lo-cal-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  public loginForm : FormGroup;
  public submittedOnce : boolean = false;
  public errorData : any = {};
  private returnUrl : string = '';
  public processing : boolean = false;
  @Input() simpleForm : boolean = false;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private localStorage: LocalStorage, private router: Router, private route: ActivatedRoute) {
    this.loginForm = fb.group({
      'email' : ['', [Validators.required, Validators.email]],
      'password' : ['', Validators.required]
    })
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login(loginFormData){
    this.submittedOnce = true;

    if(loginFormData.valid){
      this.processing = true;
      let loginDetails : RailsLogin = {
        credentials : {
          Email : loginFormData.controls['email'].value,
          Password : loginFormData.controls['password'].value
        }
      }

      // Log In customer
      this.customerService.logIn(loginDetails).subscribe(customerId => {
        // If successful, get all customer details
        this.customerService.getCustomerInfo(customerId).subscribe(customerInfo => {
          // Set full user details to localStorage
          this.localStorage.setItem('user', customerInfo).subscribe(() => {
            this.router.navigate([this.returnUrl]);
          });
        })
      }, error => {
        this.errorData = error;
        this.processing = false;
      })
    }
  }
}
