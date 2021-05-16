import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/models/product";
import { Observable } from "rxjs";
import { Assigment3ApiUrl } from "src/app/config/RestApi";
import { first, flatMap, map, shareReplay } from "rxjs/operators";



@Injectable({
  providedIn: "root",
})
export class ProductService {

  constructor(private http: HttpClient) {}
  private product$: Observable<Product[]>;
  private baseUrl: "https://assigment3dspryd.herokuapp.com/";


  getProduct() {
    return this.http.get<any>('https://assigment3dspryd.herokuapp.com/product').pipe(
      map(res => {
        return res.data || {};
      })
    );
  }

  

  // Get Product by its ID
  getProductById(id: number):Observable<any> {
    return this.http.get<any>('https://assigment3dspryd.herokuapp.com/product').pipe(map(res => {
      return res
    }))
  }
}
