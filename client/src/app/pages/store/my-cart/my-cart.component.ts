import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  @Input() cart: Cart | null = null;
  @Output() remove = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  removeItemFromCart(itemId:number){
    this.remove.emit(itemId)
  }

}
