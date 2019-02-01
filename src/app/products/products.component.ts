import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  constructor(private productService: ProductService) {}

  productList: AngularFireList<any[]>;

  getProducts() {
    this.productList = this.productService.getProducts();
  }

  ngOnInit() {

  }

}
