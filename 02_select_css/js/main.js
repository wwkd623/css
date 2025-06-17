// 준비작업(바인딩)
$(function(){
    // 제이쿼리 문법 삽입
    // $("선택자").명령함수()
    // 명령함수 css() -> jQuery프로그램으로 css 접근할 때 사용
    // 문자는 무조건 ""로 묶어줘야함
    $("h1").css({"color": "red"});
    $(".date").css({"font-size": 80, "color": "pink", "background": "purple"});
    $(".para").css({"font-size": 10, "border": "10px solid blue"});
    $("ul li").css({"border": "1px solid red"});
    $("ul li:last-child").css({"font-size": 48});
    $("a").css({"padding": 10, "border": "5px solid blue"});
})