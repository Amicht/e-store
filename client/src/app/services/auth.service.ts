import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientRegister, ClientResponse } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverURL = `${environment.serverURL}/auth/`;
  private $clientSubject:BehaviorSubject<ClientResponse | null> = new BehaviorSubject<ClientResponse | null>(null);
  get client$(){
    return this.$clientSubject.asObservable()
  }
  constructor(private httpClient:HttpClient) { }

  async checkAvailableIdOnregistration(newId:number){
    return lastValueFrom(this.httpClient.get(this.serverURL + 'register/' + newId))
  }

  async register(client:ClientRegister){
    return lastValueFrom(this.httpClient.post(this.serverURL + 'register',client))
    .then(() => this.clearStorage())
  }
  async login(password:string, id:number){
    return firstValueFrom(this.httpClient.post(this.serverURL + 'login',{password,id},{responseType:'text'}))
    .then((token) => this.setClientTokenToLocalStorage(token))
  }

  setClientTokenToLocalStorage(token:string){
    window.localStorage.setItem("JWT", token);
  }
  async getClientDetails(){
    return lastValueFrom(this.httpClient.get<ClientResponse>(this.serverURL + "details"))
    .then(res => this.$clientSubject.next(res));
  }
  clearStorage(){
    this.$clientSubject.next(null);
    window.localStorage.removeItem("JWT");
  }
}
