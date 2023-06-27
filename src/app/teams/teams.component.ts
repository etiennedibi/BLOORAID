import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamsComponent implements OnInit {

    ngOnInit(): void {

      $(document).ready(function () {
        $(".gerance").click(function() {
          $(".Swips").css("display", "none");
          $(".btn").css("background", "transparent");
          $(".btn").css("color", "#565151");
          $(".btn").css("font-family", "light");
          $(".Gerance").css("display", "block");
          $(".gerance").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
          $(".gerance").css("color", "#F2F2F2");
          $(".gerance").css("font-family", "bold");
        });

        $(".dev").click(function() {
          $(".Swips").css("display", "none");
          $(".btn").css("background", "transparent");
          $(".btn").css("color", "#565151");
          $(".btn").css("font-family", "light");
          $(".Dev").css("display", "block");
          $(".dev").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
          $(".dev").css("color", "#F2F2F2");
          $(".dev").css("font-family", "bold");
        });

        $(".cyber").click(function() {
          $(".Swips").css("display", "none");
          $(".btn").css("background", "transparent");
          $(".btn").css("color", "#565151");
          $(".btn").css("font-family", "light");
          $(".Cyber").css("display", "block");
          $(".cyber").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
          $(".cyber").css("color", "#F2F2F2");
          $(".cyber").css("font-family", "bold");
        });

        $(".market").click(function() {
          $(".Swips").css("display", "none");
          $(".btn").css("background", "transparent");
          $(".btn").css("color", "#565151");
          $(".btn").css("font-family", "light");
          $(".Market").css("display", "block");
          $(".market").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
          $(".market").css("color", "#F2F2F2");
          $(".market").css("font-family", "bold");
        });
      })

    }

}
