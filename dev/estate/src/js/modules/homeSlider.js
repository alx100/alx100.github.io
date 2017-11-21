const HomeSlider = () => {
  $('.app-slider').slick({
    fade: true,
    dots: true,
    speed: 1000,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging : function(slider, i) {
      let thumb = $(slider.$slides[i]).data();
      return '<a class="slide-number">'+(i+1)+'.</a>';
      }
  });
};

export default HomeSlider;