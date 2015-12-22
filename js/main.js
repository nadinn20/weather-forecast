function Weather() {

    this.setUpGeolocation = function() {
        navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
    };

    this.startSearch = function() {
        $('#btnGetWeather').click(function () {
            var cityName =  $('#inputCityName').val();
            if (cityName) {
                getWeatherByCity(cityName);
            }
        });
        $('#inputCityName').keypress(function(e) {
            var ENTER_KEY_CODE = 13;
            if ( e.which === ENTER_KEY_CODE ) {
                $('#btnGetWeather').trigger('click');
                return false;
            }
        });
    };

    function onLocationSuccess(position) {
        var url = getWeatherByPosUrl(position);
        $.getJSON(url, onWeatherData);

        var forecastUrl = getForecastByPosUrl(position);
        $.getJSON(forecastUrl, populateForecast);
    }

    function onLocationError(error) {
        console.warn('Error:' + error.message);
    }

    function getWeatherByCity(cityName) {
        var url = getWeatherByCityUrl(cityName);
        $.getJSON(url, onWeatherData);

        var forecastUrl = getForecastByCityUrl(position);
        $.getJSON(forecastUrl, populateForecast);
    }
     // ---- Weather and Forecast by Location --- /
    function getWeatherByPosUrl(position) {
        return 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
            '&lon='+position.coords.longitude+'&units=metric&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
    }

    function getForecastByPosUrl(position) {
        return 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+position.coords.latitude+
            '&lon='+position.coords.longitude+'&cnt=7&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
    }
    //---------------------------------------------/

     // Weather and Forecast by City ---------------/
    function getWeatherByCityUrl(cityName) {
        return 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName +
            '&type=like&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
    }

    function getForecastByCityUrl(cityName) {
         return 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ cityName +
             '&units=metric&cnt=3&APPID=e522dd5a533738e9c18cde03828c57b1&callback=?';
    }
    //------------------------------------------/

    function onWeatherData(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000;
        var updatedDate = new Date(data.dt*1000-offset);
        var now = moment(updatedDate).calendar();
        $('#location').html(data.name);
        $('#localTime').html(now);
        $('#temp').html(Math.round(data.main.temp));
        $('#temp_min').html(Math.round(data.main.temp_min));
        $('#temp_max').html(Math.round(data.main.temp_max));
        $('#pressure').html(Math.round(data.main.pressure*0.75006375541921));
        $('#humidity').html(data.main.humidity);
        $('#windSpeed').html(data.wind.speed);
        $('#clouds').html(data.clouds.all);
        $('#icon').html('<img src="images/icons/'+ data.weather[0].icon +'.png" alt="' + data.weather[0].icon + ' ' + data.weather[0].description + '" >');
    }

    function populateForecast(data) {
        var forecastList = data.list;
        var offset = (new Date()).getTimezoneOffset()*60*1000;
        
        forecastList.forEach(function(forecast) {
        $('localTime1').html(moment(new Date(data.list[0].dt*1000-offset)).calendar());
        $('#temp1').html(Math.round(data.list[0].temp.day));
        $('#pressure1').html(Math.round(data.list[0].pressure*0.75006375541921));
        
        $('localTime2').html(moment(new Date(data.list[1].dt*1000-offset)).calendar());
        $('#temp2').html(Math.round(data.list[1].temp.day));
        $('#pressure2').html(Math.round(data.list[1].pressure*0.75006375541921));
        
        $('localTime3').html(moment(new Date(data.list[2].dt*1000-offset)).calendar());
        $('#temp3').html(Math.round(data.list[2].temp.day));
        $('#pressure3').html(Math.round(data.list[2].pressure*0.75006375541921));
        
        $('localTime4').html(moment(new Date(data.list[3].dt*1000-offset)).calendar());
        $('#temp4').html(Math.round(data.list[3].temp.day));
        $('#pressure4').html(Math.round(data.list[3].pressure*0.75006375541921));
        
        $('localTime5').html(moment(new Date(data.list[4].dt*1000-offset)).calendar());
        $('#temp5').html(Math.round(data.list[4].temp.day));
        $('#pressure5').html(Math.round(data.list[4].pressure*0.75006375541921));
        
        $('localTime6').html(moment(new Date(data.list[5].dt*1000-offset)).calendar());
        $('#temp6').html(Math.round(data.list[5].temp.day));
        $('#pressure6').html(Math.round(data.list[5].pressure*0.75006375541921));
        
        $('localTime7').html(moment(new Date(data.list[6].dt*1000-offset)).calendar());
        $('#temp7').html(Math.round(data.list[6].temp.day));
        $('#pressure7').html(Math.round(data.list[6].pressure*0.75006375541921));
        });
    }


}