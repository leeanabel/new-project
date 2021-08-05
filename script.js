let h3 = document.querySelector("h3#date");
let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  // because minutes might be displayed like this: 14:5 instead of 14:05
  minutes = `0${minutes}`;
}
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
let currentDay = days[now.getDay()];
h3.innerHTML = `${currentDay}, ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let cityInput = document.querySelector("#city-input");
  h1.innerHTML = cityInput.value;
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

function convertToFarenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFarenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showWeather(response) {
  let h4 = document.querySelector("h4");
  let temperature = Math.round(response.data.main.temp);
  h4.innerHTML = `${temperature}`;
}

let apiKey = "143c2a360d888fef7722b4c485bdccb7";
let city = response.data.name;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl).then(showWeather);
