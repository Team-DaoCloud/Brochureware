'use strict';
// Fun little JS thingys for daocloud
// If it's more than 15-20 lines, break it into a separate file please!


// Sets up lettering.js span targets
(function($) {
  $('.dao-banner-text-intro').lettering();
  $('.btn-cta-kerning').lettering();
  $('.btn-getstarted-cta-kerning').lettering();
  $('.btn-different-cta-kerning').lettering();
})(jQuery);


// Instantiate modals
(function($) {
  // Opens the watch video container on DaoCloud's homepage
  $('#toggle-video').click(function(){
    $('#watch-video').modal('toggle');
  });

  // Opens the schedule demo modal on Daocloud's pro page
  $('#toggle-demo').click(function(){
    $('#schedule-demo').modal('toggle');
  });
})(jQuery);


// Bootstrap has a bug where the tab functionality wont fully work
// I have to manually remove active classes on the terms page tabs
// Tabs are instantiated via HTML 
(function($) {
  $('#term-tabs > li > a.protermslink').on('click', function(){
    $('#memberterms').removeClass('in active');
  });

  $('#term-tabs > li > a.membertermslink').on('click', function(){
    $('#proterms').removeClass('in active');
  });
})(jQuery);


// Waypoints on the home
(function($) {
  // Perform check to make sure this script only runs on the homepage
  // This eliminates an error where the Waypoint object become undefined outside of homepage
  var linkCheck = $("meta[property='og:url']").attr("content");
  if (linkCheck === "https://www.daocloud.com/welcome/") {
    $('.dao-geopro').hide();
    $('.dao-geopro-button').hide();
    var waypoint = new Waypoint({
      element: document.getElementById('dao-geopro-heading'),
      handler: function(direction) {
        $('.dao-geopro').fadeIn(1000);
        $('.dao-geopro-button').fadeIn(1000);
      },
      offset: '50%'
    })
  }
})(jQuery);


// Gives us the current year, print in footer
(function($) {
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  $('.current-year').append(currentYear);
})(jQuery);


// Switches visibility on subhead text for 4-up explore section on homepage
(function($) {
  $('.dao-explore-unit-1').hover(function() {
    $('.dao-explore-unit-1-content').fadeIn('linear');
  });
  $('.dao-explore-unit-2').hover(function() {
    $('.dao-explore-unit-2-content').fadeIn('linear');
  });
  $('.dao-explore-unit-3').hover(function() {
    $('.dao-explore-unit-3-content').fadeIn('linear');
  });
  $('.dao-explore-unit-4').hover(function() {
    $('.dao-explore-unit-4-content').fadeIn('linear');
  });
})(jQuery);


// This function sets up a cookie for InfusionSoft Affiliate tracking that lasts 30 days
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString() + ';';
  var path = 'path=/';
  document.cookie = cname + '=' + cvalue + '; ' + expires + path;
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
  function readCookie(name,c,C,i){
    c = document.cookie.split('; ');
    var cookies = {};
    for(i=c.length-1; i>=0; i--){
      C = c[i].split('=');
      cookies[C[0]] = C[1];
    }
    return cookies[name];
  }

  $(document).ready(function(){
    var infusionAff = getUrlParameter('p');
    if(infusionAff) {
      var IS_cookie = readCookie('infusion_referrer');
      if(!IS_cookie) setCookie('infusion_referrer', infusionAff, 30);
    }
    if(location.hash.slice(1).length > 0) {
      setCookie('dao_ref', location.hash.slice(1), 1);
    }
  });
})(jQuery);
