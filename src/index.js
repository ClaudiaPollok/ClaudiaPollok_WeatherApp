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

  let currentDescriptionElement = document.querySelector("#currentDescription");
  currentDescriptionElement.innerHTML = response.data.condition.description;

  let cityDateTimeElement = document.querySelector("#cityDateTime");

  const now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  let date = now.getDate();

  let year = now.getFullYear();

  const formattedTime = now.toLocaleTimeString();

  cityDateTimeElement.innerHTML = `${day}, ${month} ${date}, ${year}, ${formattedTime}`;
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
