import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  user = {
    password: '',
    id: 0
  }
  loginForm!:FormGroup;
  constructor(private authService:AuthService,
    private cartService:CartService,
    private formBuilder:FormBuilder,
    private _router:Router) { }

  ngOnInit(): void {
    this.setNewForm()
  }
  login(){
    this.authService.login(
      this.loginForm.controls["password"].value,
      this.loginForm.controls["id"].value)
    .then(() => {
      this.authService.getClientDetails();
      this.cartService.loadCart();
      this.setNewForm();
      window.scrollTo(0,0);
    })
    .catch(err => console.log(err.message))
  }
  setNewForm(){
    this.loginForm = this.formBuilder.group({
      id: [null, [Validators.required, Validators.minLength(8) ]],
      password: ["", [Validators.minLength(4) , Validators.required]],
    })
  }

}
