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
      $(".training").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".training").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".training").css("color", "#F2F2F2");
        $(".formations-background").css("background", "url('../../assets/medias/home/enfant.jpg')");
      });

      $(".tour").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".tour").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".tour").css("color", "#F2F2F2");
        $(".formations-background").css("background", "url('../../assets/medias/home/parent.jpg')");
      });

      $(".elearning").click(function() {
        $(".formation").css("background", "transparent");
        $(".formation").css("color", "#565151");
        $(".elearning").css("background", "linear-gradient(90deg, #73378C, #BF267A)");
        $(".elearning").css("color", "#F2F2F2");
        $(".formations-background").css("background", "url('../../assets/medias/home/user.jpg')");
      });
    })
  }

}
