import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { ProductRes } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  categories:Category[] = [];
  products:ProductRes[] = [];
  cart:Cart | null = null;
  totalPrice = 0;
  constructor(private productService: ProductService,
    private cartServise:CartService) { }

  ngOnInit(): void {
    this.productService.products$.subscribe(p => this.products = p);
    this.cartServise.cart$.subscribe(c => {
      this.cart = c;
      this.totalPrice = c? this.cartServise.getTotalCartPrice(c.items):0;
    });
    this.getCart();
    this.getCategories();
    this.getProducts();
  }
  async getCategories(){
    this.categories = await this.productService.loadFoodCategories()
  }
  getProducts(){
    this.productService.loadProducts();
  }
  getCart(){
    this.cartServise.loadCart();
  }
  setCategory(category:string){
    if(category === "*"){
      this.productService.loadProducts();
    }
    else{
      this.productService.loadProductsByCategoryId(+category);
    }
    window.scrollTo(0,0)
  }
  removeItemFromCart(itemId:number){
    this.cartServise.removeProductFromCart(itemId);
  }

}
