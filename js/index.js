 function dataReceived(data) {
  	      var locale = 'ua',
         weatherDiv = $('.weather'),
		       location = $('p #location');
		       var offset = (new Date()).getTimezoneOffset()*60*1000;
		$.getJSON(localTime), function(response){
		    console.log(response)
			$('#localTime').html(response.newDate(this.dt*1000 - offset));
		};
}

	getWeatherData(locale, dataReceived, showError);

	function dataReceived(data) {
		// Get the offset from UTC (turn the offset minutes into ms)
		var offset = (new Date()).getTimezoneOffset()*60*1000;
		var city = data.city.name;
		var country = data.city.country;

 $(function() {
navigator.geolocation.getCurrentPosition(locSuccess, locError);
});

   function locSuccess(position) {
   var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
                    '&lon='+position.coords.longitude+'&units=metric&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
           $.getJSON(weatherAPI, function(response) {
               console.log(response);
               $('#location').html(response.name);

               $('#tempToday').html(Math.round(response.main.temp));
               $('#pressureToday').html(response.main.pressure);
               $('#humidityToday').html(response.main.humidity);
               $('#icon1').html('<img src="images/'+ icon + '.png" alt="Weather icon">');
               
               $('#tempTomorrow').html(Math.round(response.temp));
               $('#pressureTommorow').html(response.pressure);
               $('#humidityTomorrow').html(response.humidity);
               
               $('#tempAfterTomorrow').html(Math.round(response.temp));
               $('#pressureAfterTommorow').html(response.pressure);
               $('#humidityAfterTommorow').html(response.humidity);
               
               
           });
        }

 function locError(error) {
           console.warn('Error:' + error.message);
}
