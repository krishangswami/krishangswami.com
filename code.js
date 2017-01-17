$(document).ready(function() {
   // $(".quiet").click(function () {
   //        $(this).show("slide", { direction: "left" }, 1000);
   // });

   $('<img/>').hide().attr('src', 'images').load(function(){
      $('body').append($(this));
   });

   $('.quiet').hover(function() {
      $('body').toggleClass('open');
      $('.finalQuiet').toggleClass('has');
      if ($('.finalQuiet').hasClass('has')) {
         $('.finalQuiet').fadeIn(500);
      } else {
         $('.finalQuiet').fadeOut(500);
      }
   }, function() {
      $('body').toggleClass('open');
      $('.finalQuiet').toggleClass('has');
   });

   $('.takeout').hover(function() {
      $('body').toggleClass('open');
      $('.finalTakeout').toggleClass('has');
      if ($('.finalTakeout').hasClass('has')) {
         $('.finalTakeout').fadeIn(500);
      } else {
         $('.finalTakeout').fadeOut(500);
      }
   }, function() {
      $('body').toggleClass('open');
      $('.finalTakeout').toggleClass('has');
   });

   $('.ks').hover(function() {
      $('body').toggleClass('open');
      $('.finalKs').toggleClass('has');
      if ($('.finalKs').hasClass('has')) {
         $('.finalKs').fadeIn(500);
      } else {
         $('.finalKs').fadeOut(500);
      }
   }, function() {
      $('body').toggleClass('open');
      $('.finalKs').toggleClass('has');
   });
});
