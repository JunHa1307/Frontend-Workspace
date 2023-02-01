$(function(){
    $(".award_Menu").hover(function(){
        $(".btn1,.btn1_hide").mouseenter(function(){
            $(".btn1").css("background", "url(resources/image/nav_1_on.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_off.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_off.png) no-repeat");
        });
        $(".btn2,.btn2_hide").mouseenter(function(){
            $(".btn1").css("background", "url(resources/image/nav_1_off.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_on.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_off.png) no-repeat");
        });
        $(".btn3,.btn3_hide").mouseenter(function(){
            $(".btn1").css("background", "url(resources/image/nav_1_off.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_off.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_on.png) no-repeat");
        });
    },function(){
        if(($(".btn1_hide").css("display") == "none")&&($(".btn2_hide").css("display") == "none")&&($(".btn3_hide").css("display") == "none")){
            $(".btn1").css("background", "url(resources/image/nav_1_normal.png) no-repeat");
            $(".btn2").css("background", "url(resources/image/nav_2_normal.png) no-repeat");
            $(".btn3").css("background", "url(resources/image/nav_3_normal.png) no-repeat");
        }
    });
    $(".btn1_hide>li").click(function(){
        $(this).parent().children().each(function(){
            $(this).children().css("background",`url(resources/image/nav_year_${$(this).index()}.png) no-repeat`);
            $(this).children().removeClass("on");
        });
        $(this).children().css("background",`url(resources/image/nav_year_${$(this).index()}_on.png) no-repeat`);
        $(this).children().addClass("on");
    });

    $(".btn2_hide>li").click(function(){
        if($(this).children().attr("class") == "on"){
            $(this).children().css("background",`url(resources/image/nav_2_${$(this).index() + 1}.png) no-repeat`);
            $(this).children().removeClass("on");
        }else{
            $(this).children().css("background",`url(resources/image/nav_2_${$(this).index() + 1}_on.png) no-repeat`);
            $(this).children().addClass("on");
        }
        let i = [];
        $(".btn2_hide>li").each(function(index,el){
            if($(el).children().attr("class") == "on"){
                i += index;
            }
        });
        $(".thumb").each(function(){
            if(i.length == 0){
                $(".thumb").each(function(){
                    $(this).css("opacity","1");
                });
                return;
            }
            $(this).css("opacity","0.2");
            for(let j = 0; j < i.length; j++){
                $(`.2_${i[j]}`).css("opacity","1");
            }
        });
    });

    $(".btn3_hide>li").click(function(){
        if($(this).children().attr("class") == "on"){
            $(this).children().css("background",`url(resources/image/nav_3_${$(this).index() + 1}.png) no-repeat`);
            $(this).children().removeClass("on");
        }else{
            $(this).children().css("background",`url(resources/image/nav_3_${$(this).index() + 1}_on.png) no-repeat`);
            $(this).children().addClass("on");
        }
        let i = [];
        $(".btn3_hide>li").each(function(index,el){
            if($(el).children().attr("class") == "on"){
                i += index;
            }
        });
        $(".thumb").each(function(){
            if(i.length == 0){
                $(".thumb").each(function(){
                    $(this).css("opacity","1");
                });
                return;
            }
            $(this).css("opacity","0.2");
            for(let j = 0; j < i.length; j++){
                $(`.3_${i[j]}`).css("opacity","1");
            }
        });
    });
    $(".thumb").click(function(){
        let $index = $(this).parent().parents("li").index();
        $(".large_thumbs>li").each(function(index,el){
            $(el).children().css("display","none");
            if($index == index){
                $(el).children().show("slide", { direction: "left" }, 500);
                $(el).children().children().css("display","none");
                $(el).children().children().fadeIn(1300);
            }
        });
    });
    $(".large_thumbs a").click(function(){
        $(this).parent().css("display","none");
    });
});
