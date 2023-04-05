$(function(){
    //네비게이션 셋팅
    $('.fi').hover(function(){
        $(this).find($('.lnb_1').fadeToggle());
    });
    $('.se').hover(function(){
        $(this).find($('.lnb_2').fadeToggle());
    });
    $('.th').hover(function(){
        $(this).find($('.lnb_3').fadeToggle());
    });
    $('.fo').hover(function(){
        $(this).find($('.lnb_4').fadeToggle());
    });

    //이미지 fadein/out

     $(".fadeIn").children("img:gt(0)").hide();
        var current = 0;

        setInterval(myFade,3000);

        function myFade(){
            var next = (current +1) % 3;
            $(".fadeIn").find("img").eq(current).fadeOut();
            $(".fadeIn").find("img").eq(next).fadeIn();
            current = next;

            console.log(current);
            console.log(next);
        };
});