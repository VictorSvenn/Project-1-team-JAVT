$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $(‘body’).addClass(‘changeColor’)
      }
      if ($(this).scrollTop() < 200) {
         $(‘body’).removeClass(‘changeColor’)
      }
   });
});