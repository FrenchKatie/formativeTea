$(document).ready(function(){
  $(".teasUl").click(function(){
    $(".nestedUl").slideToggle();
  })
  // $(".bla").click(function(){
  //   $(".mainUl").slideToggle();
  //   $("body").toggleClass('stopScroll');
  // })

  $(".bla").click(function(){
    $(".mainUl").slideToggle();
    $("html, body").toggleClass('stopScroll');
  });
})


// $('.bla').click(function() {
//     var self = $(this);
//      $(".mainUl").slideToggle();
//     self.toggleClass('open');
//     $('.mainUl').toggleClass('open');
//     $("body").toggleClass('stopScroll');
//
//     if (self.hasClass('open')) {
//         $('html, body')
//             // Needed to remove previously bound handlers
//             .off('touchstart touchmove')
//             .on('touchstart touchmove', function (e) {
//                 e.preventDefault();
//             });
//     } else {
//         $('html, body')
//             .off('touchstart touchmove')
//             .on('touchstart touchmove', function (e) {});
//     }
// });
