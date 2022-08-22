import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { ClientResponse } from 'src/app/models/client.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() cart!:Cart | null;
  @Input() clientDetails!: ClientResponse | null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
