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

  AddAressFormControl = {
    address: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, [Validators.required, Validators.maxLength(100)]],
    cityId: [null, [Validators.required]],
    storeId: [null, [Validators.required]]
  }
  
  AddInfoFormControl = {
    name: [null, [Validators.required, Validators.maxLength(100)]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required, Validators.pattern(/([+]84[9|1]|09|01[2|6|8|9])+([0-9]{8})\b/g)]],
    accountId: [null, [Validators.required]],
    typeStoreId: [null, [Validators.required]],
    image: [null, [Validators.required]]
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
