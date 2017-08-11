jQuery(document).ready(function ($) {
  $.ajax({
    url: "http://api.wunderground.com/api/b47d72a780f68e9b/geolookup/conditions/q/AK/Anchorage.json",
    dataType: "jsonp",
    success: function (parsed_json) {
      var city = parsed_json['location']['city'];
      var state = parsed_json['location']['state'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      alert("Current temperature in " + city + " , " + state + " is: " + temp_f + "f  " + temp_c + "c");
    }
  });
});


// if(jQuery){
//   alert("Yes")
// }else{
//   alert("no jquery found")
// }