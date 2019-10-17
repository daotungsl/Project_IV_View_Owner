import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VouchersService } from '../../shop-view/vouchers/vouchers.service';
import { IVoucherSO } from 'src/app/interfaces/shop-owner/voucher-so.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ERROR_ODER_VOUCHER } from 'src/app/shared/err-notify';
import { WebLayoutService } from 'src/app/layouts/web-layout/web-layout.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  formOder: FormGroup;
  errors = ERROR_ODER_VOUCHER;

  public location: Location;
  dataVoucher: IVoucherSO;
  dataTimeVoucher: any;
  dataAddress : any;
  isShow = false;
  constructor(
    private fb: FormBuilder,
    location: Location,
    private route: ActivatedRoute,
    private voucherSevice: VouchersService,
    private webSevice: WebLayoutService



  ) {
    this.location = location;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getVoucherByUA(params.get('url'));
    });
    window.scrollTo(0, 0);
    this.formOder = this.fb.group(
      this.voucherSevice.OderFornControl
    );
  }
  goBack() {
    this.location.back();
  }
  getVoucherByUA(value) {
    this.voucherSevice.getVoucherByUA(value)
      .subscribe({
        next: value => {
          console.log(value)
          this.dataVoucher = value
          this.dataTimeVoucher = value.data.promotionTimeDto;
          this.dataAddress = value.data.storeAddress
          console.log(new Date(value.data.promotionTimeDto.startTime))
          // this.getAddressStore(value.data.storeId)
        },
        error: err => {
          console.log(err.error)

        }
      })
  }
  getAddressStore(value) {
    this.webSevice.getInfoStore(value)
      .subscribe({
        next: value => {
          console.log(value)
          this.dataAddress = value.data.storeAddresses
        },
        error: err => {
          console.log(err.error)

        }
      })
  }
  doSubmit() {

    if (this.formOder.invalid) {
      return;
    }
    console.log(this.formOder.value);
    this.voucherSevice.tryOder(this.formOder.value)
      .subscribe({
        next: value => {
          console.log(value)
        
        },
        error: err => {
          console.log(err.error)

        }
      })
  }
  changeShow() {
    this.isShow = !this.isShow;
  }
}
