import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  urlCategory = '';

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.urlCategory = params.get('url');
      // if (this.urlCategory == null) {
      //   this.getAllData(API_URL.API_NEWS_GROUP.getAll);
      // } else {
      //   this.getAllData(API_URL.API_NEWS_GROUP.getByCategory + '/' + this.urlCategory);
      // }
    });
    console.log(this.urlCategory)
  }

}
