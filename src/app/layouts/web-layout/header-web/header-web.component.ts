import { Component, OnInit } from '@angular/core';
import { WebLayoutService } from '../web-layout.service';
import { ICity } from 'src/app/interfaces/web-client/city-wc.interface';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.scss']
})
export class HeaderWebComponent implements OnInit {

public CITY : ICity;
dataCities: any;
  constructor(
    private webService: WebLayoutService,
  ) { }

  ngOnInit() {
  this.getAllCity();
  }

getAllCity(){
  this.webService.getCity()
  .subscribe({
    next: value => {
      console.log(value)
      this.CITY = value;
      this.dataCities = value.data
    },
    error: err => {
      console.log(err.error)

    }
  })
}
}
