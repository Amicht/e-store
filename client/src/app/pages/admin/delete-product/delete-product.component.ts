import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductRes } from 'src/app/models/product.model';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  @Input() product!:ProductRes;
  @Output() deleteHandler = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(){
    this.deleteHandler.emit(this.product.id)
  }

}
