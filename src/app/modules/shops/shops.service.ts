import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddressSO } from 'src/app/interfaces/shop-owner/address-so.interface';
import { API_DOMAIN, HTTP_HEADER } from 'src/app/shared/constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  AddressFormControl = {
    address: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, [Validators.required, Validators.maxLength(100)]],
    cityId: [null, [Validators.required]],
    storeId: [null, [Validators.required]]
  }
  constructor(
    private http: HttpClient
  ) { }

  tryAddAddress(value): Observable<IAddressSO>{
    return this.http.post<{data: IAddressSO}>(
      `${API_DOMAIN}so/store/address`,
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
}
