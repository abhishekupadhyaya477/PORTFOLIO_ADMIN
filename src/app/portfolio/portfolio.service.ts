import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private baseUrl: string='https://portfolio-admin-cf5ef-default-rtdb.asia-southeast1.firebasedatabase.app/';
  constructor( private http: HttpClient) { }

  getPortfolioDetails(user:any){
    return this.http.get(this.baseUrl+`users/${user}`+'.json');
  }
}
