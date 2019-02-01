import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  constructor(private productService: ProductService, private router: Router) {}
  
  currentRoute: string = this.router.url;

  productList;



  goToDetailPage(clickedProduct: Product) {
    this.router.navigate(['products', 'clickedProduct.$key'])
  }


  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

}
