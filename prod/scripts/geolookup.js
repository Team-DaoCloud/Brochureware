"use strict";!function(o){var e,a,r=[{geoProName:"Dr. Tracy Freeman",geoProTitle:"Integrative MD",geoProLocation:"Washington, DC",geoProURL:"https://www.daocloud.com/profile/tracy-freeman/",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob142228714_thumbnail."},{geoProName:"Dr. Arti Mehta",geoProTitle:"Naturopathic Doctor",geoProLocation:"Washington, DC",geoProURL:"https://www.daocloud.com/profile/arti-mehta/",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/arti-mehta1415196346253_thumbnail.jpg"},{geoProName:"Dr. Maryjoyce Rotella",geoProTitle:"Acupuncturist , Chiropractor, Herbalist",geoProLocation:"Burtonsville, MD",geoProURL:"https://www.daocloud.com/profile/maryjoyce-rotella/",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/blob141661243_thumbnail."},{geoProName:"Aaron Wallach",geoProTitle:"Fitness professional",geoProLocation:"Chevy Chase, MD",geoProURL:"https://www.daocloud.com/profile/aaron-wallach/",geoProImageURL:"https://s3.amazonaws.com/daocloudapp-prod/resources/picture/profile/photo-on-10-30-14-at-3-47-pm1414698445083_thumbnail.jpg"}],t="You";o.ajax({url:"https://ipinfo.io?token=c0ef293720c323",type:"POST",dataType:"jsonp",timeout:3e3,success:function(i){var l=i.loc,g=l.split(","),p=g[0],m=g[1],c=i.city;o.ajax({url:"https://www.daocloud.com/api/v1/professional/showroom?lat="+p+"&lng="+m,type:"GET",dataType:"json",timeout:3e3,success:function(i){if(i.length<4)for(o(".dao-geopro-city").html(t),e=0,a=4;a>e;++e){var l="dao-geopro-"+e;o("."+l+" .dao-geopro-name").html(r[e].geoProName),o("."+l+" .dao-geopro-title").html(r[e].geoProTitle),o("."+l+" .dao-geopro-location").html(r[e].geoProLocation),o("."+l+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+l+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+l+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}else for(o(".dao-geopro-city").html(c),e=0,a=4;a>e;++e){var l="dao-geopro-"+e;o("."+l+" .dao-geopro-name").html(i[e].user.fullName),o("."+l+" .dao-geopro-title").html(i[e].user.professionalTitles.join(", ")),o("."+l+" .dao-geopro-location").html(i[e].addressSecond),o("."+l+" a.dao-geopro-profilelink").attr("href","https://www.daocloud.com/profile/"+i[e].user.permalink),o("."+l+" .dao-geopro-image img").attr("src",i[e].user.profileImagePath),o("."+l+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+i[e].user.fullName)}},error:function(){for(o(".dao-geopro-city").html(t),e=0,a=4;a>e;++e){var i="dao-geopro-"+e;o("."+i+" .dao-geopro-name").html(r[e].geoProName),o("."+i+" .dao-geopro-title").html(r[e].geoProTitle),o("."+i+" .dao-geopro-location").html(r[e].geoProLocation),o("."+i+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+i+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+i+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}}})},error:function(){o(".dao-geopro-city").html(t),function(){for(e=0,a=4;a>e;++e){var t="dao-geopro-"+e;o("."+t+" .dao-geopro-name").html(r[e].geoProName),o("."+t+" .dao-geopro-title").html(r[e].geoProTitle),o("."+t+" .dao-geopro-location").html(r[e].geoProLocation),o("."+t+" a.dao-geopro-profilelink").attr("href",r[e].geoProURL),o("."+t+" .dao-geopro-image img").attr("src",r[e].geoProImageURL),o("."+t+" .dao-geopro-image img").attr("alt","The DaoCloud Profile Headshot for "+r[e].geoProName)}}(jQuery)}})}(jQuery);