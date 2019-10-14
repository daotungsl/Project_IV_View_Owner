import { Component, OnInit, ViewChild } from '@angular/core';
import { VoucherComponent } from '../voucher/voucher.component';
import { VouchersService } from '../vouchers.service';
import { CustomerService } from 'src/app/auth/customer.service';
import { ShopsService } from '../../shops/shops.service';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.scss']
})
export class VoucherListComponent implements OnInit {
  datasVoucher: any;

  constructor(
    private voucherService: VouchersService,
    private shopService: ShopsService,
    private customer: CustomerService,

  ) { }

  ngOnInit() {
    this.getInfoStore(this.customer.getAccountStore().data.account.storeId);
  }

  getInfoStore(value) {
    this.shopService.getInfoStore(value)
      .subscribe({
        next: value => {
          console.log('in get info store' + value)
          this.getVoucher(value.data.nameUnAccent)
        },
        error: err => {
          console.log(err)
        }
      });

  }

  getVoucher(value) {
    this.voucherService.getAllVoucherByStore(value)
      .subscribe({
        next: value => {
          console.log('in get voucher' + value)
          this.datasVoucher = value.data;
          console.log(this.datasVoucher)
        },
        error: err => {
          console.log(err)
        }
      });

  }
}
