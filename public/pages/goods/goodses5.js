// загружаем краткое описание товаров с JSON

$('document').ready(function () {
    loadGoods1();
});

function loadGoods1() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[41]['name']+'</h1>';
        out += '<img src="'+data[41].image+'">';
        out += '<h4>' + data[41]['short_discription']+'</h4>';
        out += '<h3>' + data[41]['price']+'$'+'</h3>';
        $('#div41').html(out);
    });
}

$('document').ready(function () {
    loadGoods2();
});

function loadGoods2() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[42]['name']+'</h1>';
        out += '<img src="'+data[42].image+'">';
        out += '<h4>' + data[42]['short_discription']+'</h4>';
        out += '<h3>' + data[42]['price']+'$'+'</h3>';
        $('#div42').html(out);
    });
}

$('document').ready(function () {
    loadGoods3();
});

function loadGoods3() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[43]['name']+'</h1>';
        out += '<img src="'+data[43].image+'">';
        out += '<h4>' + data[43]['short_discription']+'</h4>';
        out += '<h3>' + data[43]['price']+'$'+'</h3>';
        $('#div43').html(out);
    });
}

$('document').ready(function () {
    loadGoods4();
});

function loadGoods4() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[44]['name']+'</h1>';
        out += '<img src="'+data[44].image+'">';
        out += '<h4>' + data[44]['short_discription']+'</h4>';
        out += '<h3>' + data[44]['price']+'$'+'</h3>';
        $('#div44').html(out);
    });
}

$('document').ready(function () {
    loadGoods5();
});

function loadGoods5() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[45]['name']+'</h1>';
        out += '<img src="'+data[45].image+'">';
        out += '<h4>' + data[45]['short_discription']+'</h4>';
        out += '<h3>' + data[45]['price']+'$'+'</h3>';
        $('#div45').html(out);
    });
}

$('document').ready(function () {
    loadGoods6();
});

function loadGoods6() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[46]['name']+'</h1>';
        out += '<img src="'+data[46].image+'">';
        out += '<h4>' + data[46]['short_discription']+'</h4>';
        out += '<h3>' + data[46]['price']+'$'+'</h3>';
        $('#div46').html(out);
    });
}