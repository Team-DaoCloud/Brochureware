'use strict';

// This code populates the 'Discover Local Professionals' section of the Daocloud Landing page
// Read through the steps to understand how the functionality works
// TBD: We could simply a lot of the callback stuff into promises someday when browser support is there

(function($) {
  // Step 1
  // Setup global variables to be used by various functions
  var proDetails = [
    {
      'geoProName': 'Dr. Tracy Freeman',
      'geoProTitle': 'Integrative MD',
      'geoProLocation': 'Washington, DC',
      'geoProURL': 'https://www.daocloud.com/profile/tracy-freeman',
      'geoProImageURL': 'https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob142228714_thumbnail.'
    },
    {
      'geoProName': 'Dr. Arti Mehta',
      'geoProTitle': 'Naturopathic Doctor',
      'geoProLocation': 'Washington, DC',
      'geoProURL': 'https://www.daocloud.com/profile/arti-mehta',
      'geoProImageURL': 'https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/arti-mehta1415196346253_thumbnail.jpg'
    },
    {
      'geoProName': 'Dr. Maryjoyce Rotella',
      'geoProTitle': 'Acupuncturist , Chiropractor, Herbalist',
      'geoProLocation': 'Burtonsville, MD',
      'geoProURL': 'https://www.daocloud.com/profile/maryjoyce-rotella',
      'geoProImageURL': 'https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob141661243_thumbnail.'
    },
    {
      'geoProName': 'Aaron Wallach',
      'geoProTitle': 'Fitness professional',
      'geoProLocation': 'Chevy Chase, MD',
      'geoProURL': 'https://www.daocloud.com/profile/aaron-wallach',
      'geoProImageURL': 'https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/photo-on-10-30-14-at-3-47-pm1414698445083_thumbnail.jpg'
    }
  ];
  var proRegion = 'You';
  var index, len;

  // Step 2a
  // Put ipinfo.io API into a jQuery Ajax call
  $.ajax({
     url: 'https://ipinfo.io?token=c0ef293720c323',
     type: 'POST',
     dataType: 'jsonp',
     timeout: 3000,
     success: function(longLatRegionFromIP) {
       // Step 3a
       // If the lookup is successful, get coordinates and city from API call
       var userLocation = longLatRegionFromIP.loc;
       var userLocationSplit = userLocation.split(',');
       var userLatitude = userLocationSplit[0];
       var userLongitude = userLocationSplit[1];
       var userRegion = longLatRegionFromIP.city;

       // Step 4
       // Now we use the lat/lon we retrieved against DaoCloud's endpoint
       $.ajax({
         url: 'https://www.daocloud.com/api/v1/professional/showroom?lat=' + userLatitude + '&lng=' + userLongitude,
         type: 'GET',
         dataType: 'json',
         timeout: 3000,
         success: function(daoResponse) {
           // Step 5a
           // Check to make sure json response has four pros in it
           // We are checking within a 100 mile radius on the backend
           // If response is null, fall back to prodetails object for error handling
           if (daoResponse.length < 4) {
             // Assign section heading with userRegion
             $('.dao-geopro-city').html(proRegion);

             for (index = 0, len = 4; index < len; ++index) {
               var daoCurrentGeoPro = 'dao-geopro-' + index;
               $('.' + daoCurrentGeoPro + ' .dao-geopro-name').html(proDetails[index].geoProName);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-title').html(proDetails[index].geoProTitle);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-location').html(proDetails[index].geoProLocation);
               $('.' + daoCurrentGeoPro + ' a.dao-geopro-profilelink').attr('href', proDetails[index].geoProURL);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-image img').attr('src', proDetails[index].geoProImageURL);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-image img').attr('alt', 'The DaoCloud Profile Headshot for ' + proDetails[index].geoProName);
              }
           }
           else {
             // Assign section heading with userRegion
             $('.dao-geopro-city').html(userRegion);

             // Step 5b
             // Loop through the json object response (daoResponse) and insert pro info into HTML
             for (index = 0, len = 4; index < len; ++index) {
               var daoCurrentGeoPro = 'dao-geopro-' + index;
               $('.' + daoCurrentGeoPro + ' .dao-geopro-name').html(daoResponse[index].user.fullName);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-title').html((daoResponse[index].user.professionalTitles).join(', '));
               $('.' + daoCurrentGeoPro + ' .dao-geopro-location').html(daoResponse[index].addressSecond);
               $('.' + daoCurrentGeoPro + ' a.dao-geopro-profilelink').attr('href', 'https://www.daocloud.com/profile/' + daoResponse[index].user.permalink);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-image img').attr('src', daoResponse[index].user.profileImagePath);
               $('.' + daoCurrentGeoPro + ' .dao-geopro-image img').attr('alt', 'The DaoCloud Profile Headshot for ' + daoResponse[index].user.fullName);
             }
           }
         },
         error: function() {
         // Step 5c
         // If dao lookup fails, fall back to static proDetails object for data response
         $('.dao-geopro-city').html(proRegion);

          for (index = 0, len = 4; index < len; ++index) {
            var daoCurrentGeoPro = 'dao-geopro-' + index;
            $('.' + daoCurrentGeoPro + ' .dao-geopro-name').html(proDetails[index].geoProName);
            $('.' + daoCurrentGeoPro + ' .dao-geopro-title').html(proDetails[index].geoProTitle);
            $('.' + daoCurrentGeoPro + ' .dao-geopro-location').html(proDetails[index].geoProLocation);
            $('.' + daoCurrentGeoPro + ' a.dao-geopro-profilelink').attr('href', proDetails[index].geoProURL);
            $('.' + daoCurrentGeoPro + ' .dao-geopro-image img').attr('src', proDetails[index].geoProImageURL);
            $('.' + daoCurrentGeoPro + ' .dao-geopro-image img').attr('alt', 'The DaoCloud Profile Headshot for ' + proDetails[index].geoProName);
           }
         }
       });
     },
     error: function () {
       // Step 2b
       // If first ipinfo.io lookup fails, assign section heading with proRegion
       $('.dao-geopro-city').html(proRegion);

       // Step 2c
       // Loop through the json object (proDetails) and insert pro info into HTML
       (function() {
         for (index = 0, len = 4; index < len; ++index) {
           var daoCurrentGeoProError = 'dao-geopro-' + index;
           $('.' + daoCurrentGeoProError + ' .dao-geopro-name').html(proDetails[index].geoProName);
           $('.' + daoCurrentGeoProError + ' .dao-geopro-title').html(proDetails[index].geoProTitle);
           $('.' + daoCurrentGeoProError + ' .dao-geopro-location').html(proDetails[index].geoProLocation);
           $('.' + daoCurrentGeoProError + ' a.dao-geopro-profilelink').attr('href', proDetails[index].geoProURL);
           $('.' + daoCurrentGeoProError + ' .dao-geopro-image img').attr('src', proDetails[index].geoProImageURL);
           $('.' + daoCurrentGeoProError + ' .dao-geopro-image img').attr('alt', 'The DaoCloud Profile Headshot for ' + proDetails[index].geoProName);
         }
       })(jQuery);
     }
   });
 })(jQuery);
