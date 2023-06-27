import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-cptraining',
  templateUrl: './cptraining.component.html',
  styleUrls: ['./cptraining.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CptrainingComponent implements OnInit {
  ngOnInit(): void {

  }
}
