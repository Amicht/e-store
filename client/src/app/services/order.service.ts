import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, lastValueFrom } from 'rxjs';
import { OrderCountModel, OrderModelRequest, OrderModelResponce } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private serverURL = 'http://localhost:3001/api/orders'
  private $orderSubject = new BehaviorSubject<number>(0);
  get orderCount$(){ return this.$orderSubject.asObservable(); }

  constructor(private httpClient:HttpClient){ }

  async getOrdersCount(){
    lastValueFrom(this.httpClient.get<OrderCountModel>(this.serverURL))
    .then(ordersCount => this.$orderSubject.next(ordersCount.total));
  }

  async addnewOrder(order:OrderModelRequest){
    const newOrder = await firstValueFrom(this.httpClient.post<OrderModelResponce>(this.serverURL, order))
    return newOrder;
  }
}
