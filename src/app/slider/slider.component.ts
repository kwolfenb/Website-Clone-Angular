import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

    slider: string = "../assets/img/slider1.jpg";

    changeSlider() {
      (this.slider === "../assets/img/slider1.jpg" ? this.slider="../assets/img/slider2.jpg" : this.slider="../assets/img/slider1.jpg" );
    }

}
