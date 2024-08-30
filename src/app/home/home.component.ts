import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(function () {
      $(".coverage-menu").css("display", "none");
      $(".training").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".training").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".training").css("color", "#F2F2F2");
        $(".formations-background").css("background", "url('../../assets/medias/home/Image01.png')");
        $(".formations-background").css("background-size", "contain");
        $(".formations-background").css("background-repeat", "no-repeat");
        $(".formations-background").css("position", "");
        $(".formations-background").css("left", "");
      });

      $(".tour").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".tour").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".tour").css("color", "#F2F2F2");
        $(".formations-background").css("background", "url('../../assets/medias/home/[removal.ai]_020b2dd6-7db6-47c9-8bb7-766e0a4b74c0-removal-ai_tmp-6496b15cf25c4.png')");
        $(".formations-background").css("background-size", "contain");
        $(".formations-background").css("background-repeat", "no-repeat");
        $(".formations-background").css("position", "relative");
        $(".formations-background").css("left", "8%");
      });

      $(".elearning").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".elearning").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".elearning").css("color", "#F2F2F2");
        $(".formations-background").css("background", "url('../../assets/medias/home/[removal.ai]_f37f80ba-3dd4-4a88-94c5-eb99ad24df36-removal-ai_tmp-6496b17233c58.png')");
        $(".formations-background").css("background-size", "contain");
        $(".formations-background").css("background-repeat", "no-repeat");
        $(".formations-background").css("position", "relative");
        $(".formations-background").css("left", "3%");
      });






      //MOBILE
      $(".training").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".training").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".training").css("color", "#F2F2F2");
        $(".formations-background-mobile").css("background", "url('../../assets/medias/home/Image01.png')");
        $(".formations-background-mobile").css("background-size", "contain");
        $(".formations-background-mobile").css("background-repeat", "no-repeat");
        $(".formations-background-mobile").css("background-position", "center");
      });

      $(".tour").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".tour").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".tour").css("color", "#F2F2F2");
        $(".formations-background-mobile").css("background", "url('../../assets/medias/home/[removal.ai]_020b2dd6-7db6-47c9-8bb7-766e0a4b74c0-removal-ai_tmp-6496b15cf25c4.png')");
        $(".formations-background-mobile").css("background-size", "contain");
        $(".formations-background-mobile").css("background-repeat", "no-repeat");
        $(".formations-background-mobile").css("background-position", "center");
      });

      $(".elearning").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".elearning").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".elearning").css("color", "#F2F2F2");
        $(".formations-background-mobile").css("background", "url('../../assets/medias/home/[removal.ai]_f37f80ba-3dd4-4a88-94c5-eb99ad24df36-removal-ai_tmp-6496b17233c58.png')");
        $(".formations-background-mobile").css("background-size", "contain");
        $(".formations-background-mobile").css("background-repeat", "no-repeat");
        $(".formations-background-mobile").css("background-position", "center");

      });







      //MENU
      $(".Coverage-logo").click(function() {
        $(".coverage-base").css("display", "none");
        $(".coverage-menu").css("display", "flex");
        $(".coverage-menu").fadeIn(500);
      });
      $(".close-menu").click(function() {
        $(".coverage-base").css("display", "flex");
        $(".coverage-menu").css("display", "none");
        $(".coverage-menu").fadeOut(500);
      });

    })
  }

}
