// SELECT ELEMENTS
const valueElement = document.querySelector(".weather-app__value p");
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
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
// API KEY
const key = "07232afb8bc1f80de67c9daab8e0f5d8";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
	navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
	notificationElement.style.display = "block";
	notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}


// GET WEATHER FROM API
function getWeather(latitude, longitude){
	let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

	fetch(api)
		.then(function(response){
			let data = response.json();
			return data;
		})
		.then(function(data){
			weather.temperature.value = Math.floor(kelvinToCelsius(data.main.temp));
			weather.description = data.weather[0].description;
			weather.city = data.name;
			weather.country = data.sys.country;
		})
		.then(function(){
			displayWeather();
		});
}

// SET USER'S POSITION
function setPosition(position){
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	getWeather(latitude, longitude);
}


// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
	notificationElement.style.display = "block";
	notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// DISPLAY WEATHER TO UI
function displayWeather(){
	valueElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
	descElement.innerHTML = weather.description;
	locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
