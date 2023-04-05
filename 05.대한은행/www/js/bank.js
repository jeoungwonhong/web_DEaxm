$(function(){
    $('.gnb>li').hover(function(){
        $('ul.lnb').stop().slideToggle();
    })
});

setInterval(sideImg, 3000)
function sideImg(){
    $('.slidein').anmiate({
        'left' : '-1200px'
    }, 500, function(){
        $('.slidein .imgbox:eq(0)').clone().appendTo('.slidein');
        $('.slidein .imgbox:eq(0)').remove();
        $('.slidein').css('left',0);
    })
}