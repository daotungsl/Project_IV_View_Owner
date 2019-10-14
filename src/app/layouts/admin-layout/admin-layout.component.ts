import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/auth/customer.service';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';
import { IInfoSo } from 'src/app/interfaces/shop-owner/Info-so.interface';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
public ACCOUNT_SHOP_INFO : IAccount;
public SHOP_INFO : IInfoSo;
public NAME_USER;
public NAME_SHOP;
  constructor(
    private customer: CustomerService,

  ) { }

  ngOnInit() {
   this.ACCOUNT_SHOP_INFO = this.customer.getAccountStore();
   if(this.ACCOUNT_SHOP_INFO.data.account.fullName){
     this.NAME_USER=this.ACCOUNT_SHOP_INFO.data.account.fullName;
   }else{
    this.NAME_USER=this.ACCOUNT_SHOP_INFO.data.account.phone;

   }
  
  
   
   console.log(this.ACCOUNT_SHOP_INFO)
  }

 
}
