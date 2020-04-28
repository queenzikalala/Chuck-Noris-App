import { Component, OnInit, Input } from '@angular/core';
// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgModalModule } from "ng-modal";
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() category;
  url: any


  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  openModal(selectedCategory) {
    console.log("test123", selectedCategory);
    this.router.navigate(['/joke', { category: selectedCategory }]);
    // const modalRef = this.modalService.open(myModalComponent);
    // modalRef.componentInstance.user = 0;
    // modalRef.result.then(result => {
    //   if (result) {
    //     console.log(result);
    //   }
    // });
  }
}
