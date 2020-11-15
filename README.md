# Weather App 
Vanilla JS + OpenWeatherMap API



## Features

- Up-to-date weather data
- Weather using geolocation 

## How to use

To use the weather widget, you need:

1) Add HTML code to the place where you want to see the widget:

```html
    <div class="weather-app" id="weather-app">
        <h2 class="weather-app__title">Weather</h2>
        <div class="weather-app__icon">
            <img src="icons/weather.png" alt="weather-icon" class="weather-app__icon-image">
        </div>
        <div class="weather-app__content">
            <div class="weather-app__notification"><p></p></div>
            <div class="weather-app__value"><p></p></div>
            <div class="weather-app__description"><p></p></div>
            <div class="weather-app__location"><p></p></div>
        </div>
    </div>
```
2) Include CSS and JS files:

```html
    <link rel="stylesheet" href="weather-app.css">
    <script src="weather-app.js"></script>
```
> Note: It works only if you allow the geolocation in the browser.

**Free Software, Hell Yeah!**
