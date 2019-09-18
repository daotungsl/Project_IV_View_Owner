import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { HTTP_HEADER } from 'src/app/shared/constant';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;

  token: any;
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.customer.isLogged()){
      this.router.navigateByUrl("/dashboard");
    }
    this.form = this.fb.group(this.service.loginFormControl);

  }
  ngOnDestroy() {
  }


  doSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.service.trylogin(this.form.value)
      .subscribe({
        next: value => {

            this.token = value;
            this.customer.setToken(this.token);
            this.router.navigateByUrl('/dashboard')

            console.log('request success', localStorage.getItem('TOKEN'));
            
          this.service.getInfo().subscribe({
            next: value => { console.log(value) },
            error: err => console.log(err)
          });
        },
        error: err => {
          console.log(err)
          this.token = err;
            this.customer.setToken(this.token);
            this.router.navigateByUrl('/dashboard')
        }
      })
    console.log("click sign in");
  }
}
