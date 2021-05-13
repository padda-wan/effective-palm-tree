import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation])

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
