$(document).ready(function(){


  $('.titre button').click(function(){
    $('.titre').addClass('fadeoutTop');
    setTimeout(function(){
      $('.menu').removeClass('hidden');
    }, 500);
  });

  $('.arrow-btn').click(function(){
    $(this).toggleClass('flipped');
    $('.menu').toggleClass('collapsed');
  });

  $('.menu li').click(function(){
    $('.menu li').removeClass('active');
    $(this).addClass('active');
  })
})
