// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-app__icon-image");
const tempElement = document.querySelector(".weather-app__value p");
const descElement = document.querySelector(".weather-app__description p");
const locationElement = document.querySelector(".weather-app__location p");
const notificationElement = document.querySelector(".weather-app__notification");

// App data
const weather = {};

weather.temperature = {
	unit : "celsius"
}

// APP CONSTS AND VARS
const celsiusToKelvin = (celsius) => celsius + 273.15;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
// API KEY
const key = "07232afb8bc1f80de67c9daab8e0f5d8";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
	navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
	notificationElement.style.display = "block";
	notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}


function setPosition(position){
	// SET USER'S POSITION
}


function showError(error){
	// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
}


function getWeather(latitude, longitude){
	// GET WEATHER FROM API
}


function displayWeather(){
	// DISPLAY WEATHER TO UI
}
