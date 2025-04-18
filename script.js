const apiKey = "d8ca70c842e7944ce8701fbb9469a850";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    // Check internet connection before making API call
    if (!navigator.onLine) {
        alert("🚫 No internet connection. Please check your network and try again.");
        return;
    }

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "weather-app-img/images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "weather-app-img/images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "weather-app-img/images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "weather-app-img/images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "weather-app-img/images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("❌ An error occurred while fetching weather data. Please try again.");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

