import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  mouseover = false;

  menuArr: string[] = [
    'MEN', 'WOMEN', 'OUTERWEAR', 'SHOES', 'HOME', 'GEAR', 'SALE', 'CLEARANCE', 'GUIDE TO EB'
  ]

  onMouseOver(button) {
    this.mouseover=button;
    console.log(this.mouseover);
  }

  onMouseOut() {
    this.mouseover=false;
  }

}
