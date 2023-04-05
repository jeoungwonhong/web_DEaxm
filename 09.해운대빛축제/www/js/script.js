$(function(){

    for(let i = 0; i < 4; i++){
        $('.gnb>li').eq(i).hover(function(){
        $('.dn').eq(i).stop().slideToggle();
    });
    }

    /* 슬라이드 */
    setInterval(fadeInOut,3000)
    function fadeInOut(){
    $('.fadeIn img:eq(0)')
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo('.fadeIn');
    }

    /* TAB */
    $('ul.tab a').click(function(e){
        e.preventDefault();
        $('ul.tab a').removeClass('active');
        $(this).addClass('active');
        $('.tab-content>div').removeClass('active');
        $(this).addClass('active');
    });
});
