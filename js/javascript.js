$(function () {
    // 아이콘 유튜브 hover
    $(".i_youtube").mouseenter(function () {
        $(".i_youtube").attr("src", "images/icon1_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".i_youtube").mouseleave(function () {
        $(".i_youtube").attr("src", "images/icon1.png");//변경될 이미지 주소를 넣어주세요
    });

    // 아이콘 인스타그램 hover
    $(".i_insta").mouseenter(function () {
        $(".i_insta").attr("src", "images/icon2_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".i_insta").mouseleave(function () {
        $(".i_insta").attr("src", "images/icon2.png");//변경될 이미지 주소를 넣어주세요
    });

    // 아이콘 카카오톡 hover
    $(".i_kakao").mouseenter(function () {
        $(".i_kakao").attr("src", "images/icon3_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".i_kakao").mouseleave(function () {
        $(".i_kakao").attr("src", "images/icon3.png");//변경될 이미지 주소를 넣어주세요
    });

    // sub_menu
    $(".gnb>li").mouseover(function () {
        $(".sub_menu").stop().slideDown();
        //stop을 넣어야지 슬라이드다운되는 도중에 li에서 마우스가 나가도 동작을 취소하고 바로 다음 동작을 할 수 있다.
        $(".sub_bg1").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $(".sub_menu").stop().slideUp();//1000 = 1초
        $(".sub_bg1").stop().fadeOut();
    });


    // 알맞은것들 이미지 hover
    $(".main_p1_img").mouseenter(function () {
        $(".main_p1_img").attr("src", "images/mb1_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".main_p1_img").mouseleave(function () {
        $(".main_p1_img").attr("src", "images/mainbanner_1.png");//변경될 이미지 주소를 넣어주세요
    });

    // 우주귀지 이미지 hover
    $(".main_p2_img").mouseenter(function () {
        $(".main_p2_img").attr("src", "images/mb2_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".main_p2_img").mouseleave(function () {
        $(".main_p2_img").attr("src", "images/mainbanner_2.png");//변경될 이미지 주소를 넣어주세요
    });

    // 젬순이 이미지 hover
    $(".main_p3_img").mouseenter(function () {
        $(".main_p3_img").attr("src", "images/mb3_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".main_p3_img").mouseleave(function () {
        $(".main_p3_img").attr("src", "images/mainbanner_3.png");//변경될 이미지 주소를 넣어주세요
    });

    // 삐리릭 이미지 hover
    $(".main_p4_img").mouseenter(function () {
        $(".main_p4_img").attr("src", "images/mb4_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".main_p4_img").mouseleave(function () {
        $(".main_p4_img").attr("src", "images/mainbanner_4.png");//변경될 이미지 주소를 넣어주세요
    });

    // 현재전시 스와이퍼
    var swiper = new Swiper(".con1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 55,
            stretch: 0,
            depth: 140,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
    });



    //드로잉 체험안내 hover
    $(".drawing_1_img").mouseenter(function () {
        $(".drawing_1_img").attr("src", "images/announcement_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".drawing_1_img").mouseleave(function () {
        $(".drawing_1_img").attr("src", "images/announcement.png");//변경될 이미지 주소를 넣어주세요
    });
    // 드로잉 체험예약 hover
    $(".drawing_2_img").mouseenter(function () {
        $(".drawing_2_img").attr("src", "images/reservation_h.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".drawing_2_img").mouseleave(function () {
        $(".drawing_2_img").attr("src", "images/reservation.png");//변경될 이미지 주소를 넣어주세요
    });


    // 모달팝업1
    $(".poster1 a").click(function () {
        $(".popup1").fadeIn();
    });//poster a를 클릭했을 때
    $(".close").click(function () {
        $(".popup1").fadeOut();
    });//close를 클릭했을 때
    // 모달팝업2
    $(".poster2 a").click(function () {
        $(".popup2").fadeIn();
    });//poster a를 클릭했을 때
    $(".close").click(function () {
        $(".popup2").fadeOut();
    });//close를 클릭했을 때
    // 모달팝업3
    $(".poster3 a").click(function () {
        $(".popup3").fadeIn();
    });//poster a를 클릭했을 때
    $(".close").click(function () {
        $(".popup3").fadeOut();
    });//close를 클릭했을 때
    // 모달팝업4
    $(".poster4 a").click(function () {
        $(".popup4").fadeIn();
    });//poster a를 클릭했을 때
    $(".close").click(function () {
        $(".popup4").fadeOut();
    });//close를 클릭했을 때
    // 모달팝업5
    $(".poster5 a").click(function () {
        $(".popup5").fadeIn();
    });//poster a를 클릭했을 때
    $(".close").click(function () {
        $(".popup5").fadeOut();
    });//close를 클릭했을 때


    // sub3 체험안내
    var swiper = new Swiper(".experience_sp", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        loop: true,
    });

    // sub4 젬젬스토어 배너
    var swiper = new Swiper(".sub_banner", {
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
    });
});

// 스크롤 내려오는 효과
$(window).scroll(function () {

    // sub2
    var height = $(window).scrollTop();
    if (height > 1300) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_1').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_1').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 1600) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_2').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_2').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 1900) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_3').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_3').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 2200) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_4').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_4').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 2500) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_5').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_5').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 2800) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_6').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_6').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 2900) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.etk_box_t').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.etk_box_t').fadeOut();//나타날 아이콘 클래스 수정!
    };

    // sub5
    var height = $(window).scrollTop();
    if (height > 400) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.q_a_1').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.q_a_1').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 600) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.q_a_2').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.q_a_2').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 800) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.q_a_3').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.q_a_3').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 1000) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.q_a_4').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.q_a_4').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 1200) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.q_a_5').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.q_a_5').fadeOut();//나타날 아이콘 클래스 수정!
    };
    var height = $(window).scrollTop();
    if (height > 1400) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.q_a_6').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.q_a_6').fadeOut();//나타날 아이콘 클래스 수정!
    };

});