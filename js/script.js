$(document).ready(function(){
  $(".teasUl").click(function(){
    $(".nestedUl").slideToggle();
  })


  $(".toggleMobNav").click(function(){
    $(".mainUl").slideToggle();
    $("body").toggleClass('stopScroll');
    $("header").toggleClass('scroll');
    $(".toggleMobNav").toggleClass('fixed');
  })

  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });

  // $('.teasUl').on("click", function(){
  //   var $arrows = $(this).find("i");
  //   $('.open-close-toggle').toggle(function(){
  //     $arrows.toggle();
  //   })
  // });
  // 
  // $( ".mainUl" ).toggle({
  //     heightStyle: "content",
  //     active:false,
  //     collapsible: true,
  //     header:"div.accordianheader"
  //   });






    // $('.toggle-section').slideToggle(function(){
    //     $arrows.toggle();
    // });


});
