import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: []
})
export class OrderComponent implements OnInit {
  cart:Cart | null = null;
  totalPrice = 0;
  constructor(private cartService:CartService,
    private orderService: OrderService, private _router:Router) { }

  ngOnInit(): void {
    this.cartService.cart$.pipe(take(2)).subscribe(cart => {
        if(cart){
          this.cart = cart;
          this.totalPrice = this.cartService.getTotalCartPrice(cart.items);
        }
      });
    this.cartService.loadCart();
  }
  sendOrder(order: {city:string, street:string,arrival:string, creditNumber:number}){
    if(this.cart){
      const myOrder = {
        cart_id: this.cart.id,
        client_id: this.cart.client_id,
        totalPrice: this.totalPrice,
        ...order
      }
      this.orderService.addnewOrder(myOrder)
      .then(() => this.cartService.deleteCart(this.cart!.id))
      .then(() => this._router.navigate(['/success-order']))
      .catch(() => console.error("Failed to order"))
    }
  }

}
