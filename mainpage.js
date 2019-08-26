new Swiper('.banner', {
    effect : 'slide', //fade, cube, flip, coverflow, 기본값은 slide
    autoHeight:true, //자동 높이 조절(기본값은 false)
    speed:1000,
    slidesPerView : 1, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 0, // 슬라이드간 간격
    slidesPerGroup : 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank : false,
    loop : true, // 무한 반복

   //  pagination : { // 페이징
   //     el : '.swiper-pagination',
   //     clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
   //  },
    navigation : { // 네비게이션
       nextEl : '.swiper-button-next', // 다음 버튼 클래스명
       prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    },
 });
 
 new Swiper('.bestlist', {
    effect : 'slide', //fade, cube, flip, coverflow, 기본값은 slide
    autoHeight:true, //자동 높이 조절(기본값은 false)
    speed:1000,
    slidesPerView : 4, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 0, // 슬라이드간 간격
    slidesPerGroup : 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank : true,
    loop : true, // 무한 반복

    pagination : { // 페이징
       el : '.best-pagination',
       clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },

    navigation : { // 네비게이션
       nextEl : '.best-button-next', // 다음 버튼 클래스명
       prevEl : '.best-button-prev', // 이번 버튼 클래스명
    },
 });
   $(document).ready(function(){
           var s_width;
           var c_width;
           var per;
           var location;
           
           $(document).on("mousemove", ".lovelush_pt", function(e){
               s_width = $(".lovelush_pt").width(); //보여지는 영역의 너비
               c_width = $(".lovelush_wrapper").width(); // 전체 너비
               per = (e.pageX/s_width).toFixed(2); //좌표 %
               location = (c_width - s_width)*per;
               $(".lovelush_wrapper").css({
                   left : "-"+location+"px"
               });
           })
       });

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
$(window).scroll(function () {
    var height = $('.banner').height()-200;
    var scrollTop = $(window).scrollTop();
    if(height < scrollTop){
        return false;
    }
    var opacity = 1 - scrollTop / height;
    console.log(opacity);
    $('.slidetext').css({
        'opacity': opacity
    });
});

