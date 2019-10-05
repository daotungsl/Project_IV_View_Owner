import {Injectable} from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import { IAccount } from '../interfaces/web-client/account-wc.interface';

const TOKEN = 'TOKEN';
const ACCOUNT = 'Account';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
    console.log(localStorage.getItem(TOKEN));
  }

  setAccount(account: IAccount): void {
    localStorage.setItem(ACCOUNT, JSON.stringify(account));
    console.log(localStorage.getItem(ACCOUNT));
    console.log(JSON.parse(localStorage.getItem(ACCOUNT)).data.account.storeId);
  }

  getAccount(): IAccount{
   return JSON.parse(localStorage.getItem(ACCOUNT));
  }

  removeToken(): void{
    console.log("in remover token");
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
