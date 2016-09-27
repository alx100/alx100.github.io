$(document).ready(function(){
	
	$('.menu_hamburger').click(function() {
    $('#main_menu ul').slideDown(250);
    $('.menu_hamburger').css({display: 'none'});
    $('.remove_button').css({display: 'block'});
  });
  $('.remove_button').click(function() {
    $('#main_menu ul').slideUp(250);
    $('.remove_button').css({display: 'none'});
    $('.menu_hamburger').css({display: 'block'});
 });

  $(window).resize(function(){
    var wid = $(window).width();
    if (wid < 768) $('#main_menu ul, .remove_button').css({display: 'none'}),
    $('.menu_hamburger').css({display: 'block'});
    else $('#main_menu ul').css({display: 'block'});
  });

  $('#main_menu ul').on("click","a", function (event) {
    var wid = $(window).width();
    if (wid < 768) $('#main_menu ul').slideUp(250);
      event.preventDefault();
      $('.menu_hamburger').css({display: 'block'});
      $('.remove_button').css({display: 'none'});
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });

  $('.owl-carousel').owlCarousel({
  	items:4,
    loop:true,
    margin:60,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
        	items:1,
        	dots:false,
        	nav:true,
        	navText: [
      			"<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>",
      			"<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>"
      		]  
        },
        480:{
        	items:2,
        	margin:30,
        	dots:false,
        	nav:true,
        	navText: [
      			"<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>",
      			"<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>"
      		] 
        },
        768:{
          items:3  
        },
        1000:{
          items:4
        }
    }
})
});
