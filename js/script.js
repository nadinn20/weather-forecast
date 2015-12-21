$(function(){
    moment.locale('uk');
    $('#btnGetWeather').click(function () {
        getWeatherByCity('ua', insertWeatherData, locError, $('#inputCityName').val());
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
$(function getWeatherData(fnOK, fnError) {
navigator.geolocation.getCurrentPosition(locSuccess,locError);
});

   function locSuccess(position) {
   var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
                    '&lon='+position.coords.longitude+'&units=metric&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
   var offset = (new Date()).getTimezoneOffset()*60*1000; 
            
           $.getJSON(weatherAPI, function(response) {
               console.log(response);
               $('#location').html(response.name);
               $('#localTime').html(moment(new Date(response.dt*1000-offset)).calendar());
               $('#temp').html(Math.round(response.main.temp));
               $('#temp_min').html(Math.round(response.main.temp_min));
               $('#temp_max').html(Math.round(response.main.temp_max));
               $('#pressure').html(Math.round(response.main.pressure*0.75006375541921));
               $('#humidity').html(response.main.humidity);
               $('#windSpeed').html(response.wind.speed);
               $('#clouds').html(response.clouds.all);
               $('#icon').html('<img src="/images/icons'+ icon +'.png" alt="' + weather.description + '" >');
               
           });
        }

 
function insertWeatherData(data){

        $("#weatherTable tr:not(:first)").remove();

        $.each(data.list, function(){
            // "this" тримає об'єкт прогнозу звідси: http://openweathermap.org/forecast16
            var localTime = new Date(this.dt*1000 - offset); // конвертуємо час з UTC у локальний
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(),	// Використовуємо moment.js для представлення дати
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C'
            );
        });
        $('#location').html(city + ', <b>' + country + '</b>'); // Додаємо локацію на сторінку

    function addWeather(icon, day, condition, temp){
        var markup = '<tr>'+
                '<td>' + day + '</td>' +
                '<td>' + '<img src="images/icons/'+ 
                  icon
                  +'.png" />' + '</td>' +
                '<td>' + temp + '</td>' +
                '<td>' + condition + '</td>'
            + '</tr>';
        weatherTable.insertRow(-1).innerHTML = markup; // Додаємо рядок до таблиці
    }
}
function locError(error) {
    console.warn('Error:' + error.message);
}
});