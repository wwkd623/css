$(function(){
    $(".btn_close").click(function(){
        $(".popup").slideUp();
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

// 배너 슬라이드
$(document).ready(function(){
  $('.banner_slide').slick({
    autoplay: true,
    dots: true,
    arrows: false,
  });
});

// 탭 기능
$(function(){
  $("ul.tab li").click(function(e){
    // 클릭하면 위로 올라가는거 방지
    e.preventDefault();
    $("ul.tab li").removeClass("on");
    $(this).addClass("on");
  })

  // 리스트박스 클릭하면 on클래스
  $(".content ul.list li").click(function(e){
    e.preventDefault();
    $(".content ul.list li").removeClass("on");
    $(this).addClass("on");
  })

  // new_menu on클래스
  $(".content ul.new_menu li").click(function(e){
    e.preventDefault();
    $(".content ul.new_menu li").removeClass("on");
    $(this).addClass("on");
  })

})