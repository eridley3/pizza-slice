var $;
$(document).ready(function(){
   var client_id = "Y5RPDGHL103A24ODOW0OTWH1S2GO4B103XC1VGQ144FGQ0QE";
   var client_secret = "NBJSQUOPORQDBTZVNBAIA3QBAO0N4VWD4XKXZP3O31K2FC0H";
   // When the button is clicked
   $("#submit").click(function() {
        var client_id = "Y5RPDGHL103A24ODOW0OTWH1S2GO4B103XC1VGQ144FGQ0QE";
        var client_secret = "NBJSQUOPORQDBTZVNBAIA3QBAO0N4VWD4XKXZP3O31K2FC0H";
       $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
            console.log(data);
            var Data = data.response;
            var Venue = Data.venues;
            for(var i = 0; i < Venue.length; i ++){
                var Contact = Venue[i].contact;
                var Location = Venue[i].location;
                $("#results").append(Venue[i].name + Contact.formattedPhone + Location.address);
                console.log(Venue[i].name + Contact.formattedPhone + Location.address);
            };
        });
        
   });

});



