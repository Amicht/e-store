import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  image:File | null = null;
  addForm!:FormGroup;
  @Input() categories: Category[] = [];
  @Output() onSubmitProduct = new EventEmitter();
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ["",[Validators.required]],
      category_id: [NaN,[Validators.required]],
      price: [NaN,[Validators.required, Validators.min(0.5)]],
      image: [null,[Validators.required]],
    })
  }
  handleFileOnSubmit(){
    const formData = new FormData();
    formData.append("name",this.addForm.controls["name"].value);
    formData.append("price", this.addForm.controls["price"].value);
    formData.append("category_id",this.addForm.controls["category_id"].value);
    formData.append("image",this.image!);
    this.onSubmitProduct.emit(formData);
  }
  uploadFile(event:Event ){
    const file = (event.target as HTMLInputElement).files![0];
    this.image = file;
  }


}
