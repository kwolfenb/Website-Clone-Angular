import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number = null;
  productToDisplay;
  colorToDisplay: Number = 0;

  constructor(private productService: ProductService, 
    private route: ActivatedRoute, 
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = parseInt(urlParameters['id']);
    });
    this.productToDisplay = this.productService.getProductById(this.productId); 
  }

  clickColor(color) {
    this.productService.changeColor(color);
    this.colorToDisplay = this.productService.colorOption;
  }
}
