import {Injectable} from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import { IAccount } from '../interfaces/web-client/account-wc.interface';
import { IInfoSo } from '../interfaces/shop-owner/Info-so.interface';

const TOKEN = 'TOKEN';
const ACCOUNT = 'Account';
const STORE = 'Store';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
    console.log(localStorage.getItem(TOKEN));
  }

  setAccount(account: IAccount): void {
    if(localStorage.getItem(ACCOUNT)){
      this.removeAccount();
    }
    localStorage.setItem(ACCOUNT, JSON.stringify(account));
    console.log(localStorage.getItem(ACCOUNT));
  }
  getAccount(): IAccount{
    return JSON.parse(localStorage.getItem(ACCOUNT));
   }
 
   removeAccount(): void{
     localStorage.removeItem(ACCOUNT);
     console.log(localStorage.getItem(ACCOUNT));
 
   }

  setStore(store: IInfoSo): void {
    if(localStorage.getItem(STORE)){
      this.removeStore();
    }
    localStorage.setItem(STORE, JSON.stringify(store));
    console.log(localStorage.getItem(STORE));
  }
  getStore(): IInfoSo{
    return JSON.parse(localStorage.getItem(STORE));
   }
  removeStore(): void{
    localStorage.removeItem(STORE);
    console.log(localStorage.getItem(STORE));

  }

  

  removeToken(): void{
    localStorage.removeItem(TOKEN);
    console.log(localStorage.getItem(TOKEN));

  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  isShop(){
    if(localStorage.getItem(ACCOUNT)){
      return JSON.parse(localStorage.getItem(ACCOUNT)).data.account.storeId;
    }
    return  null;

  }
}
