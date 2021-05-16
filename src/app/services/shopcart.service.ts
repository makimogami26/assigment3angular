import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Shopcart} from '../models/shopcart';
import {ShopcartUrl} from '../config/RestApi'
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ShopcartService {

  constructor(private http : HttpClient) { }

  getCartItems() : Observable<Shopcart[]>{
    return this.http.get<Shopcart[]>(ShopcartUrl).pipe(
      map((result: any[])=>{
      let cartItem:Shopcart[]=[];
      for(let item of result){
        let productExists =  false

        for (let i in cartItem){
          if (cartItem[i].productid === item.product.id) {
            cartItem[i].jumlah++
            productExists = true
            break;
          }
        }
        if(!productExists){
          cartItem.push(new Shopcart(item.id,item.product,item.Nama));
        }
  }
  return cartItem
})
    )
}
  addProductToCart(product : Product):Observable<any>{
    return this.http.post(ShopcartUrl,{product});
  }
}
