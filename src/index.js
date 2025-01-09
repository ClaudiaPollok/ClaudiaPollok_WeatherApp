function refreshWeather(response) {
  let currentTempElement = document.querySelector("#currentTemp");
  let currentTemp = response.data.temperature.current;
  currentTempElement.innerHTML = Math.round(currentTemp);
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.city;
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
