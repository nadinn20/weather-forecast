$(function() {
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=Kiev'+
    '&units=metric&cnt=7&APPID=e522dd5a533738e9c18cde03828c57b1',

   function(response) {
               console.log(response); 
            $('#tempKiev').html(Math.round(response.temp));
        });
});