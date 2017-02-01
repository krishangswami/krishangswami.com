$(document).ready(function() {
    var images = new Array()

    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
    }
    preload(
        '../files/images/breakfast/final1.jpg',
        '../files/images/bubble/final1.jpg',
        '../files/images/robin/final1.jpg',
        '../files/images/takeout/final1.jpg',
        '../files/images/underscore/final1.jpg',

        '../files/images/breakfast/sketches.jpg',
        '../files/images/nexus/temp.jpg',
        '../files/images/robin/final2.jpg',
        '../files/images/robin/final3.jpg',
        '../files/images/robin/sketches.jpg',
        '../files/images/takeout/final2.jpg',
        '../files/images/takeout/final3.jpg',
        '../files/images/takeout/final4.jpg',
        '../files/images/takeout/final5.jpg',
        '../files/images/takeout/process.jpg',
        '../files/images/takeout/sketches.jpg',
        '../files/images/underscore/topics_ani.jpg',
        '../files/images/underscore/header_ani.jpg',
        '../files/images/underscore/search_ani.jpg',
        '../files/images/underscore/topics_ani.gif',
        '../files/images/underscore/header_ani.gif',
        '../files/images/underscore/search_ani.gif',
        '../files/images/ks.jpg',
        '../files/images/ks2.jpg',

        '../files/images/photography/india/1.jpg',
        '../files/images/photography/india/2.jpg',
        '../files/images/photography/india/3.jpg',
        '../files/images/photography/india/4.jpg',
        '../files/images/photography/india/5.jpg',
        '../files/images/photography/india/6.jpg',
        '../files/images/photography/india/7.jpg',
        '../files/images/photography/india/8.jpg',
        '../files/images/photography/india/9.jpg',
        '../files/images/photography/india/10.jpg',
        '../files/images/photography/india/11.jpg',
        '../files/images/photography/india/12.jpg',
        '../files/images/photography/india/13.jpg',
        '../files/images/photography/india/14.jpg',
        '../files/images/photography/india/15.jpg',

        '../files/images/photography/pause/1.jpg',
        '../files/images/photography/pause/2.jpg',
        '../files/images/photography/pause/3.jpg',
        '../files/images/photography/pause/4.jpg',
        '../files/images/photography/pause/5.jpg',
        '../files/images/photography/pause/6.jpg',
        '../files/images/photography/pause/7.jpg',
        '../files/images/photography/pause/8.jpg',
        '../files/images/photography/pause/9.jpg',
        '../files/images/photography/pause/10.jpg',
        '../files/images/photography/pause/11.jpg',
        '../files/images/photography/pause/12.jpg',

        '../files/images/photography/bay/1.jpg',
        '../files/images/photography/bay/2.jpg',
        '../files/images/photography/bay/3.jpg',
        '../files/images/photography/bay/4.jpg',
        '../files/images/photography/bay/5.jpg',
        '../files/images/photography/bay/6.jpg',
        '../files/images/photography/bay/7.jpg',
        '../files/images/photography/bay/8.jpg',
        '../files/images/photography/bay/9.jpg',
        '../files/images/photography/bay/10.jpg',
        '../files/images/photography/bay/11.jpg',
        '../files/images/photography/bay/12.jpg'
    )

    $(".gif").hover(function() {
        $(this).attr("src", function(index, attr) {
            return attr.replace(".jpg", ".gif");
        });
    }, function() {
        $(this).attr("src", function(index, attr) {
            return attr.replace(".gif", ".jpg");
        });
    });


    if ($(window).width() > 800) {
        $('.white').hover(function() {
            $('.section-two').toggleClass(this.id + '-hov');
        });
    }

    $(window).on("resize", function() {
        if ($(window).width() > 800) {
            $(".change-src").attr("src", "../files/images/ks.jpg");
        } else {
            $(".change-src").attr("src", "../files/images/ks2.jpg");
        }
    });

    // var lastScroll = $(window).scrollTop();
    // var up = false;
    // var currScroll;
    // $(window).scroll(function() {
    //     currScroll = $(window).scrollTop();
    //     if (currScroll > lastScroll && !up) {
    //         $('#scroll').stop().fadeOut();
    //         up = !up;
    //     } else if (currScroll < lastScroll && up) {
    //         $('#scroll').stop().fadeIn();
    //         up = !up;
    //     }
    //     lastScroll = currScroll;
    //     if ($(window).scrollTop() < 400) {
    //         $('#scroll').fadeOut();
    //     }
    //     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
    //         $('#scroll').fadeIn();
    //     }
    // });

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
});
