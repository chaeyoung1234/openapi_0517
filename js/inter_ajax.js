/*인터파크 추천*/

$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"자바스크립트" },
        headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
    })
        .done(function( msg ) {


            for(var i=0; i<4; i++){

                var document = msg.documents[i];

                $(".inter_imgbox").append("<img src='"+ document.thumbnail +"'/>");
                $(".inter_content").eq(i).find("p").text(document.title); 
                
                var content = document.contents.substring(0,60);
                $(".content").eq(i).find("p").text(content)


            }


        });

});