import { Component, OnInit } from '@angular/core';
import { WebLayoutService } from 'src/app/layouts/web-layout/web-layout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dataCategories: any
  constructor(
    private webService : WebLayoutService
  ) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.webService.getAllCategory()
    .subscribe({
      next: value => {
        console.log(value)
        this.dataCategories = value.data
      },
      error: err => {
        console.log(err.error)
  
      }
    })
  }
}
