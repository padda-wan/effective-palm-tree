import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from "swiper/core";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

SwiperCore.use([Navigation])

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  public slides: string[] = [
    "Get a device",
    "Add a phone-line",
    "Upgrade",
    "Mobile internet",
    "Home internet",
  ]

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon('img-placeholder', sanitizer.bypassSecurityTrustResourceUrl('assets/placeholder.svg'));
  }

  ngOnInit(): void {
  }
}
