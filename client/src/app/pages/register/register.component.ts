import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientRegister } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
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
  firstFormRequires = [
    "All filelds are required",
    "ID must be at least 8 characters long",
    "Email must have valid syntax",
    "Password must be at least 4 characters long"
  ]
  firstRegisterForm!: FormGroup;
  secondRegisterForm!: FormGroup;
  formNumber = 1;
  errorMessage="";

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private _router:Router) { }

  ngOnInit(): void {
    this.firstRegisterForm = this.formBuilder.group({
      id: [null, [Validators.min(10000000), Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(4) , Validators.required, Validators.minLength(4)]],
      confirm: ["", [Validators.minLength(4) , Validators.required, Validators.minLength(4)]],
    });
    this.secondRegisterForm = this.formBuilder.group({
      firstName: [null ,[Validators.required]],
      lastName: ["" ,[Validators.required]],
      city: ["", [ Validators.required]],
      street: ["", [ Validators.required]],
    });
  }

  async submitFirstForm(){
    if(this.firstRegisterForm.valid){
      if(this.firstRegisterForm.value["confirm"] !== this.firstRegisterForm.value["password"]){
        this.errorMessage = "Password does not match confirmation";
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
      this.formNumber = 2;
    }
  }

  async submitSecondForm(){
    if(this.secondRegisterForm.valid){
      this.registrationToEdit = {...this.registrationToEdit, ...this.secondRegisterForm.value}
      await this.authService.register(this.registrationToEdit)
        .then(() => this._router.navigate(["/"]))
    }

  }

}
