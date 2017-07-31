// загружаем краткое описание товаров с JSON

$('document').ready(function () {
    loadGoods1();
});

function loadGoods1() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[51]['name']+'</h1>';
        out += '<img src="'+data[51].image+'">';
        out += '<h4>' + data[51]['short_discription']+'</h4>';
        out += '<h3>' + data[51]['price']+'$'+'</h3>';
        $('#div51').html(out);
    });
}

$('document').ready(function () {
    loadGoods2();
});

function loadGoods2() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[52]['name']+'</h1>';
        out += '<img src="'+data[52].image+'">';
        out += '<h4>' + data[52]['short_discription']+'</h4>';
        out += '<h3>' + data[52]['price']+'$'+'</h3>';
        $('#div52').html(out);
    });
}

$('document').ready(function () {
    loadGoods3();
});

function loadGoods3() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[53]['name']+'</h1>';
        out += '<img src="'+data[53].image+'">';
        out += '<h4>' + data[53]['short_discription']+'</h4>';
        out += '<h3>' + data[53]['price']+'$'+'</h3>';
        $('#div53').html(out);
    });
}

$('document').ready(function () {
    loadGoods4();
});

function loadGoods4() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[54]['name']+'</h1>';
        out += '<img src="'+data[54].image+'">';
        out += '<h4>' + data[54]['short_discription']+'</h4>';
        out += '<h3>' + data[54]['price']+'$'+'</h3>';
        $('#div54').html(out);
    });
}

$('document').ready(function () {
    loadGoods5();
});

function loadGoods5() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[55]['name']+'</h1>';
        out += '<img src="'+data[55].image+'">';
        out += '<h4>' + data[55]['short_discription']+'</h4>';
        out += '<h3>' + data[55]['price']+'$'+'</h3>';
        $('#div55').html(out);
    });
}

$('document').ready(function () {
    loadGoods6();
});

function loadGoods6() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[56]['name']+'</h1>';
        out += '<img src="'+data[56].image+'">';
        out += '<h4>' + data[56]['short_discription']+'</h4>';
        out += '<h3>' + data[56]['price']+'$'+'</h3>';
        $('#div56').html(out);
    });
}