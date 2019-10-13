import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from 'src/app/interfaces/web-client/city-wc.interface';
import { API_DOMAIN } from 'src/app/shared/constant';
import { map } from 'rxjs/operators';
import { ITypeVoucherSO } from 'src/app/interfaces/shop-owner/voucher-type-so.interface';
import { IAllVoucher } from 'src/app/interfaces/web-client/voucher-all.interface';

@Injectable({
  providedIn: 'root'
})
export class WebLayoutService {

  constructor(
    private http: HttpClient
  ) { }

  getCity(): Observable<ICity>{
    return this.http.get<ICity>(
      `${API_DOMAIN}unauthentic/cities/city`

  ).pipe(
    map(res => {
      console.log(res);
      return res;
    })
  );
  }
  getAllCategory(): Observable<ITypeVoucherSO>{
    return this.http.get<ITypeVoucherSO>(
      `${API_DOMAIN}unauthentic/type-vouchers`

  ).pipe(
    map(res => {
      console.log(res);
      return res;
    })
  );
  }
  getAllVoucher(): Observable<IAllVoucher>{
    return this.http.get<IAllVoucher>(
      `${API_DOMAIN}unauthentic/stores/store/vouchers`

  ).pipe(
    map(res => {
      console.log(res);
      return res;
    })
  );
  }
}

