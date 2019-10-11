import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddressSO } from 'src/app/interfaces/shop-owner/address-so.interface';
import { API_DOMAIN, HTTP_HEADER } from 'src/app/shared/constant';
import { map } from 'rxjs/operators';
import { IInfoSo } from 'src/app/interfaces/shop-owner/Info-so.interface';
import { DISABLED } from '@angular/forms/src/model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  AddAressFormControl = {
    address: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, [Validators.required, Validators.maxLength(100)]],
    cityId: [null, [Validators.required]],
    storeId: [null, [Validators.required]]
  }
  
  AddInfoFormControl = {
    name: [null, [Validators.required, Validators.maxLength(100)]],
    email: [{value: null, DISABLED:true}, [Validators.required, Validators.email]],
    phone: [{value: null, DISABLED:true}, [Validators.required, Validators.pattern(/([+]84[9|1]|09|01[2|6|8|9])+([0-9]{8})\b/g)]],
    accountId: [null, [Validators.required]],
    typeStoreId: [null, [Validators.required]],
    image: [null, []]
  }
  constructor(
    private http: HttpClient
  ) { }

  tryAddAddress(value): Observable<IAddressSO>{
    return this.http.post<{data: IAddressSO}>(
      `${API_DOMAIN}api/so/store/address`,
    value,
    {
      headers: HTTP_HEADER
    }
  ).pipe(
    map(res => {
      console.log(res);
      return res.data;
    })
  );
  }
  tryAddShopInfo(value): Observable<IInfoSo>{
    return this.http.post<{data: IInfoSo}>(
      `${API_DOMAIN}api/so/store`,
    value,
    {
      headers: HTTP_HEADER
    }
  ).pipe(
    map(res => {
      console.log(res);
      return res.data;
    })
  );
  }
  getInfoStore(value): Observable<IInfoSo>{
    return this.http.get<IInfoSo>(
      `${API_DOMAIN}unauthentic/stores/store/${value}`

  ).pipe(
    map(res => {
      console.log(res);
      return res;
    })
  );
  }
}
