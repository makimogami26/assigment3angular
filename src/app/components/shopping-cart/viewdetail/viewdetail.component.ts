import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {

   id : any;
   @Input() detail: Product

  constructor(
              private route: ActivatedRoute, 
              private router : Router, 
              private productservice: ProductService ) { }

              ngOnInit(): void {
                this.id = this.route.snapshot.params['id']
                this.getDetailProduct()
              }

  getDetailProduct(){
    this.productservice.getProductById(this.id).subscribe(detail => {
      this.detail = detail.product
    })
  }
}
