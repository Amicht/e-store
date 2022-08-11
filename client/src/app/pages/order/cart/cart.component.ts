import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {

  @Input() cart!:Cart | null;
  @Input() totalPrice!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
