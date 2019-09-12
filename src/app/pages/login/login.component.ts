import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { HTTP_HEADER } from 'src/app/shared/constant';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  // account : IAccount;
  account = {
    name: String,
    email: String,
    password: String,
    remember: Boolean
  }
  token: any
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group(this.service.loginFormControl);
  }
  ngOnDestroy() {
  }

  onSubmit(formLogin) {
    this.account.email = formLogin.value.email;
    this.account.name = formLogin.value.name;
    this.account.password = formLogin.value.password;
    this.account.remember = formLogin.value.remember;
    // this.account.createdAt = this.date.getMilliseconds();
    // this.account.updateAt = this.date.getTime();
    // this.account.status = 1;
    // this.account.id = 1;
    console.log(this.account);
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
        }
      })
    console.log("click sign in");


  }
}
