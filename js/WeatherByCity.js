function getWeatherByCity(lang, fnOK, fnError, cityName) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&APPID=e522dd5a533738e9c18cde03828c57b1&cnt=16&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
            fnOK.call(this, data);
        }
    );
}
