'use strict';

// Sets up lettering.js on the header title space
(function($) {
  $(document).ready(function() {
    $('.dao-banner-text-intro').lettering();
    $('.btn-cta-kerning').lettering();
    $('.btn-getstarted-cta-kerning').lettering();
  });
    $('#carousel-signup').carousel({
      interval: false
    });
    $('#signup-form').submit(function(e){
      $('#carousel-signup').carousel(2);

      $.ajax(s)
      $.post('http://DaoCloud.us10.list-manage.com/subscribe/post',
             $('#signup-form').serialize(), function(res){
               console.dir(res);
               $('#carousel-signup').carousel(2);
             })
      return false;
    });
    $('.signup-bg').height($(document).height() - 300);
    $('.item').height($(document).height() - 400);
})(jQuery);
