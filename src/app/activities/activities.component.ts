import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(function () {
      $(".coverage-menu").css("display", "none");

      $(".Coverage-logo").click(function() {
        $(".coverage-menu").css("display", "flex");
        $(".container-fluid").css("filter", "blur(0.5px)");
        $(".container").css("filter", "blur(0.5px)");
        $(".coverage-menu").fadeIn(500);
      });
      $(".close-menu").click(function() {
        $(".coverage-menu").css("display", "none");
        $(".container-fluid").css("filter", "");
        $(".container").css("filter", "");
        $(".coverage-menu").fadeOut(500);
      });
    })

  }


}
