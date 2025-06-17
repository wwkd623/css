$(function(){
    $(".footer .inner .group .family1 button").click(function(){
        $(".footer .inner .group .family1 ul").toggle();
        $(".footer .inner .group .family2 ul").hide();
    })
    $(".footer .inner .group .family2 button").click(function(){
        $(".footer .inner .group .family2 ul").toggle();
        $(".footer .inner .group .family1 ul").hide();
    })
})