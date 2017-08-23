$(document).ready(function(){

  $('section.hidden').css("animation", "none");

  function show(el){
    $(el).removeClass('hidden').css('z-index', '5')
  };

  function hideElement(el){
    $(el).addClass('hidden').css('z-index', '2')
  };

  function toggleSection(section){
    $('.menu li').removeClass('active');
    $(section + "-btn").addClass('active');
    hideElement('section');
    show(section);
  }

  //show content
  $('.titre button').click(function(){
    $('.titre').addClass('fadeoutTop');
    setTimeout(()=>{
      show('.menu');
      show('#aboutme');
    }, 500);
    setTimeout(()=>{
      $('.titre').css('display', 'none')
    }, 1500);

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

  //theme change
  $('.bg-picker-btn').click(function(){
    var img = $(this).text()
    $('.bg-picker-btn').removeClass('active');
    $(this).addClass('active');
    $('.header-bg').addClass('hidden');
    $('#header-bg' + img).removeClass('hidden')
    if (img == 1){
      $('.titre button').removeClass('is-warning').removeClass('is-info').addClass('is-primary');
      $('.theme').removeClass('has-text-warning').removeClass('has-text-info').addClass('has-text-primary');
    } else if (img == 2){
      $('.titre button').removeClass('is-primary').removeClass('is-warning').addClass('is-info');
      $('.theme').removeClass('has-text-primary').removeClass('has-text-warning').addClass('has-text-info');
    } else {
      $('.titre button').removeClass('is-primary').removeClass('is-info').addClass('is-warning');
      $('.theme').removeClass('has-text-primary').removeClass('has-text-info').addClass('has-text-warning');
    }
  })
})
