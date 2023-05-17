
/* 마이 페이지 */
$(function(){
    $(".mypage").mouseover(function(){
        $(".mypage_list").stop().slideDown(); 
    }).mouseout(function(){
        $(".mypage_list").stop().slideUp()
    });
});

/* language */
$(function(){
    $(".language").mouseover(function(){
        $(".language_list").stop().slideDown(); 
    }).mouseout(function(){
        $(".language_list").stop().slideUp()
    });
});