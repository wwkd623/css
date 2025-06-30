$(function(){
    $(".list").slick({
        // 자동실행
        autoplay: true,
        // 한 화면에 보일 슬라이드 개수
        slidesToShow: 2,
        // 한번에 몇장씩 슬라이드 넘길지 정하는 명령
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });
    // $(".btn_pause").click(function(){
    //     $(".btn_pause").toggleClass("on")
    // })
    let sw = true;
    $(".btn_pause").click(function(){
        if(sw==true){
            $(".btn_pause").addClass("on");
            $(".list").slick("slickPause");
            sw = false;
        }else{
            $(".btn_pause").removeClass("on");
            $(".list").slick("slickPlay");
            sw = true;
        }
    })
});