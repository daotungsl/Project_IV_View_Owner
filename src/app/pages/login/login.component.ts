import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { HTTP_HEADER } from 'src/app/shared/constant';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  token: any;
  passEnd: any;
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private customer: CustomerService,
    private router: Router,
  ) { }

  ngOnInit() {

    if (this.customer.isLogged()) {
      this.router.navigateByUrl("/shop/dashboard");
    }
    this.form = this.fb.group(this.service.loginFormControl);

  }
  ngOnDestroy() {
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      alert('you just clicked enter');
      // rest of your code
    }
  }

  doSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.password);
    const md5 = new Md5();

    const passHash = md5.appendStr(this.form.value.password).end();
    this.passEnd = passHash;

    this.form.get('password').setValue(this.passEnd.toUpperCase());

    console.log(this.form.value);
    this.service.trylogin(this.form.value)
      .subscribe({
        next: value => {
          console.log(value)
          this.token = value;
          this.customer.setToken(this.token);

          this.router.navigateByUrl('/')

          console.log('request success', localStorage.getItem('TOKEN'));

        },
        error: err => {
          console.log(err)
          this.form.get('password').setValue(null);
          console.log(this.form.value)

          // this.token = err;
          //   this.customer.setToken(this.token);
          //   this.router.navigateByUrl('/shop/dashboard')

          //   console.log('request success', localStorage.getItem('TOKEN'));
        }
      })
  }
}

