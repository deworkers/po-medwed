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

    let getTop = function() {
        let modalHeight = $('.map-modal').innerHeight();
        let mapHeight = $('.map').innerHeight();

        let delta = (mapHeight - modalHeight) / 2;
        console.log(delta);
        $('.map-modal').css('bottom', delta+'px')
        return delta
    }
    

    $('.elem.active').on('click', function(event) {
        let id = $(this).attr('id');
        let obj = items.find(item => item.id == id);

        $('.elem.active').removeClass('select');

        $('.map-modal__title').text(obj.title);
        $('.map-modal__content').html(obj.content);

        setTimeout(function() {
            $('#' + id).addClass('select');
        }, 10);

        $('.map-modal-wrap').css('display','flex')/*.addClass(getPos(event.clientX))*/;
        if ($('html, body').width() >= 1024) {
            getTop();
        }
    });

    $('.map-modal__close').on('click', function() {
        $('.map-modal-wrap').css('display','none');
        $('.elem.active').removeClass('select');
    });
});