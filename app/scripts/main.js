'use strict';
/* global jQuery */

// Sets up lettering.js span targets
(function($) {
  $('.dao-banner-text-intro').lettering();
  $('.btn-cta-kerning').lettering();
  $('.btn-getstarted-cta-kerning').lettering();
  $('.btn-different-cta-kerning').lettering();
})(jQuery);

// Gives us the current year
(function($) {
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  $('.current-year').append(currentYear);
})(jQuery);

// Switches visibility on subhead text for 4-up explore section on homepage
(function($) {
  $(".dao-explore-unit-1").hover(function() {
    $(".dao-explore-unit-1-content").fadeIn("linear");
  });
  $(".dao-explore-unit-2").hover(function() {
    $(".dao-explore-unit-2-content").fadeIn("linear");
  });
  $(".dao-explore-unit-3").hover(function() {
    $(".dao-explore-unit-3-content").fadeIn("linear");
  });
  $(".dao-explore-unit-4").hover(function() {
    $(".dao-explore-unit-4-content").fadeIn("linear");
  });
})(jQuery); 

// This function sets a cookie for InfusionSoft Affiliate tracking that lasts 30 days
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString()+';';
  var path = 'path=/';
  document.cookie = cname + "=" + cvalue + "; " + expires + path;
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

// This function actually sets the cookie itself
(function($) {
  $(document).ready(function(){
    var infusionAff = getUrlParameter('p');
    if(infusionAff) setCookie('infusion_referrer', infusionAff, 30);
    if(location.hash.slice(1).length > 0) setCookie('dao_ref', location.hash.slice(1), 1);
  })
})(jQuery);
