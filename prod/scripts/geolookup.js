"use strict";!function(o){var e,a,r=[{geoProName:"Dr. Tracy Freeman",geoProTitle:"Integrative MD",geoProLocation:"Washington, DC",geoProURL:"https://www.daocloud.com/profile/tracy-freeman",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob142228714_thumbnail."},{geoProName:"Dr. Arti Mehta",geoProTitle:"Naturopathic Doctor",geoProLocation:"Washington, DC",geoProURL:"https://www.daocloud.com/profile/arti-mehta",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/arti-mehta1415196346253_thumbnail.jpg"},{geoProName:"Dr. Maryjoyce Rotella",geoProTitle:"Acupuncturist , Chiropractor, Herbalist",geoProLocation:"Burtonsville, MD",geoProURL:"https://www.daocloud.com/profile/maryjoyce-rotella",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob141661243_thumbnail."},{geoProName:"Aaron Wallach",geoProTitle:"Fitness professional",geoProLocation:"Chevy Chase, MD",geoProURL:"https://www.daocloud.com/profile/aaron-wallach",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/photo-on-10-30-14-at-3-47-pm1414698445083_thumbnail.jpg"}],t="You";o.ajax({url:"https://ipinfo.io?token=c0ef293720c323",type:"POST",dataType:"jsonp",timeout:3e3,success:function(t){var i=t.loc,l=i.split(","),p=l[0],g=l[1],m=t.city;o(".dao-geopro-city").html(m),o.ajax({url:"https://www.daocloud.com/api/v1/professional/showroom?lat="+p+"&lng="+g,type:"GET",dataType:"json",timeout:3e3,success:function(r){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].user.fullName),o("."+t+" .dao-geopro-title").html(r[e].user.professionalTitles.join(", ")),o("."+t+" .dao-geopro-location").html(r[e].addressSecond),o("."+t+" a.dao-geopro-profilelink").attr("href","https://www.daocloud.com/profile/"+r[e].user.permalink),o("."+t+" .dao-geopro-image img").attr("src",r[e].user.profileImagePath),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].user.fullName)}},error:function(){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].geoProName),o("."+t+" .dao-geopro-title").html(r[e].geoProTitle),o("."+t+" .dao-geopro-location").html(r[e].geoProLocation),o("."+t+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+t+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}}})},error:function(){o(".dao-geopro-city").html(t),function(){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].geoProName),o("."+t+" .dao-geopro-title").html(r[e].geoProTitle),o("."+t+" .dao-geopro-location").html(r[e].geoProLocation),o("."+t+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+t+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}}(jQuery)}})}(jQuery),!function(o){var e,a,r=[{geoProName:"Dr. Tracy Freeman",geoProTitle:"Integrative MD",geoProLocation:"Washington, DC",geoProURL:"https://www.daocloud.com/profile/tracy-freeman",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob142228714_thumbnail."},{geoProName:"Dr. Arti Mehta",geoProTitle:"Naturopathic Doctor",geoProLocation:"Washington, DC",geoProURL:"https://www.daocloud.com/profile/arti-mehta",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/arti-mehta1415196346253_thumbnail.jpg"},{geoProName:"Dr. Maryjoyce Rotella",geoProTitle:"Acupuncturist , Chiropractor, Herbalist",geoProLocation:"Burtonsville, MD",geoProURL:"https://www.daocloud.com/profile/maryjoyce-rotella",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob141661243_thumbnail."},{geoProName:"Aaron Wallach",geoProTitle:"Fitness professional",geoProLocation:"Chevy Chase, MD",geoProURL:"https://www.daocloud.com/profile/aaron-wallach",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/photo-on-10-30-14-at-3-47-pm1414698445083_thumbnail.jpg"}],t="You";o.ajax({url:"https://ipinfo.io?token=c0ef293720c323",type:"POST",dataType:"jsonp",timeout:3e3,success:function(t){var i=t.loc,l=i.split(","),p=l[0],g=l[1],m=t.city;o(".dao-geopro-city").html(m),o.ajax({url:"https://www.daocloud.com/api/v1/professional/showroom?lat="+p+"&lng="+g,type:"GET",dataType:"json",timeout:3e3,success:function(r){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].user.fullName),o("."+t+" .dao-geopro-title").html(r[e].user.professionalTitles.join(", ")),o("."+t+" .dao-geopro-location").html(r[e].addressSecond),o("."+t+" a.dao-geopro-profilelink").attr("href","https://www.daocloud.com/profile/"+r[e].user.permalink),o("."+t+" .dao-geopro-image img").attr("src",r[e].user.profileImagePath),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].user.fullName)}},error:function(){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].geoProName),o("."+t+" .dao-geopro-title").html(r[e].geoProTitle),o("."+t+" .dao-geopro-location").html(r[e].geoProLocation),o("."+t+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+t+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}}})},error:function(){o(".dao-geopro-city").html(t),function(){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].geoProName),o("."+t+" .dao-geopro-title").html(r[e].geoProTitle),o("."+t+" .dao-geopro-location").html(r[e].geoProLocation),o("."+t+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+t+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}}(jQuery)}})}(jQuery);