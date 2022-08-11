import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { ClientResponse } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: []
})
export class GeneralDetailsComponent implements OnInit {

  @Input() productsCount = 0;
  @Input() orderCount = 0;
  @Input() cart!:Cart | null;
  @Input() clientDetails!: ClientResponse | null;

  constructor() { }

  ngOnInit(): void {
  }

}
