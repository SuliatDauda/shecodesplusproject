function updateWeather(response) {
  let temperatureBox = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityBox = document.querySelector("#weather-city");
  let humidityBox = document.querySelector("#humidity");
  let windSpeedBox = document.querySelector("#wind-speed");
  let timeBox = document.querySelector("#time");

  let descriptionBox = document.querySelector("#description");

  console.log(response.data);

  cityBox.innerHTML = response.data.city;
  descriptionBox.innerHTML = response.data.condition.description;
  humidityBox.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedBox.innerHTML = `${response.data.wind.speed}km/h`;
  timeBox.innerHTML = "FRIDAY 11:20";
  temperatureBox.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "905390deebf4616a1a1o9903d8ct5d65";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormBox = document.querySelector("#search-form");
searchFormBox.addEventListener("submit", handleSearchSubmit);

searchCity("Lagos");
