var items = [
    {
        id: 'SVE',
        title: 'Свердловская область',
        content: '<ul><li>Внедрение и модернизация ИШЗ (2013 - по н.в.)</li><li>Разработка и внедрение сервиса «Аналитический блок» (2008 – по н.в.)</li><li>Разработка и внедрение системы «ИЭМК» (2013 - по н.в)</li><li>Внедрение и модернизация ИШЗ (2013 - по н.в.)</li><li>Разработка и внедрение сервиса «Аналитический блок» (2008 – по н.в.)</li><li>Разработка и внедрение системы «ИЭМК» (2013 - по н.в)</li></ul>'
    },
    {
        id: 'KHM',
        title: 'Ханты-Мансийский автономный округ',
        content: '<ul><li>Внедрение и модернизация ИШЗ (2013 - по н.в.)</li><li>Разработка и внедрение сервиса «Аналитический блок» (2008 – по н.в.)</li><li>Разработка и внедрение системы «ИЭМК» (2013 - по н.в)</li><li>Внедрение и модернизация ИШЗ (2013 - по н.в.)</li><li>Разработка и внедрение сервиса «Аналитический блок» (2008 – по н.в.)</li><li>Разработка и внедрение системы «ИЭМК» (2013 - по н.в)</li></ul>'
    },
    {
        id: 'SA',
        title: 'Ханты-Мансийский автономный округ',
        content: '<ul><li>Внедрение и модернизация ИШЗ (2013 - по н.в.)</li><li>Разработка и внедрение сервиса «Аналитический блок» (2008 – по н.в.)</li><li>Разработка и внедрение системы «ИЭМК» (2013 - по н.в)</li><li>Внедрение и модернизация ИШЗ (2013 - по н.в.)</li><li>Разработка и внедрение сервиса «Аналитический блок» (2008 – по н.в.)</li><li>Разработка и внедрение системы «ИЭМК» (2013 - по н.в)</li></ul>'
    }
];

$(document).ready(function() {
    items.forEach(function(item) {
        $('#' + item.id).addClass('active');
    });

    /*let getPos = function(pos) {
        let width = $(window).width();
        if ( pos > width / 2 ) {
            return 'left';
        } else {
            return 'right';
        }
    };*/

    $('.elem.active').on('click', function(event) {
        let id = $(this).attr('id');
        let obj = items.find(item => item.id == id);

        $('.elem.active').removeClass('select');

        //$('.map-modal').removeClass('left', 'right');
        
        $('.map-modal__title').text(obj.title);
        $('.map-modal__content').html(obj.content);

        setTimeout(function() {
            $('#' + id).addClass('select');
        }, 10);

        $('.map-modal').show()/*.addClass(getPos(event.clientX))*/;
    });

    $('.map-modal__close').on('click', function() {
        $('.map-modal').hide();
        $('.elem.active').removeClass('select');
    });
});