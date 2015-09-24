'use strict';

// Method 1 - Andrej's Original Submission Method
// Based off of http://stackoverflow.com/questions/8425701/ajax-mailchimp-signup-form-integration/15120409
(function($) {
   $('#carousel-signup').carousel({interval: false});

   $('#signup-form').submit(function(){
     $.ajax({
       url: 'https://DaoCloud.us10.list-manage.com/subscribe/post-json?u=69306ec03132e1e4026684c81&id=66656777a9&id=60a8626400&c=?',
       type: 'GET',
       data: $('#signup-form').serialize(),
       dataType: 'jsonp',
       contentType: 'application/json; charset=utf-8',
       success: function(res){
         console.dir(res);
         if(res.result !== 'error'){
           $('#carousel-signup').carousel(2);
         }
         else {
          $('#form-errors').text("Sorry but something went wrong when you submitted your email to our waiting list. You can try again but if you continue to have problems, just email us at team@daocloud.com and we'll manually add you. Thanks.");
         }
       }
     });
     return false;
   });
})(jQuery);

// Method 2
// Using jquery plugin ajaxchimp
// See more here: https://github.com/scdoshi/jquery-ajaxchimp
(function($) {
   $('#carousel-signup').carousel({interval: false});

    $('#signup-form').ajaxChimp({
      url: 'https://DaoCloud.us10.list-manage.com/subscribe/post-json?u=69306ec03132e1e4026684c81&id=66656777a9&id=60a8626400&c=?',
      callback: function(response){
        if (response.result === 'success') {
           $('#carousel-signup').carousel(2);
        }
        else {
          $('#form-errors').text("Sorry but something went wrong when you submitted your email to our waiting list. You can try again but if you continue to have problems, just email us at team@daocloud.com and we'll manually add you. Thanks.");
        }
      }
    });
})(jQuery);

// Method 3
// Using the Mailchimp v3 API to complete the transaction
// See more here:
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
