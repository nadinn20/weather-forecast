$(function(){
    //Setting lang for moment.js
    moment.locale('uk');
    // Adding handler for inputCityName button
    $('#btnGetWeather').click(function () {
        getWeatherByCity('ua', locSuccess(), locError, $('#inputCityName').val());
    });
    // Adding handler for 'Enter' key on keyboard
    $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    }); 

$(function() {
navigator.geolocation.getCurrentPosition(locSuccess, locError);
});

   function locSuccess(position) {
   var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
                    '&lon='+position.coords.longitude+'&units=metric&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
   var offset = (new Date()).getTimezoneOffset()*60*1000; 
   
           $.getJSON(weatherAPI, function(response) {
               console.log(response);
               $('#location').html(response.name);
               $('localTime').html(moment(new Date(response.dt_txt*1000-offset)).calendar());
               $('#temp').html(Math.round(response.main.temp));
               $('#temp_min').html(Math.round(response.main.temp_min));
               $('#temp_max').html(Math.round(response.main.temp_max));
               $('#pressure').html(Math.round(response.main.pressure*0.75006375541921));
               $('#humidity').html(response.main.humidity);
               $('#windSpeed').html(response.wind.speed);
               $('#sunRise').html(response.sun.rise);
               $('#icon').html('<img src="images/icons'+ icon +'.png" alt="' + response.main.weather.icon + response.description + '" >');
           });
        }

        

 function locError(error) {
           console.warn('Error:' + error.message);
}
});