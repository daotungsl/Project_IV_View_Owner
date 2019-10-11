import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../vouchers.service';
import { ITypeVoucherSO } from 'src/app/interfaces/shop-owner/voucher-type-so.interface';

@Component({
  selector: 'app-voucher-add',
  templateUrl: './voucher-add.component.html',
  styleUrls: ['./voucher-add.component.scss']
})
export class VoucherAddComponent implements OnInit {

  filename: any;
  dataTypeVoucher: ITypeVoucherSO
  constructor(
    private serviceVoucher: VouchersService
  ) { }

  ngOnInit() {
    this.serviceVoucher.getAllTypeVoucher().subscribe({
      next: value => {
        this.dataTypeVoucher = value;
        console.log(this.dataTypeVoucher);
      },
      error: err => {
        console.log(err);
      }
    }) ;
    console.log("in add voucher");
  }

}
