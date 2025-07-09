$(function(){
    // 속성값을 가져올 때
    // 1. attr() -> $(선택자).attr("속성명")

    // 속성값을 변경할 때
    // 2. attr() -> $(선택자).attr("속성명,"바꿀값")

    // find() -> 특정요소를 기본으로 하위(자식,자손)요소를 선택할 때 사용
    // $("선택자").find("선택자")

    // li a에 마우스를 hover했을 때
    $(".box ul li").mouseenter(function(){
        let num = $(this).index();
        console.log(num);
        let url = $(this).find("img").attr("src");
        console.log(url);

        // url을 .big박스에 넣어주기
        $(".box .big img").attr({"src":url})
    })
})