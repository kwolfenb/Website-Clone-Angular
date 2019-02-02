import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  constructor(private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute, 
    private location: Location
    ) {}
  
  currentRoute: string = this.router.url;
  productList;
  colorChoice: number = 0;
  category: string;

  goToDetailPage(clickedProduct: Product) {
    this.router.navigate(['product', clickedProduct.id])
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.category = urlParameters['category'];
    });
    this.productList = this.productService.getProducts(this.category);
  }

  printList() {
    console.log(this.productList);
  }

  clickColor(color) {
    this.productService.changeColor(color);
    this.colorChoice = this.productService.colorOption;
  }

}
