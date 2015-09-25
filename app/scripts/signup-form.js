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
