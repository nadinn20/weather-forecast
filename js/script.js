$(function(){
    $('#btnGetWeather').click(function () {
        getWeatherByCity('ua', dataReceived, showError, $('#inputCityName').val());
    });
    $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    });     
    
    getWeatherData('ua', dataReceived, showError);
    
    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; 
        var city = data.city.name;
        var country = data.city.country;
        $("#weatherTable tr:not(:first)").remove();
        
        $.each(data.list, function(){
            var localTime = new Date(this.dt*1000 - offset); // Convert time from UTC to local
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(),	// Use moment.js for date format
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C'
            );
        });
        $('#location').html(city + ', <b>' + country + '</b>'); // Adding location
    }

    function addWeather(icon, day, condition, temp){
        var markup = '<tr>'+
                '<th>' + day + '</th>' + '</tr>' + '<tr>' +
                '<th>' + '<img src="images/icons/'+ 
                  icon
                  +'.png" />' + '</th>' +'</tr>' + '<tr>' + 
                '<th>' + temp + '</th>' + '</tr>' + '<tr>' +
                '<th>' + condition + '</th>'
            + '</tr>';
        weatherTable.insertRow(-1).innerHTML = markup; // Додаємо рядок до таблиці
    }

    function showError(msg){
        $('#error').html('Сталася помилка: ' + msg);
    }
});