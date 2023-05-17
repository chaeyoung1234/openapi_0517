
$(function(){

    $("#slider_left").hover(function(){

    if($("#slider_left_hover").css("display")=="none"){
        $("#slider_left_hover").animate({
            width: "toggle",
            height : "toggle",
            opacity : "1"
        }, "slow"); 
    }
    }); 

    $(".hover_close1").click(function(){
        
        $("#slider_left_hover").animate({
            width : "toggle",
            height:"toggle",
            opacity :"0"
        }, "slow");
    });

    $(".hover_close2").click(function(){
        $("#slider_left_hover").animate({
            width : "toggle",
            height:"toggle",
            opacity :"0"
        }, "slow"); 

    })


}); 