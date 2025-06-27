$(function(){
    $(".slide").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true
    });
    $("nav").mouseenter(function(){
        $(".gnbbg").show();
        $(".gnb>li>.depth2").show();
    });
    $("nav").mouseleave(function(){
        $(".gnb>li>.depth2").hide();
        $(".gnbbg").hide();
    });
    $(".notice ul li:first-child").click(function(){
        $(".cover").show();
        $(".popup").show();
    });
    $(".popup .btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    });
    $(".banner .txt .btn_bn").mouseenter(function(){
        $(".banner .imgbox").css({"opacity": 1});
        $(".banner .txt h2").css({"color": "#fff", "text-shadow": "0 0 10px #333", "font-weight": 400})
    });
    $(".banner .txt .btn_bn").mouseleave(function(){
        $(".banner .imgbox").css({"opacity": 0.3});
        $(".banner .txt h2").css({"color": "#333", "text-shadow": "none", "font-weight": 700})
    });
    $(".family .familysite").click(function(){
        $(".family ul").toggle();
    });
})