$(function(){

    function prev2(){
        $(".left_side > li:first-child").appendTo(".left_side");
    }

    function next2(){
        $(".left_side > li:last-child").prependTo(".left_side");
    }

    $(".main_banner_prev").click(function(){
        prev2(); 
    })

    $(".main_banner_next").click(function(){
        next2(); 
    })

})