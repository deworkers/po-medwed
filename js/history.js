$(document).ready(function () {
    var scroll1 = false;
    var scroll2 = false;
    var scroll3 = false;
    var scroll4 = false;

    $(window).scroll(function () {
        if (scroll1 != true && $(window).scrollTop() >= 350) {
            scroll1 = true;
            anime({
                targets: '.history-path',
                strokeDashoffset: [3360, 0],
                easing: 'easeInOutSine',
                duration: 2500,
                delay: function (el, i) {
                    return i * 250
                },
                direction: 'alternate',
                loop: false,
                complete: function(anim) {
                    if ($(window).scrollTop() >= 700 && scroll2 != true) {
                        animation2();
                    } else {
                        $(window).scroll(function () {
                            if ($(window).scrollTop() >= 700 && scroll2 != true) {
                                animation2();
                            }
                        });
                    }
                    
                }
            });
        }
    });
    
    
    var animation2 = function () {
        scroll2 = true;
        anime({
            targets: '.history-path-2',
            strokeDashoffset: [2600, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (el, i) {
                return i * 250
            },
            direction: 'alternate',
            loop: false,
            complete: function (anim) {
                if ($(window).scrollTop() >= 1200 && scroll3 != true) {
                    animation3();
                } else {
                    $(window).scroll(function () {
                        if ($(window).scrollTop() >= 1200 && scroll3 != true) {
                            animation3();
                        }
                    });
                }
            }
        });
    }

    var animation3 = function () {
        scroll3 = true;
        anime({
            targets: '.history-path-3',
            strokeDashoffset: [2600, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (el, i) {
                return i * 250
            },
            direction: 'alternate',
            loop: false,
            complete: function (anim) {
                if ($(window).scrollTop() >= 1700 && scroll4 != true) {
                    animation4();
                } else {
                    $(window).scroll(function () {
                        if ($(window).scrollTop() >= 1700 && scroll4 != true) {
                            animation4();
                        }
                    });
                }
            }
        });
    }

    var animation4 = function () {
        scroll4 = true;
        anime({
            targets: '.history-path-4',
            strokeDashoffset: [3080, 0],
            easing: 'easeInOutSine',
            duration: 2500,
            delay: function (el, i) {
                return i * 250
            },
            direction: 'alternate',
            loop: false,
            complete: function (anim) {

            }
        });
    }
});