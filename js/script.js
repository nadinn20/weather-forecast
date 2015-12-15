    
 $(function() {
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=istanbul'+
    '&units=metric&cnt=7&APPID=e522dd5a533738e9c18cde03828c57b1',
    function(data) {
        data.list[0].temp.day;
        $('#tempToday').html(data.list[0].temp.day);
        $('#tempTomorrow').html(data.list[1].temp.day);
        $('#tempAfterTommorow').html(data.list[2].temp.day);
        $('#pressureToday').html(data.list[0].pressure);
        $('#pressureTomorrow').html(data.list[1].pressure);
        $('#pressureAfterTommorow').html(data.list[2].pressure);
    }
  );
});