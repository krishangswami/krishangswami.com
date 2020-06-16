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

  // var nodes = $('.not-nav');
  // $('.not-nav').on('click', function (evt) {
  //     $('.nav').classList.add('removed');
  // });
  //
  //
  //
  // nodes.on('webkitTransitionEnd', function (evt) { this.remove(); });

  $('.not-nav').click(function() {
    $(this).removeClass('flexed');
    $(this).addClass('removed');
    // $('.nav').addClass('flexed');
    $('.nav').css("width", "320px");
    $('.nav').css("min-width", "320px");
    $('.nav').css("padding", "40px");
    $('.nav > .itemOne').css("opacity", "1");
  });

  $('.subLink').click(function() {
    $('.not-nav').removeClass('removed');
    $('.not-nav').addClass('flexed');
    // $('.nav').addClass('flexed');
    $('.nav').css("width", "0px");
    $('.nav').css("min-width", "0px");
    $('.nav').css("padding", "0px");
    $('.nav > .itemOne').css("opacity", "0");
    // $('.nav').removeClass('removed');
    $('.subPage').css("left", "-400px");
  });

  // $('.not-nav').click(function() {
  //   $('.nav').addClass('removed');
  //   $('.not-nav').not(this).each(function() {
  //       $(this).removeClass("removed");
  //   });
  // });

  // $('audio').click(function() {
  //   // if (this.paused) {
  //   //   this.play();
  //   // } else {
  //   //   this.pause();
  //   // }
  //   $(this).addClass('active');
  //
  //   // if (!$('audio').hasClass('active')) {
  //   //     $('audio').addClass('active');
  //   //     // $('#options').focus();
  //   // } else {
  //   //     $('audio').removeClass('active');
  //   //     // $('#options').blur();
  //   // }
  //   // $('audio').css("border", "1px solid #CCC");
  //   // };
  //   // e.preventDefault();
  //   // $('audio::-webkit-media-controls-play-button').click(function() {
  //     // $('audio').css("border", "1px solid #0256FF");
  //     // $(this).css("position", "fixed");
  //     // $(this).css("border-left", "4px solid #0256FF");
  //   // });
  // });

  // $('.not-nav').click(function() {
  //   $(this).removeClass('open');
  //   $(this).addClass('closed');
  //   $('.nav').removeClass('closed');
  //   $('.nav').addClass('open');
  // });

  // $('.link').hover(
  //   function() {
  //     $(this).append($("<span> →</span>"));
  //   }) function() {
  //     $(this).find("span").last().remove();
  //   }
  // };

  // var item = $('<span> →</span>');

    // $('.link').hover(
    //   function() {
    //     $(this).append(item).hide().fadeIn(2000);
    //   }, function() {
    //     $(this).find( "span" ).last().remove().fadeOut();
    //   }
    // );

  // $('.link').hover(
  //   function() {
  //     $(this).append($("<span> →</span>")).hide().fadeIn(2000);
  //   }, function() {
  //     $(this).find( "span" ).last().remove().fadeOut();
  //   }
  // );

  $(window).scroll(
    function() {
      if ($(window).scrollTop() < 400) {
          $('#scroll').fadeOut();
      } else if ($(window).scrollTop() > 400) {
          $('#scroll').fadeIn();
      }
    });

  $('#scroll').click(
    function() {
      $("html, body").animate({
          scrollTop: 0
      }, "slow");
      return false;
    });

  $('#menu, .blur-back').click(
    function() {
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
