$(function(){
  /*
  $('nav').hover(function(){
    $('.lnb').stop().slideToggle();
  });
  $('.lnb-s').hover(function(){
     let i = $(this).index();
     //console.log(i);
     $('.gnb>li').eq(i).toggleClass('act');
  });
  */
 $('.gnb>li').hover(function(){
    $('.lnb').stop().slideToggle();
 });
  setInterval(slideInOut, 3000);

  $('.popup-open').click(function(e){
     e.preventDefault();
     $('.popup').fadeIn(500);
  });
  $('.close').click(function(){
     $('.popup').fadeOut(500);
  });

  $('.family').change(function(){
     const site = $(this).val();
     location.href=site;
  });

});

function slideInOut(){
   $('.slidein').animate({
       'left': '-1200px'
   }, 500, function(){
      $('.slidein img:eq(0)').clone().appendTo('.slidein');
      $('.slidein img:eq(0)').remove();
      $('.slidein').css('left', 0);
   });
}