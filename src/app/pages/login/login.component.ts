import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5';
import { ShopsService } from 'src/app/modules/shop-view/shops/shops.service';
import { IInfoSo } from 'src/app/interfaces/shop-owner/Info-so.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  token: any;
  passEnd: any;
  redirectUrl: any;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private customer: CustomerService,
    private shopService: ShopsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.customer.isLogged()) {
      this.router.navigateByUrl("/shop/dashboard");
    }
    this.form = this.fb.group(this.service.loginFormControl);
    this.route.queryParamMap.subscribe(params => {
      this.redirectUrl = params.get("redirectUrl")
    })

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
          this.customer.setAccount(value);
          this.token = value.data.credential.accessToken;
          this.customer.setToken(this.token);
          this.getInfoShop( value.data.account.storeId );

          this.router.navigateByUrl(this.redirectUrl)

          // console.log('request success', localStorage.getItem('TOKEN'));

        },
        error: err => {
          console.log(err)
          this.form.get('password').setValue(null);
          console.log(this.form.value)

        }
      })
  }

  getInfoShop(value) {
    this.shopService.getInfoStore(value)
      .subscribe({
        next: value => {
          this.customer.setStore(value)
        },
        error: err => {
          console.log(err)
        }
      })

  }
}