
function getWeatherByCity(fnOK, locError, cityName) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&cnt=16&units=metric' + '&lang=en&callback=?&appid=e522dd5a533738e9c18cde03828c57b1',
        function (data) {
            fnOK.call(this, data);
        }
    );
}