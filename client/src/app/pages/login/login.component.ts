import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    password: '',
    id: 0
  }
  loginForm!:FormGroup;
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private _router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      password: ["", [Validators.minLength(4) , Validators.required]],
    })
  }
  login(){
    if(this.loginForm.invalid){
      const errors = this.showErrors();
      console.log(errors);
      //console.log(this.loginForm.controls);
    }
    else{
      this.authService.login(
        this.loginForm.controls["password"].value,
        this.loginForm.controls["id"].value)
        .then(() => this._router.navigate(["/"]))
        .catch(err => console.log(err.message))
    }
  }

  showErrors(){
    const errors:string[] = [];
    Object.keys(this.loginForm.controls).forEach(k => {
      const error = this.loginForm.get(k)!.errors;
      if(error) errors.push(k + ': ' + Object.keys(error));
      })
      return errors;
    }

}
