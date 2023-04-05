$(function(){
    /*
    $('nav').hover(function(){
        $(this).find('.lnb').slideToggle();
    });
    $('.lnb-s').hover(function(){
        let i = $(this).index();
        // console.log(i);
        $('.gnb>li').eq(i).toggleClass('act');
    });
    */
   $('.gnb>li').hover(function(){
    $('.lnb').stop().slideToggle();
   })

   setInterval(sildeInOut,3000);

   $('.popup-open').click(function(e){
    e.preventDefault();
    $('.popup').fadeIn(500);
   });
   $('.close').click(function(e){
    e.preventDefault();
    $('.popup').fadeOut(500);
   });

   $('.family').change(function(){
    const site = $(this).val();
    location.href = site;
   })

});

function sildeInOut() {
    $('.slidein').animate({
        'left' : '-1200px'
    }, 500, function(){
        $('.slidein img:eq(0)').close().appendTo('.slidein');
        $('.slidein img:eq(0)').remove();
        $('.slidein').css('left', 0);
    })
}