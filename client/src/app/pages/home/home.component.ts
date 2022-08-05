import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category.model';
import { ProductRes } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories:Category[] = [];
  products:ProductRes[] = [];
  cart:Cart | null = null;
  constructor(private productService: ProductService, private cartServise:CartService) { }

  ngOnInit(): void {
    this.productService.products$.subscribe(p => this.products = p);
    this.cartServise.cart$.subscribe(c => this.cart = c);
    this.getCart(111111111)
    //this.getCategories()
    this.getProducts()
  }
  async getCategories(){
    this.categories = await this.productService.loadFoodCategories()
  }
  getProducts(){
    this.productService.loadProducts();
  }
  getCart(clientId:number){
    this.cartServise.loadCart();
  }
}
