const Animations = () => {
   
  // new WOW().init();

  var wow = new WOW(
    {
      boxClass:     'wow',      
      animateClass: 'animated', 
      mobile:       false,      
      live:         true,      
      scrollContainer: null 
    }
  );
  wow.init();

};

export default Animations;