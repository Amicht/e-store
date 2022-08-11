import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: []
})
export class ShippingFormComponent implements OnInit {

  @Output() sendShipping = new EventEmitter();
  shippingForm!:FormGroup;
  cities = [
    "Tel-Aviv",
    "Jerusalem",
    "Haifa",
    "Rishon Letzion",
    "Petach Tikva",
    "Be'er Sheva",
    "Nazeret",
    "Bat-Yam",
    "Ashdod",
    "Hod Hashron",
    "Kiryat Gat",
    "Zefat",
    "Ramat Gan",
    "Netanya"
  ]

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.shippingForm = this.formBuilder.group({
      city: ["", [Validators.required]],
      street: ["", [Validators.required]],
      arrival: ["", [Validators.required]],
      creditNumber: ["", [Validators.required]],
    });
  }
  order(){
    if(this.shippingForm.invalid){
      return;
    }
    console.log(this.shippingForm.value);
    this.sendShipping.emit(this.shippingForm.value)
  }

}
