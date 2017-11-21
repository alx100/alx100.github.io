const Loader = () => {
  let loader = $('#preloader');
  window.addEventListener('load', function() {
    $(loader).fadeOut('slow');
  });
};

export default Loader;