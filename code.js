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
        '../files/images/breakfast/sketches.jpg',
        '../files/images/bubble/final1.jpg',
        '../files/images/nexus/temp.jpg',
        '../files/images/robin/final1.jpg',
        '../files/images/robin/final2.jpg',
        '../files/images/robin/final3.jpg',
        '../files/images/robin/sketches.jpg',
        '../files/images/takeout/final1.jpg',
        '../files/images/takeout/final2.jpg',
        '../files/images/takeout/final3.jpg',
        '../files/images/takeout/final4.jpg',
        '../files/images/takeout/final5.jpg',
        '../files/images/takeout/process.jpg',
        '../files/images/takeout/sketches.jpg',
        '../files/images/underscore/final1.jpg',
        '../files/images/underscore/topics_ani.jpg',
        '../files/images/underscore/header_ani.jpg',
        '../files/images/underscore/search_ani.jpg',
        '../files/images/underscore/topics_ani.gif',
        '../files/images/underscore/header_ani.gif',
        '../files/images/underscore/search_ani.gif',
        '../files/images/ks.jpg',
        '../files/images/ks2.jpg'
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
