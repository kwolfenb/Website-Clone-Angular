import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  mouseover = false;

  onMouseOver() {
    this.mouseover=true;
    console.log(this.mouseover);
  }

  onMouseOut() {
    this.mouseover=false;
  }

}
