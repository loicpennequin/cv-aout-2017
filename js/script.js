$(document).ready(function(){

  function show(el){
    $(el).removeClass('hidden')
  };

  function hide(el){
    $(el).addClass('hidden')
  };

  function toggleSection(section){
    $('.menu li').removeClass('active');
    $(this).addClass('active');
    hide('section');
    show(section);
  }

  //show content
  $('.titre button').click(function(){
    $('.titre').addClass('fadeoutTop');
    setTimeout(function(){
      show('.menu');
      show('#aboutme');
    }, 500);

  });

  //menu collapse
  $('.arrow-btn').click(function(){
    $(this).toggleClass('flipped');
    $('.menu').toggleClass('collapsed');
  });

  //navigation
  $('#aboutme-btn').click(function(){
    toggleSection('#aboutme');
  });

  $('#skills-btn').click(function(){
    toggleSection('#skills');
  });

  $('#experience-btn').click(function(){
    toggleSection('#experience');
  });

  $('#projects-btn').click(function(){
    toggleSection('#projects');
  });

  $('#misc-btn').click(function(){
    toggleSection('#misc');
  });

  //background change
  $('.bg-picker-btn').click(function(){
    var img = $(this).text()
    $('.bg-picker-btn').removeClass('active');
    $(this).addClass('active');
    $('header').css("background-image", "linear-gradient(black, rgba(0,0,0,0), black),  url('assets/header" + img + ".jpg')");
    $('header').css("background-position", "center")
    if (img == 1){
      $('.titre button').removeClass('is-warning');
      $('.titre button').removeClass('is-info');
      $('.titre button').addClass('is-primary');
    } else if (img == 2){
      $('.titre button').removeClass('is-primary');
      $('.titre button').removeClass('is-warning');
      $('.titre button').addClass('is-info');
    } else {
      $('.titre button').removeClass('is-primary');
      $('.titre button').removeClass('is-info');
      $('.titre button').addClass('is-warning');
    }
  })
})
