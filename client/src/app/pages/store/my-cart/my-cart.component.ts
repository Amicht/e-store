import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { end } from '@popperjs/core';
import { Cart } from 'src/app/models/cart.model';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  closeResult = '';
  @Input() cart: Cart | null = null;
  @Input() totalPrice: number = 0;
  @Output() remove = new EventEmitter();

  constructor(private offcanvasService: NgbOffcanvas ) { }

  ngOnInit(): void {
  }
  removeItemFromCart(itemId:number){
    this.remove.emit(itemId)
  }

  open(content: any) {
    this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
