import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterMenuArr: string[] = [
    'MEN', 'WOMEN', 'OUTERWEAR', 'SHOES', 'HOME', 'GEAR', 'SALE', 'CLEARANCE', 'GUIDE TO EB'

  ]
  masterProductCategories = [
    'Outerwear', 'Fleece', 'Pants', 'Flannel', 'T-shirts', 'Shirts', 'Jeans', 'Shorts', 'Blazers and Jackets', 'Sweatshirts and Hoodies', 'Sweaters', 'Sleepwear', 'Baselayers', 'Shoes', 'Accessories'
  ]

  masterMouseOver= false;

  mouseOverMenu(button) {
    this.masterMouseOver = button;
  }

  menuClose() {
    this.masterMouseOver = false;
    console.log(this.masterMouseOver);
  }

}
