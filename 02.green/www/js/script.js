$(function(){
    $('.gnb>li').hover(function(){
        $('.lnb').stop().slideToggle();
        $('.lnbbox').stop().slideToggle();
    })
})

/* 슬라이드 */
setInterval(mySlide,3000);

    function mySlide(){
        $('.slideIn').animate({
            'left' : '-1200px'
        }, 500, function(){
            $('.slideIn img:first-child').clone().appendTo('.slideIn');
            $('.slideIn img:first-child').remove();
            $('.slideIn').css('left',0);
        })
    }

/* 패밀리 사이트 */
$(function(){
    $('.btn').click(function(){
        $('.site_btn').stop().slideToggle();
    })
})