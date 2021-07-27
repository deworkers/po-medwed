
$(document).ready(function() {
    var scroll1 = false;
    var scroll2 = false;

    var delta = 0;
    $('.diag').css('backgroundPosition', 'center ' + delta + 'px');

    $(window).scroll(function(){

        delta = - $(window).scrollTop() / 2;
        anime({
            targets: '#diag-group',
            translateY: delta,
            easing: 'easeInOutExpo',
            duration: 3000
        });
        $('.diag').css('backgroundPosition', 'center ' + delta + 'px');

        if ( $(window).scrollTop() >= 180 ) {
            $('.navigation').addClass('fixed');
        } else {
            $('.navigation').removeClass('fixed');
        }

        var contentHeight = $('.main-content').innerHeight() + $('.bottom').innerHeight() - $('.footer').innerHeight() - 200;

        if ( $(window).scrollTop() >= contentHeight ) {
            $('.navigation').addClass('fixed-bottom');
            $('.navigation-wrap').css('top', $('.main-content').innerHeight() + $('.bottom').innerHeight() - 300);
        } else {
            $('.navigation').removeClass('fixed-bottom');
            $('.navigation-wrap').attr('style', '');
        }

        var navDelta = 200;

        if ( $(window).scrollTop() < $('#services').offset().top - navDelta ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(0).addClass('active');
        }

        if ( $(window).scrollTop() >= $('#services').offset().top - navDelta && $(window).scrollTop() < $('#achiev').offset().top - navDelta ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(1).addClass('active');
        }

        if ( $(window).scrollTop() >= $('#achiev').offset().top && $(window).scrollTop() < $('#review').offset().top - navDelta) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(2).addClass('active');
        }

        if ( $(window).scrollTop() >= $('#review').offset().top && $(window).scrollTop() < $('#bottom').offset().top - navDelta) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(3).addClass('active');
        }

        if ( $(window).scrollTop() >= $('#bottom').offset().top - navDelta ) {
            $('.navigation-one').removeClass('active');
            $('.navigation-one').eq(4).addClass('active');
        }

        if ( $('html, body').width() >= 850 ) {
            if ( $(window).scrollTop() >= 2000 && scroll1 != true ) {
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

            if ( $(window).scrollTop() >= 2600 && scroll2 != true) {
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
            if ( $(window).scrollTop() >= 1800 && scroll1 != true ) {
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

            if ( $(window).scrollTop() >= 2200 &&  !scroll2) {
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
        loop: false,

        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                autoHeight: true,
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


    if ( $('html, body').width() <= 500 ) {
        setTimeout(() => {
            $('.review-items .swiper-wrapper').innerHeight($('.rewiew-item').eq(0).innerHeight())
        }, 1000);
    }

    const news = new Swiper('.news-main-list', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
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
        loop: false,

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
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 25,
            navigation: {
                nextEl: '.services-button-next',
                prevEl: '.services-button-prev',
            }
        });
    }

    

});

$(window).load(function() {
    $(".rewiew-logo img, .partner-one__img img").fadeIn(500);

    // clone image
    $('.rewiew-logo img, .partner-one__img img').each(function () {
        var el = $(this);
        el.css({
            "position": "absolute"
        }).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({
            "position": "absolute",
            "z-index": "998",
            "opacity": "0"
        }).insertBefore(el).queue(function () {
            var el = $(this);
            el.parent().css({
                "width": this.width,
                "height": this.height
            });
            el.dequeue();
        });
        this.src = grayscale(this.src);
    });

    // Fade image
    $('.rewiew-logo img, .partner-one__img img').mouseover(function () {
        $(this).parent().find('img:first').stop().animate({
            opacity: 1
        }, 300);
    })
    $('.rewiew-logo img, .partner-one__img img').mouseout(function () {
        $(this).stop().animate({
            opacity: 0
        }, 300);
    });

    // Grayscale w canvas method
    function grayscale(src) {
        try {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var imgObj = new Image();
            imgObj.src = src;
            canvas.width = imgObj.width;
            canvas.height = imgObj.height;
            ctx.drawImage(imgObj, 0, 0);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (var y = 0; y < imgPixels.height; y++) {
                for (var x = 0; x < imgPixels.width; x++) {
                    var i = (y * 4) * imgPixels.width + x * 4;
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }
            ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
            return canvas.toDataURL();
         }
         catch (e) {
            console.log(e);
         }
        
    }
});

