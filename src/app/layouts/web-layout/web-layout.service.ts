import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from 'src/app/interfaces/web-client/city-wc.interface';
import { API_DOMAIN, HTTP_HEADER_STORE } from 'src/app/shared/constant';
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

  getCity(): Observable<ICity> {
    return this.http.get<ICity>(
      `${API_DOMAIN}unauthentic/cities/city`

    ).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
  getAllCategory(): Observable<ITypeVoucherSO> {
    return this.http.get<ITypeVoucherSO>(
      `${API_DOMAIN}unauthentic/type-vouchers`

    ).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
  getAllVoucher(): Observable<IAllVoucher> {
    return this.http.get<IAllVoucher>(
      `${API_DOMAIN}unauthentic/stores/store/vouchers`

    ).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
  postFile(fileToUpload: File): Observable<any> {
    console.log(fileToUpload);
    console.log(HTTP_HEADER_STORE)
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData)
    // formData.set('file',fileToUpload,fileToUpload.name);
    console.log(formData.get('file'));
    return this.http.post(
      `${API_DOMAIN}api/file/upload`,
      formData,
      {
        headers: HTTP_HEADER_STORE
      }
    ).pipe(
      map(res => {
        console.log(res)
        return res;
      })
    );
  }
}

