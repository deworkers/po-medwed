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
        $('.diag').css('height', $('body').height() + 5 + 'px');
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
            name: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
        },
        messages: {
            name: {
                required: "Введите ваше имя",
            },
            email: {
                required: "Введите email",
            },
            phone: {
                required: "Введите номер телефона",
            },
        },
        invalidHandler: function(form, validator) {
            
        },
        submitHandler: function (form) {
            // отправка
            $('.modal-body').hide();
            $('.modal-body--after').show();
        },
        unhighlight: function (form) {
            
        },
    });

    $("#bottom-form-alt").validate({
        errorElement: "em",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
        },
        messages: {
            name: {
                required: "Введите ваше имя",
            },
            email: {
                required: "Введите email",
            },
            phone: {
                required: "Введите номер телефона",
            },
        },
        invalidHandler: function(form, validator) {
            
        },
        submitHandler: function (form) {
            // отправка
            $('.bottom-form').hide();
            $('.bottom-wrap--after').show();
        },
        unhighlight: function (form) {
            
        },
    });

    const logos = new Swiper('.content-slider', {
        // Optional parameters
        loop: false,
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

    $(document).on('click', '.select', function () {
        $('.select-list').hide();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('.select-list').show();
        } else {
            $(this).find('.select-list').hide();
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
    });

    $(document).mouseup(function (e) {
        var container = $('.select-list');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
            container.parents('.select').removeClass('active');
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
                    iconImageHref: '../img/contacts/map-icon.png',
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
                $('.header-menu-panel').css('display', 'flex');
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
    }



    
    //tablet
    if (device() == 'tablet') {
        $('.header-menu-list .header-menu-one.mark').each(function() {
            $(this).children('a').after('<span class="more"></span>');
        });

        $('.submenu-menu-one').each(function() {
            if ( $(this).find('.level-2-one').length > 0 ) {
                $(this).children('a').after('<span class="more"></span>');
            }
        });

        $('.header-menu-one.mark .more').on('click', function() {
            if ($(this).hasClass('active')) {
                $('.header-menu-panel').css('display', 'none');
                $('.header-menu-one, .header-menu-one .more').removeClass('active');
            } else {
                $('.header-menu-panel').css('display', 'flex');
                $('.header-menu-one, .more').removeClass('active');
                $(this).addClass('active').parent('.header-menu-one.mark').addClass('active');

                let left = $(this).prev().offset().left;
                $('.header-menu-panel').css('paddingLeft',left  + 'px');
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
    }

});