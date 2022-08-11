import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductRes } from 'src/app/models/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() userRole!: number;
  @Output() onEditClickHandler = new EventEmitter()
  constructor() { }
  @Input() product!:ProductRes;
  ngOnInit(): void {
  }
  editBtnHandler(product:ProductRes, action:string){
    this.onEditClickHandler.emit({product, action})
  }

}
