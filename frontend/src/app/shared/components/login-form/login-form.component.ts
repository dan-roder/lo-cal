import { Component, OnInit } from '@angular/core';
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
      let loginDetails : RailsLogin = {
        credentials : {
          Email : loginFormData.controls['email'].value,
          Password : loginFormData.controls['password'].value
        }
      }

      this.customerService.logIn(loginDetails).subscribe(customerId => {
        this.localStorage.setItem('user', customerId).subscribe(() => {
          console.log('success', this.returnUrl);
          this.router.navigate([this.returnUrl]);
        });
      }, error => {
        this.errorData = error;
      })
    }
  }
}
