$(function(){
    // product2숨기기
    $(".product_wrap .product2").hide();
    // li를 클릭하면
    $(".tab li").click(function(){
        $(".tab li").removeClass("on");
        $(this).addClass("on");
        // 몇번째 li를 클릭했는지 클릭한 선택자(this)를 .index()로 알아낸걸 변수에 담기
        let num = $(this).index();
        console.log(num);
        // tab 코드
        $(".product_wrap .product").hide();
        $(".product_wrap .product").eq(num).show();
    })
})