import { Component, OnInit } from '@angular/core';
import { AppService } from "./../../service/appService";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Array<string>;

  constructor(private httpService: AppService) { }

  ngOnInit() {
    this.httpService.getJokesCategories().subscribe(data => {
      console.log('test123', data)
      this.categories = data;
    })
  }

}
