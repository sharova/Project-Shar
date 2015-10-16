$(document).ready(function(){
      $('.owl-carousel').owlCarousel({
      items:4,
      loop:true,
      mouseDrag: true,
      touchDrag: true,
      nav: true,
      margin: 20,
      navText: [" " , " "],
      });
      });

$(function () {
    var austDay = new Date();                               // сегодняшняя дата
    austDay = new Date(2015, 10 - 10, 18);    // дата, до которой считаем
    // console.log(austDay);
    $('#defaultCountdown').countdown({until: austDay, padZeroes: true});
  });
