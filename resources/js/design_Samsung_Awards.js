$(function () {
    $('.content a').click(function (e) {// .content 후손 a태그는 발동하지 않음
        e.preventDefault();
    });

    // 검색 슬라이드 기능
    $("#sc").click(function () {
        if ($(".search").css("visibility") == "hidden") {
            $(".search").css("visibility", "visible");
            $(".widget").css("visibility", "hidden");
            $("#sc").css("visibility", "hidden");
            $("#img").hover(function () {
                $("#img").css("transform", "scale(1.0)");
            });
            $('body').css({ overflow: "hidden", scroll: "no" });
            $("#search_input").focus();
            $("#veil").css("display", "block");
        }
    });

    $(".content").click(function () {
        if ($(".search").css("visibility") == "visible") {
            $(".search").css("visibility", "hidden");
            $(".widget").css("visibility", "visible");
            $("#sc").css("visibility", "visible");
            $('body').css({ overflow: "scroll", scroll: "yes" });
            $("#veil").css("display", "none");
        }
    });

    // 언어 메뉴
    $("#lang2 li").click(function () {
        $(this).parent().children().each(function () {
            $(this).children().css("color", "#A0A0A0").css("border-bottom", "0px");
            $(this).children().attr("id", "off");
        });
        $(this).children().css("color", "black").css("border-bottom", "2px solid black");
        $(this).children().attr("id", "on");
    });

    //사이드 메뉴 숨김 버튼 활성화
    $(".award_Menu").hover(function () {
        $(".btn1,.btn1_hide").mouseenter(function () {
            $(".btn1").css("background", "url(resources/image/nav_1_on.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_off.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_off.png) no-repeat");
        });
        $(".btn2,.btn2_hide").mouseenter(function () {
            $(".btn1").css("background", "url(resources/image/nav_1_off.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_on.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_off.png) no-repeat");
        });
        $(".btn3,.btn3_hide").mouseenter(function () {
            $(".btn1").css("background", "url(resources/image/nav_1_off.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_off.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_on.png) no-repeat");
        });
    }, function () {
        if (($(".btn1_hide").css("display") == "none") && ($(".btn2_hide").css("display") == "none") && ($(".btn3_hide").css("display") == "none")) {
            $(".btn1").css("background", "url(resources/image/nav_1_normal.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_normal.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_normal.png) no-repeat");
        }
    });

    // 동작 중 클릭 시 멈춤
    function $stop1() {
        $(".large_thumbs>li").each(function () {
            $(this).children().css("display", "none");
        });
    }

    // 사이드 메뉴 버튼 기능 활성화
    $(".btn1_hide>li").click(function () {
        $stop1();
        $(this).parent().children().each(function () {
            $(this).children().css("background", `url(resources/image/nav_year_${$(this).index()}.png) no-repeat`);
            $(this).children().attr("id", "off");
        });
        $(this).children().css("background", `url(resources/image/nav_year_${$(this).index()}_on.png) no-repeat`);
        $(this).children().attr("id", "on");
    });

    $(".btn2_hide>li").click(function () {
        $stop1();
        $(".btn3_hide>li").each(function () {
            if ($(this).children().attr("class") == "on") {
                $(this).children().removeClass("on");
            }
            $(this).children().css("background", `url(resources/image/nav_3_${$(this).index() + 1}.png) no-repeat`);
        });
        if ($(this).children().attr("class") == "on") {
            $(this).children().css("background", `url(resources/image/nav_2_${$(this).index() + 1}.png) no-repeat`);
            $(this).children().removeClass("on");
        } else {
            $(this).children().css("background", `url(resources/image/nav_2_${$(this).index() + 1}_on.png) no-repeat`);
            $(this).children().addClass("on");
        }
        let i = [];
        $(".btn2_hide>li").each(function (index, el) {
            if ($(el).children().attr("class") == "on") {
                i += index;
            }
        });
        $(".thumb").each(function () {
            if (i.length == 0) {
                $(".thumb").each(function () {
                    $(this).css("opacity", "1");
                });
                return;
            }
            $(this).css("opacity", "0.2");
            for (let j = 0; j < i.length; j++) {
                $(`.2_${i[j]}`).css("opacity", "1");
            }
        });
    });

    $(".btn3_hide>li").click(function () {
        $stop1();
        $(".btn2_hide>li").each(function () {
            if ($(this).children().attr("class") == "on") {
                $(this).children().removeClass("on");
            }
            $(this).children().css("background", `url(resources/image/nav_2_${$(this).index() + 1}.png) no-repeat`);
        });
        if ($(this).children().attr("class") == "on") {
            $(this).children().css("background", `url(resources/image/nav_3_${$(this).index() + 1}.png) no-repeat`);
            $(this).children().removeClass("on");
        } else {
            $(this).children().css("background", `url(resources/image/nav_3_${$(this).index() + 1}_on.png) no-repeat`);
            $(this).children().addClass("on");
        }
        let i = [];
        $(".btn3_hide>li").each(function (index, el) {
            if ($(el).children().attr("class") == "on") {
                i += index;
            }
        });
        $(".thumb").each(function () {
            if (i.length == 0) {
                $(".thumb").each(function () {
                    $(this).css("opacity", "1");
                });
                return;
            }
            $(this).css("opacity", "0.1");
            for (let j = 0; j < i.length; j++) {
                $(`.3_${i[j]}`).css("opacity", "1");
            }
        });
    });

    // 컨텐츠 클릭 시 큰 이미지 슬라이드 기능
    $(".thumb").click(function () {
        let $index = $(this).parent().parents("li").index();
        $(".large_thumbs>li").each(function (index, el) {
            $(el).children().css("display", "none");
            if ($index == index) {
                if ($(this).children().attr("class") != "l_thumb_last" && $(this).children().attr("class") != "l_thumb_last_2") {
                    $(`.${$(this).children().attr("class")}`).each(function (index, el) {
                        let move = 204 * index - 42;
                        $(el).css("left", move);
                    });
                } else {
                    $(".l_thumb_last").each(function (index, el) {
                        let move = 96 * index - 47;
                        $(el).css("top", move);
                    });
                }
                $(el).children().children().css("display", "none");
                $(el).children().show("slide", { direction: "left" }, 250);
                $(el).children().children().fadeIn(1000);
            }
        });
    });
    $(".large_thumbs a").click(function () {
        $(this).parent().css("display", "none");
    });

    // 사이드 이미지 자동 슬라이드 기능
    let i = 1;
    setInterval(function () {
        if (i == 0) {
            $(".image>img").eq(4).animate({ opacity: "0" }, 2000);
        } else {
            $(".image>img").eq(0).animate({ opacity: "0" }, 2000);
            $(".image>img").eq(i - 1).animate({ opacity: "0" }, 2000);
        }
        $(".image>img").eq(i).animate({ opacity: "1" }, 2000);
        i++;
        if (i == 5) {
            i = 0;
        }
    }, 9000);
});