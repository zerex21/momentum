const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherCity = document.querySelector('.city');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const errorWeather = document.querySelector('.error-weather')

weatherCity.onchange = function () {
    getWeather()
}

async function getWeather() {
    try {
        if (weatherCity.value == '') {
            weatherCity.value = localStorage.getItem('city')
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=en&appid=1b1db3ec15ec996740f7562008d175f1&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        weatherCity.value = data.name;
        weatherWind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`
        weatherHumidity.textContent = `Humidity: ${Math.floor(data.main.humidity)}%`
        errorWeather.style.display = 'none'
    } catch (err) {
        errorWeather.style.display = 'block'
        weatherCity.value = ""
        weatherCity.placeholder = 'Put correct city'
        temperature.textContent = ""
        weatherDescription.textContent = ""
        weatherWind.textContent = "Wind speed:"
        weatherHumidity.textContent = "Humidity:"
    }
}
getWeather()

export {
    getWeather
}