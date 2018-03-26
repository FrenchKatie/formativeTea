$(document).ready(function(){
  //navigation
  $(".teasUl").click(function(){
    $(".nestedUl").slideToggle();
  })

//navigation
  $(".toggleMobNav").click(function(){
    $(".mainUl").slideToggle();
    $("body").toggleClass('stopScroll');
    $("header").toggleClass('scroll');
    $(".toggleMobNav").toggleClass('fixed');
  })

//hamburger bars
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });

//arrow rotate
  $(".teasUl").click(function(){
    $(".rotateArrow").toggleClass("rotate180");
  });

//product image toggle
//have not yet edited
  // $(".teasUl").click(function(){
  //   $(".nestedUl").slideToggle();
  // })


});
