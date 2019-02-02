import { Injectable } from '@angular/core';
import { Product } from './product.model';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProductService {

  products: FirebaseListObservable<any[]>;
  colorOption: number = 0;
  currentCategory: string;

  constructor(private database: AngularFireDatabase) { 
    this.products = database.list('products')
  }
  
  getProducts(category) {
    return this.database.list('products/', {
      query: {
        orderByChild: "category",
        equalTo: category
      }
    })
  }
  
  getProductById(productId: number) {
    return this.database.object('products/' + productId);
  }

  changeColor(choice: number) {
    this.colorOption = choice;
  }

  setCategory(category) {
    this.currentCategory = category;
  }



}
