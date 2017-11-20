const Grid = () => {
  
  var $grid = $('.grid').packery({
    itemSelector: '.grid-item'
  });

  $grid.imagesLoaded().progress( function() {
    $grid.packery();
  });

};

export default Grid;