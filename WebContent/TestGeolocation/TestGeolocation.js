//Get the HTML element required to display messages
var msgDisplaySect = document.getElementById("display_msg");

// Retrieves the current location of the user and displays it on Google Maps
function getLocation() {

	// If the browser allows 'geolocation' functionality
	if (navigator.geolocation) {
		// Get the current location and assign the callback methods in case of
		// success or error
		navigator.geolocation.getCurrentPosition(displayMap, showError);

	}
	// If the browser does not support the geolocation then display message to
	// the user.
	else {
		msgDisplaySect.innerHTML = "Geolocation is not supported by this browser.";
	}
}

// Display the current location to the user on google maps.The co-ordinates are
// held in 'pos' object
function displayMap(pos) {

	// Create an object of the location with the latitude and longitude in 'pos'
	// object
	var myLocation = new google.maps.LatLng(pos.coords.latitude,
			pos.coords.longitude);

	// Create an object describing the properties of the map
	var mapProp = {
		center : myLocation,
		zoom : 12,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	// Create the google map object
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	// Create the marker object used to point the current location
	var marker = new google.maps.Marker({
		position : myLocation,
		map : map
	});

}

// Displays Errors if any occurs while retrieving the current co-ordinates of
// the user
function showError(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		msgDisplaySect.innerHTML = "User denied the request for Geolocation."
		break;
	case error.POSITION_UNAVAILABLE:
		msgDisplaySect.innerHTML = "Location information is unavailable."
		break;
	case error.TIMEOUT:
		msgDisplaySect.innerHTML = "The request to get user location timed out."
		break;
	case error.UNKNOWN_ERROR:
		msgDisplaySect.innerHTML = "An unknown error occurred."
		break;
	}
}
