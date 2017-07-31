// функции для подключения основных блоков для всех наших страниц

(function($){
    $('.header').load('../../plugins/header.html');
})(jQuery);

(function($){
    $('.frame').load('../../plugins/frames.html');
})(jQuery);

(function($){
    $('.bunners').load('../../plugins/bunners.html');
})(jQuery);

(function($){
    $('.footer').load('../../plugins/footer.html');
})(jQuery);

// подключение основного блока для главной страницы

(function($){
    $('#primaryIndex').load('../../pages/about/about.html');
})(jQuery);

