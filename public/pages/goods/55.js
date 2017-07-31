var cart = {};

$('document').ready(function () {
    loadGoods();
    checkCart();
    // showMiniCart();
});

function loadGoods() {
    $.getJSON('../../lists_goodses/full_dis_goodses.json', function (data) {
        var out = '';
            var id=['55'];
            out += '<h1>' + data[id]['name'] + '</h1>';
            out += '<img src="' + data[id].image + '">';
            out += '<h4 class="disc">' + data[id]['discription'] + '</h4>';
            out += '<img src="' + data[id].image2 + '">';
            out += '<h3 class="price">' + data[id]['price'] + '</h3>';
            out += '<button data-atr = "' + [id] + '" class="add-to-card btn btn-default btn-lg" type="button" title="Добавить в корзину">Добавить в корзину</button>';
        $('#tov55').html(out);
        $('button.add-to-card').on('click', addToCart);
});
}

function addToCart() {
    var articul = $(this).attr('data-atr');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}

function checkCart() {
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

// function showMiniCart() {
//     var out = '';
//     for(var s in cart){
//         out += s + '---'+ cart[s] +'<br>';
//     }
//     $('#mini-cart').html(out);
// }

// $('document').ready(function () {
//     loadGoods11();
// });

// function loadGoods11() {
//     $.getJSON('../../lists_goodses/full_dis_goodses.json', function (data) {
//         var out = '';
//         out += '<h1>' + data[1]['name']+'</h1>';
//         out += '<h4>' + data[1]['discription']+'</h4>';
//         $('#tov1').html(out);
//     });
// }