$(document).ready(function() {
    var tik = 500;
    $('.animation-computer').show();

    setTimeout(function() {
        $('.animation-gears').addClass('show');
    }, tik*2);

    setTimeout(function() {
        $('.animation-men').addClass('show');
    }, tik*7);

    setTimeout(function() {
        for (let i = 0; i < $('.animation-icon').length; i++) {
            setTimeout(function() {
                $('.animation-icon').eq(i).show();
            }, tik*i);
        }
    }, tik*2);

    setTimeout(function() {
        for (let i = 0; i < $('.animation-title').length; i++) {
            setTimeout(function() {
                $('.animation-title').eq(i).show();
            }, tik*i);
        }
    }, tik*3);

    anime({
        targets: '.circle-1',
        strokeDashoffset: [1830, 340],
        strokeDasharray: [1830, 1215],
        easing: 'easeInOutSine',
        duration: 1500,
        loop:false
    });

    anime({
        targets: '.circle-3',
        strokeDashoffset: [1830, 390],
        strokeDasharray: [1830, 1600],
        easing: 'easeInOutSine',
        duration: 1500,
        loop:false
    });

    anime({
        targets: '.circle-2',
        strokeDashoffset: [1830, 1050],
        strokeDasharray: [1830, 1500],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 1500,
        direction: 'normal',
        loop:false
    });

    $('.dot-1').show();

    $('.dot-2').show();

    setTimeout(function() {
        $('.dot-3').show();
    }, 700);

    setTimeout(function() {
        $('.dot-5').show();
    }, 1500);

    setTimeout(function() {
        $('.dot-4').show();
    }, 2000);


});