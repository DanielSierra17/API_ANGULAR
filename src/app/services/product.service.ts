import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Api_Url: string = 'https://fakestoreapi.com/products';

  constructor(private HttpClient: HttpClient) {  }

  getProducts(): Observable<any> {

    return this.HttpClient.get(this.Api_Url).pipe(res => res);

  }

}
