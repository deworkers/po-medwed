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
        loop: true,
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
        
            myMap.geoObjects
                .add(myPlacemark)
        });
    } catch (error) {
        
    }
    
});