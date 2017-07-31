var cart = {};

$.getJSON('../../lists_goodses/short_dis_goodses.json', function (data) {
    var goods = data;
    checkCart();
    showCart();
    
    function showCart() {
        if ($.isEmptyObject(cart)){
            var out = '<h1>'+'Ваша корзина пуста.Добавьте товар в корзину.'+'</h1>';
            $('#primaryCart').html(out);
        }
        else{
        var out ='';
        for (var id in cart){

            out += '<h3>' + data[id]['name'] + '</h3>';
            out += '<img src="' + goods[id].image + '">';
            out += '<button title="Удалить" class="delete" data-art="'+id+'">x</button>';
            out += '<br>';
            out += '<button title="-1шт" class="minus" data-art="'+id+'">-</button>';
            out += cart[id];
            out += '<button title="+1шт" class="plus" data-art="'+id+'">+</button>';
            out += cart[id]*goods[id].price + '$'+'<br>';
        }
        $('#primaryCart').html(out);
        $('.plus').on('click', plusGoods);
        $('.minus').on('click', minusGoods);
        $('.delete').on('click', deleteGoods);
        }
    }
    
    function plusGoods() {
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }

    function minusGoods() {
        var articul = $(this).attr('data-art');
        if (cart[articul] > 1) {
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        saveCartToLS();
        showCart();
    }

    function deleteGoods() {
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();
        showCart();
    }
});

function checkCart() {
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}