import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductReq, ProductRes } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit {

  adminScreen: string = "add";
  products:ProductRes[] = [];
  categories: Category[] = [];
  message: string = "";
  productToEdit: ProductRes = {category_id:0,id:0,image:"",name:"",price:0};

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.products$.subscribe(p => this.products = p);
    this.productService.loadProducts();
    this.getCategories();
  }
  changeAdminScreen(event:{product:ProductRes, action:string}){
    this.productToEdit = event.product;
    this.setScreen(event.action);
  }
  setScreen(adminScreen:string){
    this.adminScreen = adminScreen;
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
  updateProduct(product:ProductRes){
    this.productService.updateProduct(product)
    .then(message => this.setMessageScreen(message))
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id)
    .then(message => this.setMessageScreen(message))
  }
  setMessageScreen(message:string){
    this.message = message;
    this.setScreen("message");
    this.productService.loadProducts();
  }
  addProduct(newProduct:FormData){
    this.productService.addProduct(newProduct)
    .then(message => this.setMessageScreen(message))
  }
}
