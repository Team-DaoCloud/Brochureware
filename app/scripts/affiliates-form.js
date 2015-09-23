'use strict';

(function($) {
  // Step 1
  // Function to submit data to InfusionSoft
  // Note: we submit to Daocloud's node.js wrapper of the infusionSoft API
  // Params: first name, last name, email, phone, region and personType to be sent to api
  function submitForm(firstname, lastname, email, phone, region, personType) {
    $.ajax({
      type: 'POST',
      url: 'https://www.daocloud.com/api/v1/regions',
      data: { firstName: firstname, lastName: lastname, email: email, phone: phone, region: region, personType: personType }
    }).done(function(msg)
      {
        if(msg === 'OK'){
          // Clean form, then hide it
          $('.affiliate-form-container:reset');
          $('.affiliate-form-container').hide().fadeOut();

          // Confirmation message, post then fade in div with message
          $('.dao-banner-text-headline-form').replaceWith('<h2>Thanks for Applying</h2>').fadeIn();
          $('.dao-thanks').html('Thanks for your interest in the Daocloud Referral Partner Program. One of our representatives will be in touch with you in the next couple of days.').show().fadeIn();
        }
        else {
          $('.dao-error').html('Your information could not be transferred into the Daocloud Referral Partner application database. You can try to submit your application again but if you continue to have trouble just drop us a line at team@daocloud.com. Thanks!');
          $('.dao-error').show().fadeIn();
        }
      });
    }

  // Step 2
  // Grabbing variables from page and putting them into submission method
  $('.affiliate-form-container').submit(function(evt){
    // Prevents For Submission, will be called with jQuery .ajax
    evt.preventDefault();

    // Setup variables from .affiliate-form-container
    var name = $(evt.target[0]).val().split(' ');
    var firstname = name[0];
    var lastname = name[1];
    var email = $(evt.target[1]).val();
    var phone = $(evt.target[2]).val();
    var region = $(evt.target[3]).val();
    var personType = 'Affiliate Prospect';
    submitForm(firstname, lastname, email, phone, region, personType);
  });
})(jQuery);