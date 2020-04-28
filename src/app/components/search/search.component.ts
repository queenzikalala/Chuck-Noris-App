import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output('value') value: EventEmitter<any> = new EventEmitter<any>();
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      keyWord: new FormControl('', [Validators.minLength(3), Validators.required])
    });
  }

  onclick() {
    console.log('value', this.searchForm.controls['keyWord'].value)

    if (this.searchForm.controls.keyWord != null) {
      this.value.emit(this.searchForm.controls['keyWord'].value);
      this.searchForm.controls['keyWord'].reset();
      return;
    }
    // this.searchForm.controls['keyWord'].value
  }
  get controls() {
    return this.searchForm.controls;
  }

  get keyWord() {
    return this.controls['keyWord'];
  }
}
