$(document).ready(function() {

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
            var check = $('.color').attr('class').split(' ')[1];

            $(".color").removeClass(check);
            $('.color').addClass(this.id);
            $("#name").css('background-color', 'transparent');

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        },
        function() {
            var check = $('.color').attr('class').split(' ')[1];
            $( ".color" ).removeClass(check);
            $("#name").removeClass('namer');
            $("#name").css('background-color', '#FFEB3B');
        });

        $('.corners').hover(function() {
            var seCheck = $('.section-three').attr('class').split(' ')[1];

            $(".section-three").removeClass(seCheck);
            $('.white').removeClass('active');
            $(".section-three").addClass(this.id + '-hov');

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        });
    }

    $(window).on("resize", function() {
        if ($(window).width() > 800) {
            $(".change-src").attr("src", "../files/images/ks.jpg");
        } else {
            $(".change-src").attr("src", "../files/images/ks2.jpg");
        }
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
});
