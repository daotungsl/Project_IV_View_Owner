import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/auth/customer.service';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
public ACCOUNT_INFO : IAccount;
public NAME_USER;
public NAME_SHOP;
  constructor(
    private customer: CustomerService,

  ) { }

  ngOnInit() {
   this.ACCOUNT_INFO = this.customer.getAccount();
   if(this.ACCOUNT_INFO.data.account.fullName){
     this.NAME_USER=this.ACCOUNT_INFO.data.account.fullName;
   }else{
    this.NAME_USER=this.ACCOUNT_INFO.data.account.phone;

   }
   this.NAME_SHOP = this.ACCOUNT_INFO.data.account.email;
   console.log(this.ACCOUNT_INFO)
  }


}
