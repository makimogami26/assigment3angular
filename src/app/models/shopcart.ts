import { Product } from "./product";

export class Shopcart {
    id : number;
    productid: number;
    productNama: string;
    jumlah : number;
    price: number;
    product : Product

    constructor(id:number ,product: Product, productNama : string, jumlah = 1){
    this.id= id;
    this.productid = product.id;
    this.productNama = product.nama;
    this.jumlah =jumlah;
    this.price = product.price;

    }
}
