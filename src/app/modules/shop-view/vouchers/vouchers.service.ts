import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IVoucherSO } from 'src/app/interfaces/shop-owner/voucher-so.interface';
import { HttpClient } from '@angular/common/http';
import { API_DOMAIN, HTTP_HEADER } from 'src/app/shared/constant';
import { map } from 'rxjs/operators';
import { ITypeVoucherSO } from 'src/app/interfaces/shop-owner/voucher-type-so.interface';

@Injectable({
  providedIn: 'root'
})
export class VouchersService {

  AddVoucherFormControl = {
    name: [null, [Validators.required, Validators.maxLength(200)]],
    description: [null, [Validators.required, Validators.maxLength(200)]],
    image: [null, [Validators.required, Validators.maxLength(200)]],
    codeSale: [null, [Validators.required, Validators.maxLength(200)]],
    percent: [null, [Validators.required]],
    maxSlot: [null, [Validators.required]],
    expried: [null, [Validators.required]],
    startTime: [null, [Validators.required]],
    endTime: [null, [Validators.required]],
    dayWeek: [null, [Validators.required]],
    shopId: [null, [Validators.required]],
    typeVoucherId: [null, [Validators.required]],
  }
  constructor(
    private http: HttpClient

  ) { }

  tryAddVoucher(value): Observable<IVoucherSO>{
    return this.http.post<IVoucherSO>(
      `${API_DOMAIN}api/so/store/voucher`,
    value,
    {
      headers: HTTP_HEADER
    }
  ).pipe(
    map(res => {
      console.log(res);
      return res;
    })
  );
  }

  getAllTypeVoucher(){
    return this.http.get<ITypeVoucherSO>(
      `${API_DOMAIN}unauthentic/typeVouchers/typeVoucher`
  ).pipe(
    map(res => {
      console.log(res);
      return res;
    })
  );
  }
}
