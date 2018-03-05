$(document).ready(function() {
//
//     $(".gif").hover(function() {
//         $(this).attr("src", function(index, attr) {
//             return attr.replace(".jpg", ".gif");
//         });
//     }, function() {
//         $(this).attr("src", function(index, attr) {
//             return attr.replace(".gif", ".jpg");
//         });
//     });
//

  var windowHeight = $(window).height();

  $(window).scroll(function() {
    if ($(window).scrollTop() > windowHeight/2) {
      $('#menu').fadeIn();
    } else if ($(window).scrollTop() < windowHeight/2) {
      $('#menu').fadeOut();
    }
  });
  $("#link_link").click(function() {
      $('html,body').animate({
          scrollTop: $("#links").offset().top},
          'slow');
  })
  $("#home_link").click(function() {
      $('html,body').animate({
          scrollTop: $("#home").offset().top},
          'slow');
  })

  $("#homeo_link, #homeo_link_two").click(function() {
      $('html,body').animate({
          scrollTop: $("#homeo").offset().top},
          'slow');
  })
  $("#cascadia_link, #cascadia_link_two").click(function() {
      $('html,body').animate({
          scrollTop: $("#cascadia").offset().top},
          'slow');
  })
  $("#playfare_link, #playfare_link_two").click(function() {
      $('html,body').animate({
          scrollTop: $("#playfare").offset().top},
          'slow');
  })
  $("#underscore_link, #underscore_link_two").click(function() {
      $('html,body').animate({
          scrollTop: $("#underscore").offset().top},
          'slow');
  })
  $("#hbo_link, #hbo_link_two").click(function() {
      $('html,body').animate({
          scrollTop: $("#hbo").offset().top},
          'slow');
  })


    if ($(window).width() > 800) {
    //
        $('#project_links a').hover(function() {
            // var check = $('.one').attr('class').split(' ')[1];
            // var check = $(this).attr('id');
            // $('#one').removeClass('active');
            // $('#one').addClass(this.id);
            // $("#name").css('background-color', 'transparent');
            $('#project_links a').removeClass('notgray');
            $('#project_links a').addClass('white');
            // $('#project_links a .num').css('color', '#212121');
            // $(this).css('color', '#FFF');
            // var check = $(this).attr('id');
            // var seCheck = $('#links').attr('class');

            $('#links').removeClass();
            $('#links').addClass(this.id + '_image');
        });

        $("#project_links ul").mouseleave(function() {
          // $('#links').removeClass();
          $('#project_links a').removeClass('white');
          $('#project_links a').addClass('notgray');
          $('#links').addClass('gray_link_image');
        });
    }



//     $(window).on("resize", function() {
//         if ($(window).width() > 800) {
//             $(".change-src").attr("src", "../files/images/ks.jpg");
//         } else {
//             $(".change-src").attr("src", "../files/images/ks2.jpg");
//         }
//     });
//
//     $(window).scroll(function() {
//         if ($(window).scrollTop() < 400) {
//             $('#scroll').fadeOut();
//         } else if ($(window).scrollTop() > 400) {
//             $('#scroll').fadeIn();
//         }
//     });
//
//     $('#scroll').click(function() {
//         $("html, body").animate({
//             scrollTop: 0
//         }, "slow");
//         return false;
//     });
});
