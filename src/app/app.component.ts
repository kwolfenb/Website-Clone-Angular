import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  masterMouseOver= false;

  mouseOverMenu(button) {
    this.masterMouseOver = button;
  }

  menuClose() {
    this.masterMouseOver = false;
    console.log(this.masterMouseOver);
  }

  
  allProducts:string[] = [
    'Outerwear', 'Fleece', 'Pants', 'Flannel', 'T-shirts', 'Shirts', 'Jeans', 'Shorts', 'Blazers and Jackets', 'Sweatshirts and Hoodies', 'Sweaters', 'Sleepwear', 'Baselayers', 'Shoes', 'Accessories'
  ]

  outerwearProducts: string[] = [
    'Jackets', 'Parkas', 'Vests', 'Coats', 'Performance Fleece', 'Pants: Rain, Snow, Ski', 'Down Insulated', 'Rain', 'Soft Shell', 'Hard Shell'
  ]

  shoesProducts: string[] = [
    'Boots', 'Hiking & Trekking Shoes', 'Lace-up Shoes', 'Sandals', 'Slippers', 'Casual Comfort Shoes', 'Water Shoes'
  ]

  homeProducts: string[] = [
    'Sheets & PillowCases', 'Duvet Covers & Shams', 'Blankets & Throws'
  ]

  bagsProducts: string[] = [
    'Backpacks', 'Duffels & Luggage', 'Messenger & Laptop Bags', 'Travel Accessories', 'Tents', 'Sleeping Bags', 'Sunglasses'
  ]

  guideToEb: string[] = [
    'Out Founder', 'Guides & Atheletes', 'Exepeditions', 'Big City Mountaineers', 'American Hiking Society', 'The Heroes Project', 'Responsible Sourcing', 'Award Winners', 'Careers'
  ]

  masterMenuArr: any[] = [
    ['MEN', this.allProducts], ['WOMEN', this.allProducts], ['OUTERWEAR', this.outerwearProducts], ['SHOES', this.shoesProducts], ['HOME', this.homeProducts], ['BAGS & GEAR', this.bagsProducts], ['SALE', this.allProducts], ['CLEARANCE',this.allProducts], ['GUIDE TO EB', this.guideToEb]
  ]

}
