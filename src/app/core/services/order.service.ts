import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  configUrl = '../../../assets/data/orders.json'

  constructor(private http: HttpClient) {}
  getOrders(){
   return  this.http.get(this.configUrl)
  }
  getProduct(){
    return  this.http.get(this.configUrl).pipe(
      map((itemData:any) => {
        return itemData.map((value:any) => {
          return value['Products']
        })
    })
    )

  }
}
