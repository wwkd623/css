$(function(){
  $(".gnb>li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn(300);
  });
  $(".gnb>li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut(300);
  });

  // 스와이퍼 슬라이드
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    //   페이지버튼 클릭해서 갈수 있게 하는 명령
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
})