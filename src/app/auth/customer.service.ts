import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
    console.log(localStorage.getItem(TOKEN));
  }

  removeToken(): void{
    console.log("in remover token");
    localStorage.removeItem(TOKEN);
    console.log(localStorage.getItem(TOKEN));

  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
