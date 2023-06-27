import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-cptour',
  templateUrl: './cptour.component.html',
  styleUrls: ['./cptour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CptourComponent implements OnInit {
  ngOnInit(): void {

  }
}
