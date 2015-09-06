// Posting  Email, First Name, Last Name, Phone & Region to InfusionSoft API
$(document).ready(function() {

  // Function to submit Data to api and redirect to relevant regions page
  // Param: first name, last name, email and regions - data to be sent to api
  function submitForm(firstname, lastname, email, phone, region, personType) {
    // POST JSON data to API
    $.ajax({
      type: "POST",
      url:  "https://www.daocloud.com/api/v1/regions",
      data: { firstName: firstname, lastName: lastname, email: email, phone: phone, region: region, personType: personType, leadSource: "Affilate section of Daocloud Landing Page" }
    }).done(function(msg)
      {
        if(msg=='OK'){
          // all went well, data was saved to infusion
          // we can redirect to '/demo?region=' + reg1 (/demo is the pricing results page)
          window.location="../demo/index.html?firstname="+firstname+"&lastname="+lastname+"&email="+email+"&phone="+phone+"&region="+region;
        }
        else {
          //something went wrong
          alert('We are sorry but Daocloud was unable to submit your application. You can try again with this form but if you continue to have problems just email team@daocloud.com directly. Thanks for your patience.');
        }
      });
    } // End of submitForm Fucntion

  // Grabbing variables from page and putting them into submission method
  $('.reg-form').submit(function(evt){
    console.dir(evt);
    evt.preventDefault();
    var name = $(evt.target[0]).val().split(' ');
    console.dir(name);
    var email = $(evt.target[1]).val();
    var phone = $(evt.target[2]).val();
    var region = $(evt.target[3]).val();

    submitForm(name[0], name[1], email, phone, region, personType);
  });

});
