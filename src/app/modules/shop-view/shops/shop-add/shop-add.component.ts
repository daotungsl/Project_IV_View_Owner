import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ERROR_SHOP_INFO } from 'src/app/shared/err-notify';
import { CustomerService } from 'src/app/auth/customer.service';
import { Router } from '@angular/router';
import { ShopsService } from '../shops.service';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';
import { WebLayoutService } from 'src/app/layouts/web-layout/web-layout.service';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.scss']
})
export class ShopAddComponent implements OnInit {
  formAddShop: FormGroup;
  isChecked: boolean;
  errors = ERROR_SHOP_INFO;
  accountInfo: IAccount
  dataCities: any;
  fileToUpload: File = null;

  datasTypeStore: any;

  constructor(
    private fb: FormBuilder,
    private serviceShopAdd: ShopsService,
    private serviceCustomer: CustomerService,
    private router: Router,
    private admin: AdminLayoutComponent,
    private webService: WebLayoutService,


  ) { }

  ngOnInit() {
    this.accountInfo = this.admin.ACCOUNT_SHOP_INFO
    this.getTypeStore();
    this.getAllCity();
    if (this.serviceCustomer.isShop() != -1) {
      this.router.navigateByUrl("/shop/controller/info");
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
          console.log(err)

        }
      })
  }
  getTypeStore() {
    this.serviceShopAdd.getTypeStore().subscribe({
      next: value => {
        console.log(value)
        this.datasTypeStore = value.data;
      },
      error: err => {
        console.log(err)
      }
    })
  }
  getAllCity() {
    this.webService.getCity()
      .subscribe({
        next: value => {
          console.log(value)
          this.dataCities = value.data
        },
        error: err => {
          console.log(err.error)

        }
      })
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.uploadFileToActivity(this.fileToUpload);
}
  uploadFileToActivity(value) {
    this.webService.postFile(value)
    .subscribe({
      next: value => {
        console.log(value)
      },
      error: err => {
        console.log(err)

      }
    })
  }
}
