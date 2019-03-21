$(document).ready(function() {
    $('.image').click(function() {
        var second_class = '';
        second_class = $(this).attr('class').split(' ')[1];
        console.log(second_class);
        if (!$('.' + second_class + '-info').hasClass('active')) {
            $('.cover').addClass('cover-on');
            $('.timer-group').addClass('timer-two');
            $('.extrainfo').removeClass('active');
            $('.' + second_class + '-info').addClass('active');
        } else {
            $('.' + second_class + '-info').removeClass('active');
        }
    });

    $('.cover, .button').click(function() {
        $('.extrainfo').removeClass('active');
        $('.cover').removeClass('cover-on');
        $('.timer-group').removeClass('timer-two');
    });

    // var trees_counter = 0;
    // setInterval(function() {
    //     trees_counter += (480 * 1);
    //     $('.num-trees').text(trees_counter);
    // }, 1000);
    //
    // 15 billion trees per year
    // 41,095,890 trees per day
    // 1,712,328 trees per hour
    // 28,538 trees per minute
    // 476 trees per second
    // 48 trees every 100ms
    var trees_counter = 0;
    setInterval(function() {
        trees_counter += 96;
        var string = trees_counter.toLocaleString();
        $('.num-trees').text(string);

    }, 200);

    // 3.1 mm per year
    // 1116 trillion litres per year
    // 2.1 billion litres per minute
    // 35 million litres per second
    // +10 every 10000/35
    //
    // +7 every 100
    //
    // 35000 thousands per second
    // +1750 every 50ms
    //
    //
    // 3.4mm per year
    // 1224 trillion litres per year
    // 3.3534 trillion litres per day
    // 139.726 billion litres per hour
    // 2.329 billion litres per minute
    // 38,812,785 litres per second
    //
    // 38,812 thousands per second
    // +3881 every 100ms
    // +1941 every 50ms
    var water_counter = 0;
    setInterval(function() {
        water_counter += 1941;
        var string = water_counter.toLocaleString();
        $('.num-water').text(string);

    }, 50);

    // 105 deaths per minute
    //
    // 3.1 million childern die every year from malnutrution
    // 8493.15 per day
    // 352.88 per hour
    // 5.898 per minute
    //
    // 7.665 million people die every year from malnutrution
    // 21000 per day
    // 875 per hour
    // 14.58333 per minute
    var death_counter = 0;
    setInterval(function() {
        death_counter += 1;
        var string = death_counter.toLocaleString();
        $('.num-death').text(string);

    }, 60000 / 14.5888);

    // OBESITY
    // 100 billion dollars per year
    // 273.97260274 million per day
    // 11.415525114 million per hour
    // 190,258.7519 per minute
    // 3,170.9791983 per second
    //
    // SOFT DRINKS
    // 65 billion dollars per year
    // 178 million per day
    // 4.420 million per hour
    // 123,668 per minute
    // 2061 per second
    //
    // FOOD WASTE
    // 2.3 billion tons per year
    // 6.301 million per day
    // 262,557 per hour
    // 4376 per minute
    // 73 per second
    var waste_counter = 0;
    setInterval(function() {
        waste_counter += 73;
        var string = waste_counter.toLocaleString();
        $('.num-waste').text(string);

    }, 1000);


    // 30000 per second
    // 1.8 million likes per minute
    // 108 million likes per hour
    // 2.592 billion likes per day
    // 946.08 billion likes per year
    var likes_counter = 0;
    setInterval(function() {
        likes_counter += 299;
        var string = likes_counter.toLocaleString();
        $('.num-likes').text(string);

    }, 10);

    // 770 per second
    // 46200 posts per minute
    // 2.772 million posts per hour
    // 66.528 million posts per day
    // 24.28272 billion posts per year
    // +115 every 150ms
    //
    // 933.3333 per second
    // 56,000 posts per minute
    // 3,360,000 posts per hour
    // 80,640,000 posts per day
    // 29.4336 billion posts per year
    // +140 every 150ms
    //
    // 3,600 per second
    // 216,000 per minute
    // 12,960,000 per hour
    // 311,040,000 per day
    // 113.5296 billion posts per year
    //
    // 1117 per second
    // 67,000 posts per minute
    // 4,020,000 per hour
    // 96,480,000 per day
    // 35.215 billion per year
    // +168 every 150ms
    var posts_counter = 0;
    setInterval(function() {
        posts_counter += 168;
        var string = posts_counter.toLocaleString();
        $('.num-posts').text(string);

    }, 150);


    // copied code for timer
    // https://codepen.io/ninjascribble/pen/rHwkK
    var defaults = {},
        one_second = 1000,
        one_minute = one_second * 60,
        one_hour = one_minute * 60,
        one_day = one_hour * 24,
        startDate = new Date(),

        face = document.getElementById('timer');

    tick();

    function tick() {

        var now = new Date(),
            elapsed = now - startDate,
            parts = [];

        parts[0] = '' + Math.floor(elapsed / one_hour);
        parts[1] = '' + Math.floor((elapsed % one_hour) / one_minute);
        parts[2] = '' + Math.floor(((elapsed % one_hour) % one_minute) / one_second);

        parts[0] = (parts[0].length == 1) ? '0' + parts[0] : parts[0];
        parts[1] = (parts[1].length == 1) ? '0' + parts[1] : parts[1];
        parts[2] = (parts[2].length == 1) ? '0' + parts[2] : parts[2];

        face.innerText = parts.join(':');

        requestAnimationFrame(tick);
    }
});
