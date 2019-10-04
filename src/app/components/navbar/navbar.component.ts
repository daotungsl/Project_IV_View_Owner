import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { CustomerService } from 'src/app/auth/customer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public listTitlesVoucher: any[];
  public location: Location;
  constructor(
    location: Location,
    private element: ElementRef,
    private customer: CustomerService,
    private router: Router,
    private title: Title
    ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.router.events.subscribe((e: RouterEvent) => {
      if (e instanceof NavigationEnd) {
        this.title.setTitle('DealHunter' + ' - ' + this.getTitle());
      }
    })

  }

  tryLogout() {
    this.customer.removeToken();
    this.router.navigateByUrl('/')
    console.log('click logout')
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    console.log(titlee);
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee.indexOf("voucher") == 1){
      return "Voucher"
    }
      for (var item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
          return this.listTitles[item].title;
        }
      }
    return '/';
  }

  goBack() {
    this.location.back();
  }
}
