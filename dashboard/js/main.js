$(document).ready(function(){
    getWeather();
});

// get weather information for Corvallis,
// uses simpleweatherjs
function getWeather() {
    $.simpleWeather({
    location: 'Corvallis, OR',
    woeid: '',
    unit: 'f',
    success: function(weather) {
        city = '<h2>'+weather.city+', '+weather.region+'</h2>';
        current = '<img src="'+weather.thumbnail+'" >';
        current += '<h3>'+weather.temp+'&deg;'+weather.units.temp+'</h3>';
        current += '<p>'+"LOW: "+weather.low+" HIGH: " + weather.high+'</p>'

        for(var i=0;i<weather.forecast.length;i++)
        {
            day = '<td>'+weather.forecast[i].day+'</td>';
            thumbnail = '<td><img src="'+weather.forecast[i].thumbnail+'"></td>';
            low = '<td>'+weather.forecast[i].low+'</td>';
            high = '<td>'+weather.forecast[i].high+'</td>';
            $("#weather-thumbnails").append(thumbnail);
            $("#dayOfTheWeek").append(day);
            $("#weather-lows").append(low);
            $("#weather-highs").append(high);
        }

        update = "<p>"+"Last updated: " + weather.updated + "</p>";

        $("#current").html(current);
        $("#location").html(city);
        $("#updateTime").html(update);
    },
    error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
    }
    });
};
