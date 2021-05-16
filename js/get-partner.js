$(document).ready(function () {
    var scroll = false;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 800 && scroll != true) {
            scroll = true;
            anime({
                targets: '.get-partner-path',
                strokeDashoffset: [3150, 0],
                easing: 'easeInOutSine',
                duration: 2500,
                delay: function (el, i) {
                    return i * 250
                },
                direction: 'alternate',
                loop: false
            });
        }
    });

    $('.get-partner-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".bottom").offset().top
        }, 1000);
    });
});