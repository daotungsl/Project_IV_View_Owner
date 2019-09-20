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


  constructor(
    private fb: FormBuilder,
    private serviceRegister: RegisterService,
    private serviceLogin: LoginService,
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.customer.isLogged()) {
      this.router.navigateByUrl("/dashboard");
    }
    this.formRegister = this.fb.group(
      this.serviceRegister.registerFormControl,
      { validator: MustMatch('password', 'confirmPassword') }
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

          this.token = value;
          this.customer.setToken(this.token);
          this.router.navigateByUrl('/dashboard')

          console.log('request success', localStorage.getItem('TOKEN'));

        },
        error: err => {
          console.log(err)

        }
      })
  }
}
