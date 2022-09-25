import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/features/Interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  configUrl = '../../../assets/data/porducts.json'

  constructor(private http: HttpClient) {}
  getProduct(){
   return  this.http.get(this.configUrl)
  }
}
