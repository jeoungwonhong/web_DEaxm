$(function(){
    //네비게이션 셋팅
    $('.gnb').hover(function(){
        $('.lnb').slideToggle();
    });

    //슬라이드
    setInterval(mySlide,3000);

    function mySlide(){
        $('.slide').animate({
            'left' : '-1200px'
        }, 500, function(){
            $('.slide img:first-child').clone().appendTo('.slide');
            $('.slide img:first-child').remove();
            $('.slide').css('left',0);
        })
    }
});