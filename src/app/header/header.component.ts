import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private productService: ProductService, private router: Router) {}

  @Input() menuArr;
  @Input() productList;
  @Input() mouseover;

  @Output() mouseOverAction = new EventEmitter();

  onMouseOver(menuButton) {
    this.mouseOverAction.emit(menuButton);
  }

  onMouseOut() {
    this.mouseover=false;
  }

  goToProductPage(productCategory) {
    this.productService.setCategory(productCategory)
    this.router.navigate([productCategory])
    window.location.reload();
  }

}
