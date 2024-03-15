'use strict'
function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні даних про погоду.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDataElement = document.getElementById('weatherData');
            weatherDataElement.innerHTML = `
                    <p>Температура: ${data.main.temp}°C</p>
                    <p>Тиск: ${data.main.pressure} hPa</p>
                    <p>Опис: ${data.weather[0].description}</p>
                    <p>Вологість: ${data.main.humidity}%</p>
                    <p>Швидкість вітру: ${data.wind.speed} м/с</p>
                    <p>Напрям вітру: ${data.wind.deg}°</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Значок погоди">
                `;
        })
        .catch(error => {
            const weatherDataElement = document.getElementById('weatherData');
            weatherDataElement.innerHTML = `<p>${error.message}</p>`;
        });
}