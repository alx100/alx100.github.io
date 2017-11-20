const Navbar = () => {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 40) {
      $('nav').addClass('navbar-fixed-top nav-shrinked');
      $('.dropdown-menu ').addClass('menu-shrinked');
      $('.banner').addClass('banner-shrinked');
      $('.navbar-top').hide();

    } else {
      $('nav').removeClass('navbar-fixed-top nav-shrinked');
      $('.dropdown-menu ').removeClass('menu-shrinked');
      $('.banner').removeClass('banner-shrinked');
      $('.navbar-top').show();
    }
  });
};


export default Navbar;


