const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
let isCelsius = true;

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchCurrentWeather(city);
        fetchForecast(city);
    } else {
        alert('Please enter a city name.');
    }
}

function fetchCurrentWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayCurrentWeather(data))
        .catch(error => handleError('Error fetching current weather:', error));
}

function fetchForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayForecast(data))
        .catch(error => handleError('Error fetching forecast:', error));
}

function displayCurrentWeather(data) {
    const temperature = isCelsius ? data.main.temp : (data.main.temp * 9/5) + 32;
    const unit = isCelsius ? '°C' : '°F';
    const currentWeather = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${temperature.toFixed(1)} ${unit}</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Date & Time: ${displayDateTime(data.dt, data.timezone)}</p>
    `;
    document.getElementById('current-weather').innerHTML = currentWeather;
}

function displayForecast(data) {
    let forecastHTML = '<h2>5-Day Forecast</h2>';
    for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        const temperature = isCelsius ? forecast.main.temp : (forecast.main.temp * 9/5) + 32;
        const unit = isCelsius ? '°C' : '°F';
        forecastHTML += `
            <div>
                <h3>${new Date(forecast.dt * 1000).toDateString()}</h3>
                <p>Temperature: ${temperature.toFixed(1)} ${unit}</p>
                <p>Weather: ${forecast.weather[0].description}</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
                <p>Wind Speed: ${forecast.wind.speed} m/s</p>
            </div>
        `;
    }
    document.getElementById('forecast').innerHTML = forecastHTML;
}

function toggleUnits() {
    isCelsius = !isCelsius;
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchCurrentWeather(city);
        fetchForecast(city);
    }
}

function displayDateTime(timestamp, timezone) {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toUTCString().slice(0, -4);
}

function handleError(error, details) {
    console.error(error, details);
    alert('An error occurred while fetching weather data. Please try again.');
}
