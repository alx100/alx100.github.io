// Closure
var digit_name = (function() {
  
  var names = ['zero','one','two',
  'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine'];

  return function(n) {
    return names[n];
  };

}());

alert(digit_name(3)); //three


// Functional Inheritance
function gizmo(id) {
  return {
    id: id,
    toString: function () {
      return "gizmo " + this.id;
    }
  };
};

function hoozit(id) {
  var that = gizmo(id);
  that.test = function (testid) {
    return testid === this.id;
  };
  return that;
};