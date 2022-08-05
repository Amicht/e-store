import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, lastValueFrom } from 'rxjs';
import { Category } from '../models/category.model';
import { ProductRes } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private $productsubject = new BehaviorSubject<ProductRes[]>([]);
  private productURL = 'http://localhost:3001/api/products'
  get products$(){ return this.$productsubject.asObservable(); }

  constructor(private httpClient: HttpClient) { }

  async loadFoodCategories(){
    const categories = await firstValueFrom(this.httpClient.get<Category[]>(this.productURL + '/categories'));
    return categories;
  }
  async loadProducts(){
    const productRes = await lastValueFrom(this.httpClient.get<ProductRes[]>(this.productURL));
    this.$productsubject.next(this.addIntireImageURL(productRes));
  }
  async loadProductsByCategoryId(categoryId:number){
    const productRes = await lastValueFrom(this.httpClient.get<ProductRes[]>(this.productURL+ '/category/'+ categoryId));
    this.$productsubject.next(this.addIntireImageURL(productRes));
    console.log(productRes);
  }
  async loadProductsBySearchword(searchword:string){
    lastValueFrom(this.httpClient.get<ProductRes[]>(this.productURL+ '/search/'+ searchword))
    .then(productRes => {
      this.$productsubject.next(this.addIntireImageURL(productRes));
      console.log(productRes);
    });
  }
  async addProduct(product:FormData){
    const productRes = await lastValueFrom(this.httpClient.post(this.productURL, product))
      .then(()=> "new product added successfully!").catch(err => "Failed to add product. ERROR message: " + err.messgae);
    console.log(productRes);
  }
  async updateProduct(product:ProductRes){
    const productRes = await lastValueFrom(this.httpClient.put(this.productURL, product))
      .then(()=> "Product updated successfully!").catch(err => "Failed to update product. ERROR message: " + err.messgae);
    console.log(productRes);
  }
  addIntireImageURL(productArray: ProductRes[]){
    return productArray.map(p => {return {...p, image:`http://localhost:3001${p.image}`}});
  }

}
