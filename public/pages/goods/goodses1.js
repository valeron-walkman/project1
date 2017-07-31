// загружаем краткое описание товаров с JSON

$('document').ready(function () {
    loadGoods1();
});

function loadGoods1() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[1]['name']+'</h1>';
        out += '<img src="'+data[1].image+'">';
        out += '<h4>' + data[1]['short_discription']+'</h4>';
        out += '<h3>' + data[1]['price']+'$'+'</h3>';
        $('#div1').html(out);
    });
}

$('document').ready(function () {
    loadGoods2();
});

function loadGoods2() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[2]['name']+'</h1>';
        out += '<img src="'+data[2].image+'">';
        out += '<h4>' + data[2]['short_discription']+'</h4>';
        out += '<h3>' + data[2]['price']+'$'+'</h3>';
        $('#div2').html(out);
    });
}

$('document').ready(function () {
    loadGoods3();
});

function loadGoods3() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[3]['name']+'</h1>';
        out += '<img src="'+data[3].image+'">';
        out += '<h4>' + data[3]['short_discription']+'</h4>';
        out += '<h3>' + data[3]['price']+'$'+'</h3>';
        $('#div3').html(out);
    });
}

$('document').ready(function () {
    loadGoods4();
});

function loadGoods4() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[4]['name']+'</h1>';
        out += '<img src="'+data[4].image+'">';
        out += '<h4>' + data[4]['short_discription']+'</h4>';
        out += '<h3>' + data[4]['price']+'$'+'</h3>';
        $('#div4').html(out);
    });
}

$('document').ready(function () {
    loadGoods5();
});

function loadGoods5() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[5]['name']+'</h1>';
        out += '<img src="'+data[5].image+'">';
        out += '<h4>' + data[5]['short_discription']+'</h4>';
        out += '<h3>' + data[5]['price']+'$'+'</h3>';
        $('#div5').html(out);
    });
}

$('document').ready(function () {
    loadGoods6();
});

function loadGoods6() {
    $.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
        var out = '';
        out += '<h1>' + data[6]['name']+'</h1>';
        out += '<img src="'+data[6].image+'">';
        out += '<h4>' + data[6]['short_discription']+'</h4>';
        out += '<h3>' + data[6]['price']+'$'+'</h3>';
        $('#div6').html(out);
    });
}