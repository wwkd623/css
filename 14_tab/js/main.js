$(function(){
    $(".list2").hide();
    $(".section .inner .right .wrap .menu li").click(function(){
        $(".section .inner .right .wrap .menu li").removeClass("on")
        $(this).addClass("on")
        let num = $(this).index();
        console.log(num)
        $(".list").hide();
        $(".list").eq(num).show();
    })
})