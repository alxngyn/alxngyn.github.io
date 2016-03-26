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

        //weather.forecast.length = max length
        for(var i=0;i<4;i++)
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

// get traffic information for Corvallis
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat:44.5671951, lng:-123.2723171}
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

function timedRefresh(t) {
    // 30000 = 30 seconds
    // 1000 ms = 1 second
    console.log("We're inside timed refresh");
    setTimeout("location.reload(true);", t);
}

// instafeed doesnt work anymore due to API changes
function instafeed(){
    console.log("executing INSTAFEED");
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        accessToken: '308748409.4d9a01f.02c3653642e54cbda9294bdbd9377a16'
    });
    feed.run();
}


// onload do this:
$(document).ready(function(){
    timedRefresh(5 * 60 * 1000);
    getWeather();
    instafeed();
    initMap();
});
