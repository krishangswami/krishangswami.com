$(document).ready(function() {
    $.fn.preload = function() {
        this.each(function() {
            $('<img/>')[0].src = this;
        });
    }
    $(['files/images']).preload();

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
