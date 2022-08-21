import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector:'ngbd-modal-content',
  template:`
  <div class="modal-header">
    <h4 class="modal-title">Add {{name}} to cart</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
    <label>Amount: </label>
    <input type="number" min="1" [defaultValue]="1" required #amountOf/>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-success"
    (click)="close(+amountOf.value)">Add</button>
    <button type="button" class="btn btn-outline-dark"
    (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})
export class NgbdModalContent {
  @Input() name!:string;
  @Input() product_id!:number;
  @Input() cart_id!:number;
  constructor(public activeModal: NgbActiveModal,
    private cartService:CartService) {}

  close(amount:number){
    if(amount<1){
      return;
    }
    this.addToCart(amount)
    this.activeModal.close('Close click')
  }

  addToCart(amount:number){
    this.cartService.addProductToCart({
      amount,
      cart_id:this.cart_id,
      product_id:this.product_id
    });
  }


}

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})

export class AddToCartComponent implements OnInit {

  cart_id!:number;
  @Input() productName!:string;
  @Input() product_id!:number;

  constructor(private cartService:CartService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cartService.cart$.pipe(take(1))
    .subscribe(cart => cart? this.cart_id = cart.id:null)
  }
  open(){
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = this.productName;
    modalRef.componentInstance.product_id = this.product_id;
    modalRef.componentInstance.cart_id = this.cart_id;
  }

}
