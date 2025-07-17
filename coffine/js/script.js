$(function(){
    $(".btn_close").click(function(){
        $(".popup").slideUp();
        $("main").animate({"top": 0})
    })
})
$(function(){
    $(".gnb>li>a").mouseenter(function(){
        $("header").stop().animate({"height": 370}, 300);
        $(".depth2").stop().fadeIn(300);
    })
    $("header").mouseleave(function(){
        $("header").stop().animate({"height": 103}, 300)
        $(".depth2").stop().fadeOut(300);
    })
})

// 슬릭 슬라이더
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    dots: true,
  });
});