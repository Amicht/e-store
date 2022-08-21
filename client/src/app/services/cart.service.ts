import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart, CartItemReq, CartItemResponse } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private $cartSubject = new BehaviorSubject<Cart | null>(null);
  private cartURL = `${environment.serverURL}/api/cart/`;
  get cart$(){ return this.$cartSubject.asObservable(); }
  constructor(private httpClient:HttpClient,
    private  _router:Router) { }

  loadCart(){
    lastValueFrom(this.httpClient.get<Cart>(this.cartURL))
    .then(cart => {return {...cart, items:this.addIntireImageURL(cart.items)}})
    .then(cart => this.$cartSubject.next(cart))
    .catch(() => this._router.navigate(['/']));
  }
  addProductToCart(productToAdd:CartItemReq){
    lastValueFrom(this.httpClient.post(this.cartURL+ 'item', productToAdd))
    .then(()=> this.loadCart())
    .catch(err => console.log(err.message));
  }
  removeProductFromCart(productId:number){
    lastValueFrom(this.httpClient.delete(this.cartURL+ 'item/' + productId))
    .then(()=> this.loadCart())
    .catch(err => console.log(err.message));
  }
  deleteCart(cartId:number){
    lastValueFrom(this.httpClient.delete(this.cartURL+ cartId))
    .then(()=> this.$cartSubject.next(null))
    .catch(err => console.log(err.message));
  }
  addIntireImageURL(productArray: CartItemResponse[]){
    return productArray.map(p => {return {...p, image:environment.serverURL + p.image}});
  }
  getTotalCartPrice(cartItems:CartItemResponse[]){
    return cartItems.reduce((a,b) => a + b.totalPrice,0)
  }
}
