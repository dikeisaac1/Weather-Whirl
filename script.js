const apiKey = "d8ca70c842e7944ce8701fbb9469a850";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  // Check internet connection before making API call
  if (!navigator.onLine) {
    alert(
      "🚫 No internet connection. Please check your network and try again."
    );
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
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      const description = data.weather[0].description.toLowerCase();
      const iconCode = data.weather[0].icon;

      function isDay() {
        return iconCode.includes("d"); // 'd' = day, 'n' = night
      }

      function capitalizeTwoWords(str) {
        return str
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      switch (description) {
        // Clear
        case "clear sky":
          document.querySelector(".description").textContent = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/01d.png"
            : "weather-app-img/images/01n.png";
          break;

        // Clouds
        case "few clouds":
          document.querySelector(".description").textContent = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/02d.png"
            : "weather-app-img/images/02d.png";
          break;
        case "scattered clouds":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/03.png"
            : "weather-app-img/images/03.png";
          break;
        case "broken clouds":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/04.png";
          break;
        case "overcast clouds":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/04.png";
          break;

        // Rain
        case "light rain":
        case "moderate rain":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/06d.png"
            : "weather-app-img/images/06n.png";
          break;
        case "heavy intensity rain":
        case "very heavy rain":
        case "extreme rain":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/heavy-rain.png"
            : "weather-app-img/images/heavy-rain.png";
          break;
        case "freezing rain":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/weather-freezing-rain.svg";
          break;
        case "light intensity shower rain":
        case "shower rain":
        case "heavy intensity shower rain":
        case "ragged shower rain":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/05.png"
            : "weather-app-img/images/05.png";
          break;

        // Drizzle
        case "light intensity drizzle":
        case "drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/05.png"
            : "weather-app-img/images/05.png";
          break;

        // Thunderstorm
        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "light thunderstorm":
        case "thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/07.png"
            : "weather-app-img/images/07.png";
          break;

        // Snow
        case "light snow":
        case "snow":
        case "heavy snow":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/08.png"
            : "weather-app-img/images/08.png";
          break;
        case "sleet":
        case "light shower sleet":
        case "shower sleet":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/partly-cloudy-night-sleet.svg";
          break;
        case "light rain and snow":
        case "rain and snow":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/snow and rain.png";
          break;
        case "light shower snow":
        case "shower snow":
        case "heavy shower snow":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/snow and rain.png";
          break;

        //Atmosphere
        case "mist":
        case "fog":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/09.png"
            : "weather-app-img/images/09.png";
          break;
        case "smoke":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/extreme-smoke.256x193.png";
          break;
        case "haze":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = isDay()
            ? "weather-app-img/images/haze-day.256x205.png"
            : "weather-app-img/images/haze-night.241x256.png";
          break;
        case "sand/dust whirls":
        case "sand":
        case "dust":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/dust (1).png";
          break;
        case "volcanic ash":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/volcano-ashes.256x248.png";
          break;
        case "squalls":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/wind.png";
          break;
        case "tornado":
          document.querySelector(".description").innerHTML = capitalizeTwoWords(data.weather[0].description)
          weatherIcon.src = "weather-app-img/images/tornado.238x256.png";
          break;

        default:
          weatherIcon.src = "images/default.png";
          break;
      }

      document.querySelector(".weather").style.display = "flex";
      document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert(
      "❌ An error occurred while fetching weather data. Please try again."
    );
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
