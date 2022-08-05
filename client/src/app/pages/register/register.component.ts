import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientRegister } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationToEdit:ClientRegister = {
    id:-1,
    password:"",
    city:"",
    email:"",
    firstName:"",
    lastName:"",
    street:""
  }
  firstRegisterForm!: FormGroup;
  secondRegisterForm!: FormGroup;
  formNumber = 1;
  errorMessage="";

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private _router:Router) { }

  ngOnInit(): void {
    this.firstRegisterForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.minLength(4) , Validators.required]],
      confirm: ["", [Validators.minLength(4) , Validators.required]],
    });
    this.secondRegisterForm = this.formBuilder.group({
      firstName: [null, [Validators.minLength(2) ,Validators.required]],
      lastName: ["", [Validators.minLength(2) ,Validators.required]],
      city: ["", [Validators.minLength(2) , Validators.required]],
      street: ["", [Validators.minLength(2) , Validators.required]],
    });
  }

  async submitFirstForm(){
    if(this.firstRegisterForm.valid){
      if(this.firstRegisterForm.value["confirm"] !== this.firstRegisterForm.value["password"]){
        this.errorMessage = "Password doen not match confirmation";
        return;
      }
      const isAvailable = await this.authService.checkAvailableIdOnregistration(this.firstRegisterForm.value["id"]);
      if(!isAvailable) {
        this.errorMessage = "ID already exist";
        return;
      }
      this.errorMessage = "";
      delete this.firstRegisterForm.value["confirm"];
      this.registrationToEdit = {...this.registrationToEdit, ...this.firstRegisterForm.value}
      console.log(this.firstRegisterForm.value["password"]);
      this.formNumber = 2;
    }
  }

  async submitSecondForm(){
    if(this.secondRegisterForm.valid){
      this.registrationToEdit = {...this.registrationToEdit, ...this.secondRegisterForm.value}
      console.log(this.registrationToEdit);
      await this.authService.register(this.registrationToEdit)
        .then(() => this._router.navigate(["/login"]))
    }

  }

}
