// determine the user's location
x = navigator.geolocation;
x.getCurrentPosition(success, failure);

function success(position) {
  var mylat = position.coords.latitude;
  var mylong = position.coords.longitude;
  $("#lat").html(mylat);
  $("#long").html(mylong);

  var url = "https://api.wunderground.com/api/b47d72a780f68e9b/geolookup/conditions/q/" + mylat + "," + mylong + ".json";

  $.getJSON(url, function (data) {
    // console.log(data.current_observation.display_location.full)
    var loc = data.current_observation.display_location.full;
    var tempf = Math.round(data.current_observation.temp_f) + "° F";
    var tempc = Math.round(data.current_observation.temp_c) + "° C";
    var weather = data.current_observation.weather;
    var icon = data.current_observation.icon_url;

    console.log(data.current_observation.temp_f)
    $("#loc").html(loc)
    $("#temp").html(tempf)
    $("#weather").html(weather)
    $("#icon").html("<img src='" + icon + "'>")

    $("#convert").click(displayTempFtoC);

    function displayTempFtoC() {
      $("#temp").html() == tempf ? $("#temp").html(tempc) : $("#temp").html(tempf);

      //


    }

  })
}

function failure() {
  $('#lat').html("<p> no coordinates</p>")
}





// });