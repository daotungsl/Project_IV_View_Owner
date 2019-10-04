import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router } from '@angular/router';
import { ERROR_REGISTER } from 'src/app/shared/err-notify';
import { LoginService } from '../login/login.service';
import { MustMatch } from './mustMatch.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  isChecked: boolean;
  token: any;
  errors = ERROR_REGISTER;
  date = new Date();
  account: any;


  constructor(
    private fb: FormBuilder,
    private serviceRegister: RegisterService,
    private serviceLogin: LoginService,
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.customer.isLogged()) {
      this.router.navigateByUrl("/");
    }
    this.formRegister = this.fb.group(
      this.serviceRegister.registerFormControl,
      { validator: MustMatch('password', 'repassword') }
    );
  }

  checkBoxValue(e) {
    this.isChecked = e.target.checked;

  }
  doSubmit() {

    if (this.formRegister.invalid) {
      return;
    }
    console.log(this.formRegister.value);
    this.serviceRegister.tryRegister(this.formRegister.value)
      .subscribe({
        next: value => {
          console.log(value)
          // this.account = {
          //   username: value.data.account.email,
          //   password: value.data.account.email,
          //   clientType: 'WEB'
          // }

          // this.serviceLogin.trylogin(this.account)
          //   .subscribe({
          //     next: value => {
          //       console.log(value);

          //       this.token = value.data.credential.accessToken;
          //       // this.customer.setToken(this.token);
          //       // this.router.navigateByUrl('/')
          //       console.log(this.token);

          //        console.log('request success', localStorage.getItem('TOKEN'));

          //     },
          //     error: err => {
          //       console.log(err)

          //     }
          //   })


        },
        error: err => {
          console.log(err.error)

        }
      })
  }
}
