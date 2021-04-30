$(document).ready(function() {
    var scroll1 = false;
    var scroll2 = false;

    $(window).scroll(function(){

        if ( $(window).scrollTop() >= 180 ) { 
            $('.navigation').addClass('fixed');
        } else {
            $('.navigation').removeClass('fixed');
        }

        if ( $(window).scrollTop() >= 3500 ) {
            $('.navigation').addClass('fixed-bottom');
        } else {
            $('.navigation').removeClass('fixed-bottom');
        }

        if ( $(window).scrollTop() < 700 ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(0).addClass('active');
        }

        if ( $(window).scrollTop() >= 700 && $(window).scrollTop() < 1800 ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(1).addClass('active');
        }

        if ( $(window).scrollTop() >= 1800 && $(window).scrollTop() < 2800 ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(2).addClass('active');
        }

        if ( $(window).scrollTop() >= 2800 ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(3).addClass('active');
        }

        if ( $('html, body').width() >= 850 ) {
            if ( $(window).scrollTop() >= 1500 && scroll1 != true ) {
                scroll1 = true;
                anime({
                    targets: '.path',
                    strokeDashoffset: [2000, 1150],
                    easing: 'easeInOutSine',
                    duration: 1500,
                    delay: function(el, i) { return i * 250 },
                    direction: 'alternate',
                    loop:false
                });
            }

            if ( $(window).scrollTop() >= 2100 && scroll2 != true) {
                scroll2 = true;
                anime({
                    targets: '.path',
                    strokeDashoffset: [1150, 0],
                    easing: 'easeInOutSine',
                    duration: 1500,
                    delay: function(el, i) { return i * 250 },
                    direction: 'alternate',
                    loop:false
                });
            }
        } else {
            if ( $(window).scrollTop() >= 1300 && scroll1 != true ) {
                scroll1 = true;
                anime({
                    targets: '.path-alt',
                    strokeDashoffset: [2000, 1150],
                    easing: 'easeInOutSine',
                    duration: 1500,
                    delay: function(el, i) { return i * 250 },
                    direction: 'alternate',
                    loop:false
                });
            }

            if ( $(window).scrollTop() >= 1700 &&  !scroll2) {
                scroll2 = true;
                anime({
                    targets: '.path-alt',
                    strokeDashoffset: [1150, 0],
                    easing: 'easeInOutSine',
                    duration: 1500,
                    delay: function(el, i) { return i * 250 },
                    direction: 'alternate',
                    loop:false
                });
            }
        }

        

        
    });

    const review = new Swiper('.review-items', {
        // Optional parameters
        loop: true,

        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                autoHeight: false,
            },
            760: {
                slidesPerView: 2,
            },
            840: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.review-button-next',
            prevEl: '.review-button-prev',
        }
    });

    const logos = new Swiper('.rewiew-logos', {
        // Optional parameters
        loop: true,

        slidesPerView: 6,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            760: {
                slidesPerView: 4,
            },
            840: {
                slidesPerView: 6,
            }
        },
        navigation: {
            nextEl: '.logos-button-next',
            prevEl: '.logos-button-prev',
        }
    });

    if ( $('html, body').width() >= 500 ) {  // штуки декстоп онли
        new WOW().init();
    } else {  // для мобилки
        const services = new Swiper('.services-icons', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            spaceBetween: 25,
            navigation: {
                nextEl: '.services-button-next',
                prevEl: '.services-button-prev',
            }
        });
    }
});

