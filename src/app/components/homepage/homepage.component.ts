import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input('value') value;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  search(event) {
    console.log('emit', event)

    this.router.navigate(['/homepage/jokes', { searchWord: event }]);
  }
}
