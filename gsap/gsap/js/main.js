// 스크롤트리거를 GSAP과 연동
gsap.registerPlugin(ScrollTrigger);

$(function(){
    // 애니메이션할 요소를 선택
    // 스크롤바 위치와 요소의 위치를 정해주기
    gsap.timeline({
        // 스크롤바 위치에 따른 애니메이션 설정
        scrollTrigger:{
            // 애니메이션을 부드럽게 처리하는 명령
            scrub: 3,
            // 애니메이션 요소(대상)선택
            trigger: ".sec2 ul",
            // 애니메이션 시작부분 설정: "요소의 위치, 브라우저기준 스크롤바 위치"
            start: "20% 50%",
            // 애니메이션 끝부분 설정
            end: "100% 90%",
            // markers: true,
        },
    })
    // .to("선택자", {}, 지연시간)
    .to(".sec2 ul li:nth-child(1)",{y:-300, duration: 1, ease: "ease-in-out"},0.5)
    .to(".sec2 ul li:nth-child(2)",{y:-300, duration: 1, ease: "ease-in-out"},0.7)
    .to(".sec2 ul li:nth-child(3)",{y:-300, duration: 1, ease: "ease-in-out"},0.9)
    .to(".sec2 ul li:nth-child(4)",{y:-300, duration: 1, ease: "ease-in-out"},1)


    // 애니메이션 설정
    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: ".sec4",
            start: "10% 20%",
            end: "50% 50%",
            // markers: true,
        },
    })
    // .fromTo("선택자",{},{},지연시간)
    .fromTo(".sec4 ul li:nth-child(1)",{y: 600},{y: 0}, 1)
    .fromTo(".sec4 ul li:nth-child(2)",{y: 600},{y: 0}, 1.5)
    .fromTo(".sec4 ul li:nth-child(3)",{y: 600},{y: 0}, 2)
    .fromTo(".sec4 ul li:nth-child(4)",{y: 600},{y: 0}, 2.5)
    .fromTo(".sec4 ul li:nth-child(5)",{y: 600},{y: 0}, 3)
    .fromTo(".sec4 ul li:nth-child(6)",{y: 600},{y: 0}, 3.5)
    .fromTo(".sec4 ul li:nth-child(7)",{y: 600},{y: 0}, 4)


    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: ".sec3",
            start: "0% 60%",
            end: "60% 60%",
            markers: true
        },
    })

    .fromTo(".sec3 h2", {x: -1200}, {x: 0}, 1)
})