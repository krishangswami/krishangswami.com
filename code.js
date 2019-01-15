document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

// window.addEventListener("play", function(evt) {
//   // var tempId;
//     if (window.$_currentlyPlaying) {
//         window.$_currentlyPlaying.pause();
//     }
//     window.$_currentlyPlaying = evt.target;
// }, true);

$(document).ready(function(){
  $('audio').click(function() {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
      $('audio').css("border", "1px solid #CCC");
    // };
    // e.preventDefault();
    this.onplaying = function() {
      $(this).css("border", "1px solid #0256FF");
      // $(this).css("position", "fixed");
      // $(this).css("border-left", "4px solid #0256FF");
    };
  });

  $(window).scroll(function() {
      if ($(window).scrollTop() < 400) {
          $('#scroll').fadeOut();
      } else if ($(window).scrollTop() > 400) {
          $('#scroll').fadeIn();
      }
  });

  $('#scroll').click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, "slow");
      return false;
  });

  $('#menu, .blur-back').click(function() {
      if (!$('body').hasClass('active')) {
          $('body').addClass('active');
          $('#options').focus();
      } else {
          $('body').removeClass('active');
          $('#options').blur();
      }
      // $('body').toggleClass('active');
  });
});
