function refreshWeather(response) {
  let currentTempElement = document.querySelector("#currentTemp");
  let currentTemp = response.data.temperature.current;
  currentTempElement.innerHTML = Math.round(currentTemp);

  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.city;

  let cityCountryElement = document.querySelector("#cityCountry");
  cityCountryElement.innerHTML = response.data.country;

  let currentHumidityElement = document.querySelector("#currentHumidity");
  currentHumidityElement.innerHTML = response.data.temperature.humidity;

  let currentWindElement = document.querySelector("#currentWind");
  let currentWind = response.data.wind.speed;
  currentWindElement.innerHTML = Math.round(currentWind);
}

function searchCity(city) {
  let apiKey = "5t6ddf5ab847cfob04fcc84f5baa13c0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Berlin");
