"use strict";!function(o){o("#carousel-signup").carousel({interval:!1}),o("#signup-form").submit(function(){return o.ajax({url:"https://DaoCloud.us10.list-manage.com/subscribe/post-json?u=69306ec03132e1e4026684c81&id=66656777a9&id=60a8626400&c=?",type:"GET",data:o("#signup-form").serialize(),dataType:"jsonp",contentType:"application/json; charset=utf-8",success:function(t){console.dir(t),"error"!==t.result?o("#carousel-signup").carousel(2):o("#form-errors").text("Sorry but something went wrong when you submitted your email to our waiting list. You can try again but if you continue to have problems, just email us at team@daocloud.com and we'll manually add you. Thanks.")}}),!1})}(jQuery);