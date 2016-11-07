// Tell jQuery to give up the dollar sign
$.noConflict();
// Instead, use a self-invoking function to have a private
// dollar sign
(function($){
  $(document).ready(
    function() {
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
    }
  );

  // Need to add/remove text-sizing classes
  // Need also to add HTML elements to handle
  // click events to fire the textSize()
  // function, which should probably be here
  // in the ready event, too.

})(jQuery);

// Function to adjust text sizes
var i;
function textSize(n) {
  var sizes = ['smallest', 'smaller', 'normal', 'larger', 'largest'];
  if (typeof(i) === 'undefined') {
    i = 2; // start with 'normal'
  }
  i = i + n; // increase or decrease
  if (i >= sizes.length) {
    i = sizes.length - 1; // stay within the array's values
  } else if (i < 0) {
    i = 0; // stay within the array's values
  }
  console.log(i);
  return sizes[i];
}
