$(function(){
    // 마우스를 header에 hover하면 header높이를 400px로 늘리기
    // .stop()라는 함수를 필수적으로 넣어줘야 여러번 왔다갔다해도 마지막 명령만 기억
    $("header").mouseenter(function(){
        $("header").stop().animate({'height': '400px'})
    })

    // 마우스가 header에서 벗어나면 header높이를 원상복구
    $("header").mouseleave(function(){
        $("header").stop().animate({'height': '110px'})
    })
    // 클릭하면
    $("header").click(function(){

    })
})