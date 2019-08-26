$(document).ready(function(){
    $(".menu_products").click(function(){
        var submenu = $(".products_list");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    })
});
$(document).ready(function(){
    var html = "";
    var list = "";
    var product = [
        {"id":1, "name":"best1","price":1000, "src":"imgs/one1.jpg"},
        {"id":2, "name":"best2","price":2000},
        {"id":3, "name":"best3","price":3000},
        {"id":4, "name":"best4","price":4000},
        {"id":4, "name":"best5","price":4000},
        {"id":4, "name":"best6","price":4000},
        {"id":4, "name":"best7","price":4000},
        {"id":4, "name":"best8","price":4000},
        {"id":4, "name":"best9","price":4000},
        {"id":4, "name":"best10","price":4000},
        {"id":4, "name":"best11","price":4000},
    ];

    for(var i in product){
        list = `
            <div>`+product[i].name+`</div>
            <img src ="`+product[i].src+`"</div>
            <div>`+product[i].price+`$</div>
        `;

        html = html + list;
    }

    $(".boxes").html(html);
})