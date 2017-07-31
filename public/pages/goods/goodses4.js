// загружаем краткое описание товаров с JSON

$('document').ready(function () {
    loadGoods1();
});

function loadGoods1() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[31]['name']+'</h1>';
        out += '<img src="'+data[31].image+'">';
        out += '<h4>' + data[31]['short_discription']+'</h4>';
        out += '<h3>' + data[31]['price']+'$'+'</h3>';
        $('#div31').html(out);
    });
}

$('document').ready(function () {
    loadGoods2();
});

function loadGoods2() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[32]['name']+'</h1>';
        out += '<img src="'+data[32].image+'">';
        out += '<h4>' + data[32]['short_discription']+'</h4>';
        out += '<h3>' + data[32]['price']+'$'+'</h3>';
        $('#div32').html(out);
    });
}

$('document').ready(function () {
    loadGoods3();
});

function loadGoods3() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[33]['name']+'</h1>';
        out += '<img src="'+data[33].image+'">';
        out += '<h4>' + data[33]['short_discription']+'</h4>';
        out += '<h3>' + data[33]['price']+'$'+'</h3>';
        $('#div33').html(out);
    });
}

$('document').ready(function () {
    loadGoods4();
});

function loadGoods4() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[34]['name']+'</h1>';
        out += '<img src="'+data[34].image+'">';
        out += '<h4>' + data[34]['short_discription']+'</h4>';
        out += '<h3>' + data[34]['price']+'$'+'</h3>';
        $('#div34').html(out);
    });
}

$('document').ready(function () {
    loadGoods5();
});

function loadGoods5() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[35]['name']+'</h1>';
        out += '<img src="'+data[35].image+'">';
        out += '<h4>' + data[35]['short_discription']+'</h4>';
        out += '<h3>' + data[35]['price']+'$'+'</h3>';
        $('#div35').html(out);
    });
}

$('document').ready(function () {
    loadGoods6();
});

function loadGoods6() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[36]['name']+'</h1>';
        out += '<img src="'+data[36].image+'">';
        out += '<h4>' + data[36]['short_discription']+'</h4>';
        out += '<h3>' + data[36]['price']+'$'+'</h3>';
        $('#div36').html(out);
    });
}