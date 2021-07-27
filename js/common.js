$(document).ready(function() {
    $(window).scroll(function(){
        var delta = - $(window).scrollTop() / 2;
        $('.diag').css('backgroundPosition', 'center ' + delta + 'px');
    });

    $('.header-menu-open').on('click', function() {
        $('.header-menu-block').slideDown();
    });

    $('.header-menu-close').on('click', function() {
        $('.header-menu-block').slideUp();
    });

    $('.navigation-one').on('click', function(event) {
        event.preventDefault();
        var elem = $(this).attr('href');
        var pos = $(elem).offset().top;
        $('html, body').animate({
            scrollTop: pos
        }, '500');
    });

    $('.modal-close').on('click', function(event) {
        $('.modal').fadeOut(500);
    });

    $('.header-button').on('click', function(event) {
        $('.modal').fadeIn(500);
    });

    $('.bottom-button').on('click', function(event) {
        $('.modal').fadeIn(500);
    });

    setTimeout(function() {
        if ( $('html, body').width() >= 500 ) {
            $('.diag').css('height', $('body').height() + 5 + 'px');
        } else {
            $('.diag').css('height', $('body').height() - 530 + 'px');
        }
        
    }, 500);

    $("#bottom-form").validate({
        errorElement: "em",
        rules: {
            phone: {
                required: true
            },
        },
        messages: {
            phone: {
                required: "Введите номер телефона",
            }
        },
        invalidHandler: function(form, validator) {
            $('.bottom-form-bg').addClass('error');
        },
        submitHandler: function (form) {
            // отправка
            form.submit();
            $('.bottom-wrap').hide();
            $('.bottom-wrap--after').show();
        },
        unhighlight: function (form) {
            $('.bottom-form-bg').removeClass('error');
        },
    });

    $("#modal-form").validate({
        errorElement: "em",
        rules: {
            form_text_1: {
                required: true
            },
            form_text_2: {
                required: true
            },
            form_text_3: {
                required: true
            },
        },
        messages: {
            form_text_1: {
                required: "Введите ваше имя",
            },
            form_text_2: {
                required: "Введите email",
            },
            form_text_3: {
                required: "Введите номер телефона",
            },
        },
        invalidHandler: function(form, validator) {

        },
        submitHandler: function (form) {
            // отправка

            form.submit();
            $('.modal-body').hide();
            $('.modal-body--after').show();
        },
        unhighlight: function (form) {

        },
    });

    $("#bottom-form-alt").validate({
        errorElement: "em",
        rules: {
            form_text_6: {
                required: true
            },
            form_text_7: {
                required: true
            },
            form_text_8: {
                required: true
            },
            form_text_11: {
                required: true
            },
            form_text_13: {
                required: true
            },
            form_text_12: {
                required: true
            }
        },
        messages: {
            form_text_6: {
                required: "Введите ваше имя",
            },
            form_text_7: {
                required: "Введите email",
            },
            form_text_8: {
                required: "Введите номер телефона",
            },
            form_text_11: {
                required: "Введите ваше имя",
            },
            form_text_13: {
                required: "Введите email",
            },
            form_text_12: {
                required: "Введите номер телефона",
            },
        },
        invalidHandler: function(form, validator) {

        },
        submitHandler: function (form) {
            // отправка
            form.submit();
            $('.bottom-wrap').hide();
            $('.bottom-wrap--after').show();
        },
        unhighlight: function (form) {

        },
    });

    const logos = new Swiper('.content-slider', {
        // Optional parameters
        loop: false,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            760: {
                slidesPerView: 3,
            },
            840: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.content-slider-button-next',
            prevEl: '.content-slider-button-prev',
        }
    });

    const news = new Swiper('.news-slider', {
        // Optional parameters
        loop: false,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
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

    $(document).on('click', '.select', function () {
        $('.select').not(this).removeClass('active').find('.select-list').hide();
        if ($(this).hasClass('active')) {
            $(this).toggleClass('active');
            $(this).find('.select-list').hide();
        } else {
            $(this).toggleClass('active');
            $(this).find('.select-list').show();
        }
    });

    $(document).on('click', '.select-one', function (e) {
        e.stopPropagation();
        $('.select-list').hide();
        var text = $(this).text();
        var val = $(this).attr('value')
        $(this).parents('.select').removeClass('active');
        $(this).parents('.select').find('input').val(val);
        $(this).parents('.select').find('.select-field').text(text);
        $('#set_proekt').click();
    });

    $('.lightbox').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
		
	});

    try {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('contacts-map', {
                    center: [56.834033, 60.621783],
                    zoom: 17,
                    controls: []
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                }, {
                    iconCaption: 'улица Энгельса, 36',
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: '/local/templates/mis/img/contacts/map-icon.png',
                    iconImageSize: [190, 51],
                    iconImageOffset: [-25, -51]
                })
        
            myMap.geoObjects.add(myPlacemark)
        });
    } catch (error) {
        
    }

    let timer, timer2;

    let device = function() {
        let width = $(window).width();
        if (width >= 1280) {
            return 'desctope'
        }

        if (width < 1280 && width >= 1024) {
            return 'desctope-sm'
        }

        if (width >= 500 && width < 1024) {
            return 'tablet'
        }

        if (width < 500 ) {
            return 'mobile'
        }
    }

    if (device() == 'desctope' || device() == 'desctope-sm') {
        let clear = function() {
            $('.header-menu-one').removeClass('active');
            $('.header-menu-panel__level-1').html('');
            $('.header-menu-panel__level-2').html('');
            $('.header-menu-panel').hide();
        }

        let clearLevel2 = function() {
            $('.submenu-menu-one').removeClass('active');
        }

        $('.header-menu-one').on('mouseenter', function() {
            clear();
            clearTimeout(timer);
            if ($(this).hasClass('mark')) {
                $(this).parent().addClass('menu-open').find('.header-menu-panel').css('display', 'flex');
                $(this).addClass('active');

                if (device() == 'desctope') {
                    let left = $(this).position().left;
                    $('.header-menu-panel').css('paddingLeft',left + 45 + 'px');
                }

                if (device() == 'desctope-sm') {
                    let left = $(this).position().left;
                    $('.header-menu-panel').css('paddingLeft',left + 30 + 'px');
                }

                if (device() == 'tablet') {
                    let left = $(this).position().left;
                    $('.header-menu-panel').css('paddingLeft',left + 15 + 'px');
                }
                

                let list = $(this).find('.submenu-menu-list').html();
                $('.header-menu-panel__level-1').html(list);
            }
        });

        $(document).on('mouseenter', '.submenu-menu-one', function() {
            let self = this;
            timer2 = setTimeout(function() {
                $('.submenu-menu-one').removeClass('active');
                $(self).addClass('active');

                clearTimeout(timer);
                if ($(self).find('.level-2-one').length > 0) {
                    let list = $(self).find('.level-2').html();
                    $('.header-menu-panel__level-2').html(list);
                }    
            }, 200);
        });


        $(document).on('mouseleave', '.submenu-menu-one', function() {
            clearTimeout(timer2);
        });


        $('.header-menu-block').on('mouseenter', function() {
            clearTimeout(timer);
        });

        $('.header-menu-block').on('mouseleave', function() {
            timer = setTimeout(function() {
                clear();
            }, 1000);
        });

        $('.footer-menu').on('mouseleave', function() {
            timer = setTimeout(function() {
                $('.footer-menu-inner').removeClass('menu-open');
                clear();
            }, 1000);
        });

        $('.footer-menu .header-menu-one').on('mouseenter', function() {
            if ( !$(this).hasClass('mark') ) {
                $('.footer-menu-inner').removeClass('menu-open');
                clear();
            }
        });
    }
    
    if (device() == 'tablet') {
        $('.header-menu-list .header-menu-one.mark').each(function() {
            $(this).children('a').after('<span class="more"></span>');
        });

        $('.footer-menu-inner .header-menu-one.mark').each(function() {
            $(this).children('a').after('<span class="more"></span>');
        });

        $('.submenu-menu-one').each(function() {
            if ( $(this).find('.level-2-one').length > 0 ) {
                $(this).children('a').after('<span class="more"></span>');
            }
        });

        $('.header-menu-one.mark .more').on('click', function() {
            if ($(this).hasClass('active')) {
                $(this).parents('.footer-menu-inner').removeClass('menu-open')
                $('.header-menu-panel').css('display', 'none');
                $('.header-menu-one, .header-menu-one .more').removeClass('active');
            } else {
                $(this).parents('.footer-menu-inner').addClass('menu-open')
                $('.header-menu-panel').css('display', 'flex');
                $('.header-menu-one, .more').removeClass('active');
                $(this).addClass('active').parent('.header-menu-one.mark').addClass('active');

                let left = $(this).prev().offset().left;
                $('.header-menu .header-menu-panel').css('paddingLeft',left  + 'px');
                $('.footer-menu .header-menu-panel').css('paddingLeft',left - 25 + 'px');
                let list = $(this).next('.submenu-menu-list').html();
                $('.header-menu-panel__level-1').html(list);
            }
        });

        $(document).on('click', '.submenu-menu-one .more', function() {
            if ($(this).hasClass('active')) {
                $(this).next().slideUp();
                $('.submenu-menu-one, .submenu-menu-one .more').removeClass('active');
            } else {
                $('.submenu-menu-one .more').next().slideUp();
                $(this).next().slideDown();
                $('.submenu-menu-one, .submenu-menu-one .more').removeClass('active');
                $(this).addClass('active').parent('.submenu-menu-one').addClass('active');
            }
        });

    }

    if (device() == 'mobile') {
        $('.header-menu-list .header-menu-one.mark').each(function() {
            $(this).children('a').after('<span class="more"></span>');
        });

        $('.footer-menu-inner .header-menu-one.mark').each(function() {
            $(this).children('a').after('<span class="more"></span>');
        });

        $('.submenu-menu-one').each(function() {
            if ( $(this).find('.level-2-one').length > 0 ) {
                $(this).children('a').after('<span class="more"></span>');
            }
        });

        $('.header-menu-one.mark > .more').on('click', function() {
            if ($(this).hasClass('active')) { // закрытие
                $(this).next().slideUp();
                $('.header-menu-one.mark, .header-menu-one.mark .more').removeClass('active');
            } else {
                $('.header-menu-one.mark .more').next().slideUp();
                $(this).next().slideDown();
                $('.header-menu-one.mark, .header-menu-one.mark .more').removeClass('active');
                $(this).addClass('active').parent('.header-menu-one.mark').addClass('active');
            }
        });

        $(document).on('click', '.submenu-menu-one .more', function() {
            if ($(this).hasClass('active')) {
                $(this).next().slideUp();
                $('.submenu-menu-one, .submenu-menu-one .more').removeClass('active');
            } else {
                $('.submenu-menu-one .more').next().slideUp();
                $(this).next().slideDown();
                $('.submenu-menu-one, .submenu-menu-one .more').removeClass('active');
                $(this).addClass('active').parent('.submenu-menu-one').addClass('active');
            }
        });

        $('.svg-to-png').each(function() {
            $(this).attr('src', $(this).data('img'));
        });
    }

    

});