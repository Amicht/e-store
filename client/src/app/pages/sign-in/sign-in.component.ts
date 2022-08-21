import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { ClientResponse } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: []
})
export class SignInComponent implements OnInit {
  orderCount = 0;
  productsCount: any;
  clientDetails:ClientResponse | null = null;
  cart:Cart | null = null;


  constructor(private orderService:OrderService,
    private productService:ProductService,
    private cartService:CartService,
    private authService:AuthService,
    private _router:Router) { }

  ngOnInit(): void {
    this.orderService.orderCount$.pipe(take(2)).subscribe(count => this.orderCount = count);
    this.productService.products$.pipe(take(2)).subscribe(products => this.productsCount = products.length);
    this.authService.client$.subscribe(res => {
      if(res && res.role === 2){
        this._router.navigate(['/store'])
      }
      this.clientDetails = res;
    })
    this.cartService.cart$.pipe(take(2)).subscribe(cart => this.cart = cart);
    
    this.orderService.getOrdersCount();
    this.productService.loadProducts();
    this.authService.getClientDetails();
    this.cartService.loadCart();
  }


}
