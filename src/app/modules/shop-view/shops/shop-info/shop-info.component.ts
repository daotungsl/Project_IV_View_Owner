import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../shops.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ERROR_SHOP_INFO } from 'src/app/shared/err-notify';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})
export class ShopInfoComponent implements OnInit {
  formShopInfo: FormGroup;
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
    private shopService: ShopsService,
    private admin: AdminLayoutComponent
  ) { }

  ngOnInit() {
    this.accountInfo = this.admin.ACCOUNT_INFO
    this.formShopInfo = this.fb.group(this.shopService.AddInfoFormControl);

    this.formShopInfo
      .get('accountId')
      .setValue(this.accountInfo.data.account.id);

    // this.formShopInfo
    //   .get('phone')
    //   .setValue(accountInfo.phone);

    // this.formShopInfo
    //   .get('email')
    //   .setValue(accountInfo.email);


  }

  doSubmit() {
    if (this.formShopInfo.invalid) {
      return;
    }
    this.formShopInfo.value
    this.shopService.tryAddShopInfo(this.formShopInfo.value).subscribe({
      next: value => {
        console.log(value)
      },
      error: err => {
        console.log(err.error)
      }
    })
  }
}
