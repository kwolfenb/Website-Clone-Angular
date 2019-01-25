import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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

}
