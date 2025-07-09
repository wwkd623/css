$(function(){
    $("ul li").mouseenter(function(){
        let url = $(this).find("img").attr("src");
        $(".big img").attr({"src": url});
    })
})