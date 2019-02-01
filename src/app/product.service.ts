import { Injectable } from '@angular/core';
import { Product } from './product.model';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProductService {

  products: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) { 
    this.products = database.list('products');
  }
  
  getProducts() {
    return this.products;
  }
  

}
