'use strict';

// Function to get mailchimp sign-up working for /signup page
$(document).ready(function() {
   $('#carousel-signup').carousel({interval: false});

   // Function to get mailchimp sign-up working for /signup page
   (function($) {
      $('#carousel-signup').carousel({interval: false});

      $('#signup-form').on( "submit", function() {
        // Step 1a - get submission response and serialize into an array
        var formDataSerialized = $('#signup-form :input').serializeArray();
        console.log(formDataSerialized);

        // Step 1b - get name value data into an array we can use
        var mailchimpFullName = (formDataSerialized[0].value).split(' ');
        var mailchimpEmail = formDataSerialized[1].value;
        var mailchimpAPIKey = '18267233ebf8a5c58f2be52d0b6278d2-us10';
        var mailchimpNewSubList = '60a8626400';
        var mailchimpJSON = {};

        // Step 1c - Put everything into a JSON array (this is what Mailchimp wants)
        var mailchimpJSON = [
          {
            "apikey": mailchimpAPIKEY,
            "email_address": mailchimpEmail,
            "status": "subscribed",
            "merge_fields":
             {
                 "FNAME": mailchimpFullName[0],
                 "LNAME": mailchimpFullName[1]
               }
          }
        ];

        // formData.preventDefault();

        // Step 2 - Transact new subscriber over to mailchimp
        $.ajax({
          url: 'https://DaoCloud.us10.api.mailchimp.com/3.0/lists/' + mailchimpNewSubList,
          type: 'POST',
          data: mailchimpJSON,
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", mailchimpAPIKey);
          },
          success: function (res) {
            console.log(res);
            $('#carousel-signup').carousel(2);
          },
          error: function() {
            $('#form-email').addClass('has-error');
            $('#form-errors').text('There was an error registering you on our waiting list. You can try again, but if the error persists email team@daocloud.com and we\'ll add you manually.');
          }
        });
        return false;
       });
   })(jQuery);
});
