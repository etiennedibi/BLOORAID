import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  ngOnInit(): void {
    $(".coverage-menu").css("display", "none");
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
  }
}
