import {Injectable} from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import { IAccount } from '../interfaces/web-client/account-wc.interface';
import { IInfoSo } from '../interfaces/shop-owner/Info-so.interface';

const ACCOUNT_TOKEN = 'ACCOUNT_TOKEN';
const STORE_TOKEN = 'STORE_TOKEN';
const ACCOUNT = 'ACCOUNT';
const STORE = 'STORE';
const ACCOUNT_STORE = 'ACCOUNT_STORE';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setTokenAccount(token: string): void {
    localStorage.setItem(ACCOUNT_TOKEN, token);
    console.log(localStorage.getItem(ACCOUNT_TOKEN));
  }
  setTokenStore(token: string): void {
    localStorage.setItem(STORE_TOKEN, token);
    console.log(localStorage.getItem(STORE_TOKEN));
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
   setAccountStore(account: IAccount): void {
    if(localStorage.getItem(ACCOUNT_STORE)){
      this.removeAccount();
    }
    localStorage.setItem(ACCOUNT_STORE, JSON.stringify(account));
    console.log(localStorage.getItem(ACCOUNT_STORE));
  }
  getAccountStore(): IAccount{
    return JSON.parse(localStorage.getItem(ACCOUNT_STORE));
   }
 
   removeAccountStore(): void{
     localStorage.removeItem(ACCOUNT_STORE);
     console.log(localStorage.getItem(ACCOUNT_STORE));
 
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
    localStorage.removeItem(ACCOUNT_TOKEN);
    localStorage.removeItem(STORE_TOKEN);

  }

  isLogged() {
    return localStorage.getItem(ACCOUNT_TOKEN) != null;
  }
  isLoggedShop() {
    return localStorage.getItem(STORE_TOKEN) != null;
  }

  isShop(){
    if(localStorage.getItem(ACCOUNT_STORE)){
      return JSON.parse(localStorage.getItem(ACCOUNT_STORE)).data.account.storeId;
    }
    return  null;

  }
}
