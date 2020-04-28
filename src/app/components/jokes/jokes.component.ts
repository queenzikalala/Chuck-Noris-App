import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/appService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  jokes = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: AppService
  ) { }

  ngOnInit() {
    let searchWord = this.route.snapshot.paramMap.get('searchWord');

    this.httpClient.search(searchWord).subscribe(data => {
      this.jokes = data.result
      console.log('results: ', data.result)
    })

  }

}
