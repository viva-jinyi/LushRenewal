
var map;

$(document).ready(function(){
    var html = "";
    var list = "";
    var store = [
        {"id":1, "num":"1","img":"lushshop1.png","name":"Poole","location":"poole", "lat":50.713352, "lng":-1.987250, "tel":"Tel : 01202 672 217", "address":"Address : 29 High St, Poole, BH15 1AB"},
        {"id":2, "num":"2","img":"lushshop2.png","name":"Bournemouth","location":"Bournemouth", "lat":50.720150, "lng":-1.878149, "tel":"Tel : 01225 428 271", "address":"Address : 8 Union St, City Centre,Bournemouth, BH1 1DR"},
        {"id":3, "num":"3","img":"lushshop3.png","name":"Southampton","location":"Southampton", "lat":50.904071, "lng":-1.404810, "tel":"Tel : 029 2039 9089", "address":"Address : 59-61 Queen St, Southampton, SO15 1QD"},
        {"id":4, "num":"4","img":"lushshop4.png","name":"Portsmouth","location":"Portsmouth", "lat":50.801699, "lng":-1.090179, "tel":"Tel : 020 7789 0001", "address":"Address : 175 - 179 Oxford St, Commercial Road Portsmouth, PO1 4RL"},
        {"id":5, "num":"5","img":"lushshop5.png","name":"Bath","location":"Bath", "lat":51.382134, "lng":-2.360670, "tel":"Tel : 01225 428 271", "address":"Address : 8 Union St, City Centre, Bath, BA1 1RW"},
        {"id":6, "num":"6","img":"lushshop6.png","name":"Taunton","location":"Taunton", "lat":51.015520, "lng":-3.103390, "tel":"Tel : 01823 339 375", "address":"Address : 2 North St, Taunton, TA1 1LH"},
        {"id":7, "num":"7","img":"lushshop7.png","name":"Chichester","location":"Chichester", "lat":50.836359, "lng":-0.778359, "tel":"Tel : 01243 532 822", "address":"Address : 87 East St, Chichester, PO19 1HA"},
        {"id":8, "num":"8","img":"lushshop8.png","name":"Basingstoke","location":"Basingstoke", "lat":51.264420, "lng":-1.086266, "tel":"Tel : 01256 844 215", "address":"Address : 8 Mayfair House Town Centre Basingstoke, RG21 7JT"},
        {"id":9, "num":"9","img":"lushshop9.png","name":"Bristol","location":"Bristol", "lat":51.457180, "lng":-2.590060, "tel":"Tel : 0117 925 7582", "address":"Address : 73 Broadmead, Bristol, BS1 3DX"}
    ];  

    for(var i in store){
        list = `
        <div class="store">
            <div>`+store[i].num+`</div>
            <img src="imgs/`+store[i].img+`" alt="">
            <h1>`+store[i].name+`</h1>
            <input class="store_id" type='hidden' value='`+store[i].id+`'></input>
            <p>
                `+store[i].tel+`<br>
                `+store[i].address+`
            </p>
        </div>
        `;

        html = html + list;
    }

    $(".shoplist").html(html);


    setTimeout(function(){
        initMap(1);
    },130);
    $(".menu_products").click(function(){
        var submenu = $(".products_list");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });

    $(document).on('click', '.store', function(){
        store_id = $(this).children(".store_id")[0].value;
        initMap(store_id);
    });

    var location;
    var arrStore;

    function initMap(index) {
        arrStore = searchStore(index);
        location = {lat: arrStore.lat, lng : arrStore.lng};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location
        });

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: arrStore.name
        });
    }

    function searchStore(data){
        for(var i in store){
            if(data == store[i].id){
                return store[i];
            }
        }
    }
})
$(function(){
    $('.store').click(function(){
        $('html, body').scrollTop(0)
  });
});
        

//     <!-- 1. 클릭이벤트를 만든다(.store)
// 2. this를 통해 input의 value를 찾는다.
// 3. value를 매개변수로 하여 initMap(value);
// 4. value를 통해 json 배열에 접근하여 어떤 store를 선택했는지 찾는다.
// 5. 거기서 위도 경도를 추출하여 -->