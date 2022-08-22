import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: []
})
export class GeneralDetailsComponent implements OnInit {

  @Input() productsCount = 0;
  @Input() orderCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
