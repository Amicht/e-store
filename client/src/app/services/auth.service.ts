import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { ClientRegister, ClientResponse } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private $productsubject = new BehaviorSubject<ClientResponse>([]);
  private serverURL = 'http://localhost:3001/auth/'
  // get products$(){ return this.$productsubject.asObservable(); }

  constructor(private httpClient:HttpClient) { }

  async checkAvailableIdOnregistration(newId:number){
    const isAvailable = await lastValueFrom(this.httpClient.get(this.serverURL + 'register/' + newId))
    return isAvailable;
  }
  async register(client:ClientRegister){
    await lastValueFrom(this.httpClient.post(this.serverURL + 'register',client))
    .then(() => console.log("Registration successfully added"))
    .catch(err => console.log(err.message));
  }
  async login(password:string, id:number){
    await lastValueFrom(this.httpClient.post<string>(this.serverURL + 'login',{password,id}))
    .then((token) => this.setClientTokenToLocalStorage(token))
    .catch(err => console.log(err.message));
  }

  setClientTokenToLocalStorage(token:string){
    window.localStorage.setItem("JWT", JSON.stringify(token));
  }

  getClientTokenFromLocalStorage(){
    const token = window.localStorage.getItem("JWT") || null;
    if(token) return JSON.parse(token);
    return null;
  }
}
