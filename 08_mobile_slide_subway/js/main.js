$(function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    // ↓ 주석 처리된 요소는 포함하지 않음
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });

  $('.menu_slide').slick({
    autoplay: true,
    slidesToShow: 2,
    arrows: false,
    dots: true
  });

  // 아코디언메뉴
  $(".m_side_wrap .m_gnb>ul>li>a").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  })

  // 햄버거버튼 누르면 모바일 더보기 옆에서 슬라이드인 하기
  $(".header .m_all_btn").click(function(){
    $(".cover").fadeIn();
    $(".m_side_wrap").animate({"left": 0},300);
  })
  // 클로즈 버튼으로 닫기
  $(".m_close").click(function(){
    $(".cover").fadeOut();
    $(".m_side_wrap").animate({"left": "-100%"},300);
  })
});