import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/auth/customer.service';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss']
})
export class WebLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private customer: CustomerService,


  ) {
    
   }

  ngOnInit() {
    if (this.customer.isLoggedShop()) {
      this.router.navigateByUrl("/shop/dashboard");
    }
  }

}
