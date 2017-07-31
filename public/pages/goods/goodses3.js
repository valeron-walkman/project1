// загружаем краткое описание товаров с JSON

$('document').ready(function () {
    loadGoods1();
});

function loadGoods1() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[21]['name']+'</h1>';
        out += '<img src="'+data[21].image+'">';
        out += '<h4>' + data[21]['short_discription']+'</h4>';
        out += '<h3>' + data[21]['price']+'$'+'</h3>';
        $('#div21').html(out);
    });
}

$('document').ready(function () {
    loadGoods2();
});

function loadGoods2() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[22]['name']+'</h1>';
        out += '<img src="'+data[22].image+'">';
        out += '<h4>' + data[22]['short_discription']+'</h4>';
        out += '<h3>' + data[22]['price']+'$'+'</h3>';
        $('#div22').html(out);
    });
}

$('document').ready(function () {
    loadGoods3();
});

function loadGoods3() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[23]['name']+'</h1>';
        out += '<img src="'+data[23].image+'">';
        out += '<h4>' + data[23]['short_discription']+'</h4>';
        out += '<h3>' + data[23]['price']+'$'+'</h3>';
        $('#div23').html(out);
    });
}

$('document').ready(function () {
    loadGoods4();
});

function loadGoods4() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[24]['name']+'</h1>';
        out += '<img src="'+data[24].image+'">';
        out += '<h4>' + data[24]['short_discription']+'</h4>';
        out += '<h3>' + data[24]['price']+'$'+'</h3>';
        $('#div24').html(out);
    });
}

$('document').ready(function () {
    loadGoods5();
});

function loadGoods5() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[25]['name']+'</h1>';
        out += '<img src="'+data[25].image+'">';
        out += '<h4>' + data[25]['short_discription']+'</h4>';
        out += '<h3>' + data[25]['price']+'$'+'</h3>';
        $('#div25').html(out);
    });
}

$('document').ready(function () {
    loadGoods6();
});

function loadGoods6() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[26]['name']+'</h1>';
        out += '<img src="'+data[26].image+'">';
        out += '<h4>' + data[26]['short_discription']+'</h4>';
        out += '<h3>' + data[26]['price']+'$'+'</h3>';
        $('#div26').html(out);
    });
}