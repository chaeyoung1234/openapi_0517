/* 메인 슬라이더 */

$(function() {
    let i = 0;
    $(".slider_list li").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

    $(".slider_list li").mouseenter(function () {
        i = $(this).index()
    })

    function slide() {

        i++;

        if (i > $(".slider_page:last").index()) {
            i = 0;
        }
        
        $(".slider_page").eq(i).stop().fadeIn("slow");
        $(".slider_page").eq(i-1).stop().fadeOut("slow");

        if (i == 1) {
            $("#slider_top_wrap").css({"background":"#fff7d2"})
            $(".slider_list li").eq(i-1).css({color:"black", borderTop:"none"});
            $(".slider_list li").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else if (i == 2) {
            $("#slider_top_wrap").css({"background": "#ffffff"})
            $(".slider_list li").eq(i-1).css({color:"black", borderTop:"none"});
            $(".slider_list li").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else if (i == 3) {
            $("#slider_top_wrap").css({"background": "#f7cd10"})
            $(".slider_list li").eq(i-1).css({color:"black", borderTop:"none", margin: "-1px 0 0 0"});
            $(".slider_list li").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else if (i == 4) {
            $("#slider_top_wrap").css({"background": "#f5ebd9"})
            $(".slider_list li").eq(i-1).css({color:"black", borderTop:"none", margin: "-1px 0 0 0"});
            $(".slider_list li").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});

        } else {
            $("#slider_top_wrap").css({"background": "#f5ebd9"})
            $(".slider_list li").eq(i-1).css({color:"black", borderTop:"none"});
            $(".slider_list li").eq(i).css({borderTop:"3px solid red", margin: "-1px 0 0 0"});
        }
    }


    $(".slider_list li").eq(0).mouseenter(function () {
        var i = 0;

        $("#slider_top_wrap").css({"background": "#f5ebd9"});
        $(".slider_list li").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(0).stop().show();
    });

    $(".slider_list li").eq(1).mouseenter(function () {
        var i = 0;

        $("#slider_top_wrap").css({"background": "#fff7d2"});
        $(".slider_list li").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(1).stop().show();
    });

    $(".slider_list li").eq(2).mouseenter(function () {
        var i = 0;

        $("#slider_top_wrap").css({"background": "#ffffff"});
        $(".slider_list li").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(2).stop().show();
    });

    $(".slider_list li").eq(3).mouseenter(function () {
        var i = 0;

        $("#slider_top_wrap").css({"background": "#f7cd10"});
        $(".slider_list li").css({borderTop: "none"});
        $(this).css({borderTop: "3px solid red", margin:"-1px 0 0 0"});
        $(".slider_page").stop().hide();
        $(".slider_page").eq(3).stop().show();
    });



    let ani = setInterval(slide, 5000)

    $(".slider_list li").mouseover(function () {
        clearInterval(ani);
    });

    $(".slider_list li").mouseout(function () {
        $(this).css({borderTop: "3px solid red", margin: "-1px 0 0 0"});
        ani = setInterval(slide, 5000);
    });

})