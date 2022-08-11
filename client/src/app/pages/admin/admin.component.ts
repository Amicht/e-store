import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductRes } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminScreen: "add" | "update" = "add";
  products:ProductRes[] = [];
  categories: Category[] = [];
  productToEdit: ProductRes | undefined = undefined;
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.productService.products$.subscribe(p => this.products = p);
    this.productService.loadProducts();
    this.getCategories();
  }
  changeAdminScreen(product:ProductRes){
    console.log(product);
    this.productToEdit = product;
    this.adminScreen = "update";
  }
  setCategory(category:string){
    if(category === "*"){
      this.productService.loadProducts()
    }
    else{
      this.productService.loadProductsByCategoryId(+category);
    }
  }
  async getCategories(){
    this.categories = await this.productService.loadFoodCategories()
  }

}
