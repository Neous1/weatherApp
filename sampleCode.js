{/* <script src = "http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" > </script>  
    <script >
    jQuery(document).ready(function ($) {
        $.ajax({
            url: "http://api.wunderground.com/api/b47d72a780f68e9b/geolookup/conditions/q/IA/Cedar_Rapids.json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);
            }
        });
    }); 
</script> */


<script src = "http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" > 

</script>

    jQuery(document).ready(function ($){
        $.ajax({
            url:"http://api.wunderground.com/api/b47d72a780f68e9b/geolookup/conditions/q/IA/Cedar_Rapids.json",
            dataType: "jsonp",
            success: function(parsed_json){
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);                
            }
        });
    }
