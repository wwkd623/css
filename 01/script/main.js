$(function(){
    $(".slide").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
        arrows: false
        // vertical: true
    });
    $(".notice ul li:first-child").click(function(){
        $(".cover").show();
        $(".popup").show();
    });
    $(".btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    });
    $(".familysite").click(function(){
        $(".family ul").toggle();
    });
    $(".gnb").mouseenter(function(){
        $(".gnbbg, .gnb li .depth2").stop().show();
    })
    $(".gnb").mouseleave(function(){
        $(".gnbbg, .gnb li .depth2").hide();
    })
})