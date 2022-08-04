import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Cart, CartItemReq } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private $cartSubject = new BehaviorSubject<Cart | null>(null);
  private cartURL = 'http://localhost:3001/api/cart/';
  get cart$(){ return this.$cartSubject.asObservable(); }
  private currentcClientId = -1;
  constructor(private httpClient:HttpClient) { }

  loadCart(clientId:number){
    lastValueFrom(this.httpClient.get<Cart>(this.cartURL + clientId))
    .then(cart => this.$cartSubject.next(cart))
    .catch(err => console.log(err.message));
  }
  startCart(clientId:number){
    lastValueFrom(this.httpClient.post(this.cartURL, {id:clientId}))
    .then(() => this.loadCart(clientId))
    .then(()=> this.currentcClientId = clientId)
    .catch(err => console.log(err.message));
  }
  addProductToCart(productToAdd:CartItemReq){
    lastValueFrom(this.httpClient.post(this.cartURL+ 'item', productToAdd))
    .then(()=> this.loadCart(this.currentcClientId))
    .catch(err => console.log(err.message));
  }
  removeProductFromCart(productId:number){
    lastValueFrom(this.httpClient.delete(this.cartURL+ 'item/' + productId))
    .then(()=> this.loadCart(this.currentcClientId))
    .catch(err => console.log(err.message));
  }
  deleteCart(cartId:number){
    lastValueFrom(this.httpClient.delete(this.cartURL+ cartId))
    .then(()=> this.loadCart(this.currentcClientId))
    .catch(err => console.log(err.message));
  }
  
}
