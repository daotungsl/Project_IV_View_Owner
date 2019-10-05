import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ERROR_SHOP_INFO } from 'src/app/shared/err-notify';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router } from '@angular/router';
import { ShopsService } from '../shops.service';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.scss']
})
export class ShopAddComponent implements OnInit {
  formAddShop: FormGroup;
  isChecked: boolean;
  errors = ERROR_SHOP_INFO;
  accountInfo:IAccount

  datasTypeStore = [{
    id: 0,
    name: "Nhà hàng 1",
    description: '',
    created: "03:34:32 27 09 2019",
    updated: "03:34:32 27 09 2019",
    status: 1
  },
  {
    id: 1,
    name: "Nhà hàng 2",
    description: '',
    created: "03:34:32 27 09 2019",
    updated: "03:34:32 27 09 2019",
    status: 1
  },
  {
    id: 2,
    name: "Nhà hàng 3",
    description: '',
    created: "03:34:32 27 09 2019",
    updated: "03:34:32 27 09 2019",
    status: 1
  },
  {
    id: 3,
    name: "Nhà hàng 4",
    description: '',
    created: "03:34:32 27 09 2019",
    updated: "03:34:32 27 09 2019",
    status: 1
  }
  ]
  constructor(
    private fb: FormBuilder,
    private serviceShopAdd: ShopsService,
    private serviceCustomer: CustomerService,
    private router: Router,
    private admin: AdminLayoutComponent

  ) { }

  ngOnInit() {
    this.accountInfo = this.admin.ACCOUNT_INFO

    if (this.serviceCustomer.isShop() != -1) {
      this.router.navigateByUrl("/shop/info");
    }
    this.formAddShop = this.fb.group(
      this.serviceShopAdd.AddInfoFormControl
     
    );
    this.formAddShop
    .get('accountId')
    .setValue(this.accountInfo.data.account.id);

  this.formAddShop
    .get('phone')
    .setValue(this.accountInfo.data.account.phone);

  this.formAddShop
    .get('email')
    .setValue(this.accountInfo.data.account.email);


  }

  checkBoxValue(e) {
    this.isChecked = e.target.checked;

  }
  doSubmit() {

    if (this.formAddShop.invalid) {
      return;
    }
    console.log(this.formAddShop.value);
    this.serviceShopAdd.tryAddShopInfo(this.formAddShop.value)
      .subscribe({
        next: value => {
          console.log(value)
         


        },
        error: err => {
          console.log(err.error)

        }
      })
  }
}
