const apiKey = "9b2009456d635103a7650618053263ca";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    getWeather(city);
});

async function getWeather(city) {
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const url = `http://localhost:5000/weather?city=${city}`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // For debugging

        cityName.innerText = data.name;
        temperature.innerText = `${data.main.temp}°C`;
        description.innerText = data.weather[0].description;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;
        wind.innerText = `Wind Speed: ${data.wind.speed} km/h`;

    } catch (error) {
        alert("Error fetching weather data!");
    }
}
