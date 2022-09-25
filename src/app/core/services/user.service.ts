import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  configUrl = '../../../assets/data/users.json'

  constructor(private http: HttpClient) {}
  getUser(){
   return  this.http.get(this.configUrl)
  }
}
