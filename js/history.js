$(document).ready(function() {
    var scroll1 = false;
    var scroll2 = false;
    var scroll3 = false;
    var scroll4 = false;
    
    $(window).scroll(function(){
        if ( $(window).scrollTop() >= 0 && scroll1 != true ) {
            scroll1 = true;
            anime({
                targets: '.history-path',
                strokeDashoffset: [2600, 0],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop:false
            });
        }

        if ( $(window).scrollTop() >= 500 && scroll2 != true ) {
            scroll2 = true;
            anime({
                targets: '.history-path-2',
                strokeDashoffset: [2600, 0],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop:false
            });
        }

        if ( $(window).scrollTop() >= 800 && scroll3 != true ) {
            scroll3 = true;
            anime({
                targets: '.history-path-3',
                strokeDashoffset: [2600, 0],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop:false
            });
        }

        if ( $(window).scrollTop() >= 1200 && scroll4 != true ) {
            scroll4 = true;
            anime({
                targets: '.history-path-4',
                strokeDashoffset: [2600, 0],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop:false
            });
        }
    });
});