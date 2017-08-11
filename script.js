jQuery(document).ready(function ($) {
  $.ajax({
    url: "http://api.wunderground.com/api/b47d72a780f68e9b/geolookup/conditions/q/AK/Anchorage.json",
    dataType: "jsonp",
    success: function (parsed_json) {
      var city = parsed_json['location']['city'];
      var state = parsed_json['location']['state'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      // alert("Current temperature in " + city + " , " + state + " is: " + temp_f + "f  " + temp_c + "c");
      var temp = document.getElementById("temp").innerHTML = "Current temperature in " + city + " , " + state + " is: " + temp_f + "f  " + temp_c + "c";
    }


  });
// determine the user's location
  x = navigator.geolocation;
  x.getCurrentPosition(success, failure);

  function success(position) {
    debugger;
    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;
    $("#lat").html(mylat);
    $("#long").html(mylong);

  }

  function failure() {
    $('#lat').html("<p> no coordinates</p>")
  }





});