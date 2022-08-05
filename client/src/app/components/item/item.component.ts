import { Component, Input, OnInit } from '@angular/core';
import { ProductRes } from 'src/app/models/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() product!:ProductRes;
  ngOnInit(): void {
  }

}
