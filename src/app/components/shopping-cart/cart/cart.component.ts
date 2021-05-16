import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { ShopcartService } from 'src/app/services/shopcart.service';
import { Shopcart } from 'src/app/models/shopcart';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(private msg: MessengerService, private ShopcartService : ShopcartService) {
   
   }

  ngOnInit() {
    this.handleSubcribe();
    this.loadCartItems();
    
  }
  handleSubcribe(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })

  }
  loadCartItems(){
    this.ShopcartService.getCartItems().subscribe((Items: Shopcart[]) =>{ // dari service shopcartservice
      console.log(Items)
      this.cartItems = Items;
      this.calculateCartTotal();
    })
  }

//   addProductToCart(product: Product) {

//     let productExists = false

//     for (let i in this.cartItems) {
//       if (this.cartItems[i].productId === product.id) {
//         this.cartItems[i].jumlah++
//         productExists = true
//         break;
//       }
//     }

//     if (!productExists) {
//       this.cartItems.push({
//         productId: product.id,
//         productName: product.nama,
//         jumlah : 1,
//         price: product.price
//       })
      
//     }
//    this.calculateCartTotal()
//   }
  calculateCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(items => {
      this.cartTotal += (items.jumlah * items.price) // penghitungan angka jumlah*price
    })
  }

}