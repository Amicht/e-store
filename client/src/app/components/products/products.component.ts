import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductRes } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {

  @Input() products:ProductRes[] =[];
  @Input() categories:Category[] =[];
  @Input() userRole!: number;
  @Output() categoryChange:EventEmitter<string> = new EventEmitter();
  @Output() onEdidHandler = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submitCategory(category:string){
    this.categoryChange.emit(category)
  }
  onEditClickHandler(p:ProductRes){
    this.onEdidHandler.emit(p);
  }


}
