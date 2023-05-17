/*전체 카테고리 드롭다운*/

$(function () {
    $("#all_click").click(function () {
    
        if ($("#up1").css("display") == "none") {
            $("#up1").show()
            $("#down1").hide()
            $(".nav_slide").stop().slideDown()
        }

        else {
            $("#up1").hide()
            $("#down1").show()
            $(".nav_slide").stop().slideUp()
        }
    })

    $(".nav_slide > span").click(function(){
        $("#up1").hide()
        $("#down1").show()
        $(".nav_slide").stop().slideUp(); 
    })
});