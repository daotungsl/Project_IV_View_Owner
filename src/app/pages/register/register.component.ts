import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
//  account : IAccount;
 account = {
  name: String,
  email: String,
  password: String,
 }
  
 
date = new Date();
// name= '';
// email= '';
// password = '';

  constructor( ) { }

  ngOnInit() {
    
  }

  submitRegister(){
    console.log("get date form");
  }
  onSubmit(formRegister){
    this.account.email = formRegister.value.email;
    this.account.name = formRegister.value.name;
    this.account.password = formRegister.value.password;
    // this.account.createdAt = this.date.getMilliseconds();
    // this.account.updateAt = this.date.getTime();
    // this.account.status = 1;
    // this.account.id = 1;
    console.log(this.account);
  }
}
