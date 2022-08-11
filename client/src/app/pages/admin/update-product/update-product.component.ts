import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductRes } from 'src/app/models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  @Input() product!:ProductRes | undefined;
  updateForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name:[this.product!.name,[Validators.required]],
      price:[this.product!.price,[Validators.required]]
    })
  }

}
