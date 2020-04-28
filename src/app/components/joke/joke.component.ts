import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../service/appService';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke: string;
  category: any;

  constructor(
    private route: ActivatedRoute,
    private httpClient: AppService
  ) { }

  ngOnInit() {
    let cat = this.route.snapshot.paramMap.get('category');

    this.httpClient.getJoke(cat).subscribe(result => {
      this.joke = result.value
      this.category = result
    })
  }

}
