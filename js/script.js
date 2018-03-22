$(document).ready(function(){
  $(".teasUl").click(function(){
    $(".nestedUl").slideToggle();
  })


  $(".bla").click(function(){
    $(".mainUl").slideToggle();
    $("body").toggleClass('stopScroll');
    $("header").toggleClass('scroll');
    $(".bla").toggleClass('fixed');
  })

});
