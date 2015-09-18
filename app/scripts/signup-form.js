'use strict';

// Function to get mailchimp sign-up working for /signup page
$(document).ready(function() {
   $('#carousel-signup').carousel({interval: false});

   $('#signup-form').submit(function(){
     $.ajax({
       url: 'http://DaoCloud.us10.list-manage.com/subscribe/post-json?u=69306ec03132e1e4026684c81&id=66656777a9&c=?',
       type: 'GET',
       data: $('#signup-form').serialize(),
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       success: function (res){
         console.dir(res);
         if(res.result !== 'error'){
           $('#carousel-signup').carousel(2);
         }
         else {
           if(res.msg) {
             if(res.msg[0] === '0') {
               $('#form-email').addClass('has-error');
               $('#form-errors').text(res.msg.substring(4));
             }
             else {
               $('#signup-form').addClass('has-error');
               $('#form-errors').text(res.msg);
             }
           }
         }
       }
     });
     return false;
   });

   $('#signup-form input').keypress(function(){
     $('#signup-form').removeClass('has-error');
     $('#form-email').removeClass('has-error');
   });
   $('.item').css('min-height', function(){
     return $(document).height() - 400;
   });
});
