$(document).ready(function() {
   $('<img/>').hide().attr('src', 'images').load(function(){
      $('body').append($(this));
   });
   
   $('.quiet').hover(function() {
       $('body').css('background-image', 'url("images/quiet.jpg")');
   }, function() {
       $('body').css('background', '');
   });

   $('.takeout').hover(function() {
       $('body').css('background-image', 'url("images/takeout.jpg")');
   }, function() {
       $('body').css('background', '');
   });

   $('.ks').hover(function() {
       $('body').css('background-image', 'url("images/ks.jpg")');
   }, function() {
       $('body').css('background', '');
   });

   // $('.quiet').on('mousein', function(){
   //    $('body').css('background-image', 'url("images/quiet.jpg")');
   // });
   // $('.quiet').on('mouseout', function(){
   //   $('body').css('background-image', 'url("images/white.jpg")');
   // });
});
