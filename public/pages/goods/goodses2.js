// загружаем краткое описание товаров с JSON

$('document').ready(function () {
    loadGoods1();
});

function loadGoods1() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[11]['name']+'</h1>';
        out += '<img src="'+data[11].image+'">';
        out += '<h4>' + data[11]['short_discription']+'</h4>';
        out += '<h3>' + data[11]['price']+'$'+'</h3>';
        $('#div11').html(out);
    });
}

$('document').ready(function () {
    loadGoods2();
});

function loadGoods2() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[12]['name']+'</h1>';
        out += '<img src="'+data[12].image+'">';
        out += '<h4>' + data[12]['short_discription']+'</h4>';
        out += '<h3>' + data[12]['price']+'$'+'</h3>';
        $('#div12').html(out);
    });
}

$('document').ready(function () {
    loadGoods3();
});

function loadGoods3() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[13]['name']+'</h1>';
        out += '<img src="'+data[13].image+'">';
        out += '<h4>' + data[13]['short_discription']+'</h4>';
        out += '<h3>' + data[13]['price']+'$'+'</h3>';
        $('#div13').html(out);
    });
}

$('document').ready(function () {
    loadGoods4();
});

function loadGoods4() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[14]['name']+'</h1>';
        out += '<img src="'+data[14].image+'">';
        out += '<h4>' + data[14]['short_discription']+'</h4>';
        out += '<h3>' + data[14]['price']+'$'+'</h3>';
        $('#div14').html(out);
    });
}

$('document').ready(function () {
    loadGoods5();
});

function loadGoods5() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[15]['name']+'</h1>';
        out += '<img src="'+data[15].image+'">';
        out += '<h4>' + data[15]['short_discription']+'</h4>';
        out += '<h3>' + data[15]['price']+'$'+'</h3>';
        $('#div15').html(out);
    });
}

$('document').ready(function () {
    loadGoods6();
});

function loadGoods6() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[16]['name']+'</h1>';
        out += '<img src="'+data[16].image+'">';
        out += '<h4>' + data[16]['short_discription']+'</h4>';
        out += '<h3>' + data[16]['price']+'$'+'</h3>';
        $('#div16').html(out);
    });
}