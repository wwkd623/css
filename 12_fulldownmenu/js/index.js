$(function(){
    $("nav").mouseenter(function(){
        $("#header_wrap").stop().animate({"height": 410});
        $(".depth2").show();
        $("#header_wrap").css({"border-bottom": "1px solid #c3c3c3"})
        $("header").css({"border-bottom": "1px solid #ececec"})
    })
    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height": 110});
        $(".depth2").hide();
        $("#header_wrap").css({"border-bottom": "none"})
        $("header").css({"border-bottom": "1px solid #ff6400"})
    })
})