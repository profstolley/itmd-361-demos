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
})(jQuery);
