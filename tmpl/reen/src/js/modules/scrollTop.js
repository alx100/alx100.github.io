const ScrollTop = () => {
  $(window).scroll(function () {
    if (jQuery(this).scrollTop() > 500) {
      jQuery('#back-top span').fadeIn();
    } else {
      jQuery('#back-top span').fadeOut();
    }
  });
  $('#back-top span').click(function () {
    $('body,html').stop(false, false).animate({
      scrollTop: 0
    }, 500);
    return false;
  });
};

export default ScrollTop;