// Tell jQuery to give up the dollar sign
$.noConflict();
// Instead, use a self-invoking function to have a private
// dollar sign
(function($){
  var i;
  $(document).ready(
    function() {
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
      $('#header').append('<ul id="textsizer">\n<li><a id="smaller" href="#null">Smaller</a></li>\n<li><a id="bigger" href="#null">Bigger</a></li>\n</ul>');

      $('#smaller').on('click', function(e) {
        $('html').removeClass(textSize(0)).addClass(textSize(-1));
        e.preventDefault();
      });
      $('#bigger').on('click', function(e) {
        $('html').removeClass(textSize(0)).addClass(textSize(1));
        e.preventDefault();
      });

// Example for opening external links in new windows.
// NEVER DO THIS.
    /*
      $('a[href^=http]').on('click', function(e) {
        window.open(this.href);
        e.preventDefault();
      });
    */

    }
  );
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
})(jQuery);
