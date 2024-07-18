# WeatherWiz
A web application that displays real-time weather information and a 5-day weather forecast for any city using the OpenWeatherMap API.


# Weather Dashboard

Weather Dashboard is a web application that displays real-time weather information for any city and a 5-day weather forecast. It uses the OpenWeatherMap API to fetch the weather data and displays it in a user-friendly interface. The project is built with HTML, CSS, and JavaScript.

## Features

- **Real-time Weather Information**: Get the current weather conditions for any city, including temperature, weather description, humidity, wind speed, and more.
- **5-Day Weather Forecast**: View a 5-day weather forecast with detailed information for each day.
- **User-Friendly Interface**: Simple and intuitive design for easy navigation and information retrieval.

## Technologies Used

- **HTML**: Structure the web pages.
- **CSS**: Style the web pages for better presentation.
- **JavaScript**: Fetch and display weather data dynamically.
- **OpenWeatherMap API**: Source of real-time weather data.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/weather-dashboard.git
    cd weather-dashboard
    ```

2. **Open `index.html`** in your web browser.

3. **Enter the city name** and click "Get Weather" to see the current weather and 5-day forecast.

## Detailed Code Explanation

### `index.html`

Provides the structure of the web page, including input fields, buttons, and containers for displaying weather data.

### `styles.css`

Defines the styling for the web page elements, ensuring a clean and user-friendly interface.

### `script.js`

Handles the interaction with the OpenWeatherMap API, processes user input, and dynamically updates the web page with weather information.

#### Key Functions:

- **getWeather()**: Fetches and displays current weather data for the entered city.
- **getForecast()**: Fetches and displays a 5-day weather forecast for the entered city.
- **displayCurrentWeather(data)**: Extracts and formats current weather data for display.
- **displayForecast(data)**: Extracts and formats forecast data for display.

## Future Enhancements

- **Geolocation Support**: Automatically fetch weather data based on the user's location.
- **Additional Weather Metrics**: Display more detailed weather information such as UV index, sunrise, sunset times, etc.
- **Enhanced UI/UX**: Improve the user interface and user experience with animations, transitions, and better design elements.

## License

This project is licensed under the MIT License.
