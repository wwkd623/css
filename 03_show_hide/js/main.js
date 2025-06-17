$(function(){
    // 클릭이벤트
    $("#btn1").click(function(){
        // 클릭했을 때 명령
        $("div:first-child").hide();
    })
    $("#btn2").click(function(){
        // 클릭했을 때 명령
        $("div:first-child").show();
    })
    $("#btn3").click(function(){
        $("div:nth-child(3)").toggle();
    })
    $("#btn4").click(function(){
        $("div:nth-child(4)").hide();
    })
    $("#btn5").click(function(){
        $("div:last-child").show();
    })
})