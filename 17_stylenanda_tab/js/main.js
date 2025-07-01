$(function(){
    $(".list2").hide();
    $(".tab li").click(function(){
        $(".tab li").removeClass("on")
        $(this).addClass("on")
        let num = $(this).index();
        console.log(num);
        $(".list").hide();
        $(".list").eq(num).show();
    })
})