import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductRes } from 'src/app/models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit ,OnChanges{

  @Input() product!:ProductRes;
  @Output() editHandler = new EventEmitter()
  updateForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.setForm()
  }
  ngOnChanges(): void {
    this.setForm()
  }
  setForm(){
    this.updateForm = this.fb.group({
      name:[this.product.name,[Validators.required]],
      price:[this.product.price,[Validators.required, Validators.min(0.5)]]
    })
  }
  onSubmit(){
    this.editHandler.emit({...this.product, ...this.updateForm.value})
  }

}
