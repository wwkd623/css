$(function(){
    // swiper slide 자바스크립트
    const swiper = new Swiper('.swiper', {
    // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
        },
        // 페이드인페이드아웃 효과주는 명령
        effect: 'fade',

    // If we need pagination 페이지버튼
        pagination: {
            el: '.swiper-pagination',
            // 클릭할 수 있도록하는 명령
            clickable: true,
        },

    // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})