import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterProductCategories = [
    'Outerwear', 'Fleece', 'Pants', 'Flannel', 'T-shirts', 'Shirts', 'Jeans', 'Shorts', 'Blazers and Jackets', 'Sweatshirts and Hoodies', 'Sweaters', 'Sleepwear', 'Baselayers', 'Shoes', 'Accessories'
  ]

}
