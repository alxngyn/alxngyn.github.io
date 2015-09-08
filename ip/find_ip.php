<?php

$ip = $_SERVER['REMOTE_ADDR'];

echo "Your ip is " . $ip;


$json = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));

$city = $json->city;
$state = $json->region;
$zip = $json->postal;

echo "<br>Your location is " . $city . ", " . $state;

$weather_json = json_decode(file_get_contents("http://api.openweathermap.org/data/2.5/weather?zip={$zip},us"));

$current_temp = $weather_json->main->temp;
// from Kelvin to Celcius
$current_temp = $current_temp - 273.15;
// from Celcius to Farenheit
$current_temp = $current_temp * (9/5) + 32;

$current_desc = $weather_json->weather[0]->main;


echo "<br>Your current temp is " . $current_desc . " at "  . (int)$current_temp . " degrees.";
?>
