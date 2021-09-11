var displayDays = function () {
  for (var i = 0; i < 5; i++) {
    document.querySelector(`#day-${i}`).innerText =
      moment().add(i, "days").format("dddd") + " ";
  }
};

var weatherApiKey = "bc3a571ec5865457fb6b52d6cce74452";

var fetchWeather = function (city) {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      weatherApiKey
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
};

var displayWeather = function (data) {
  var lat = data.city.coord.lat;
  var lon = data.city.coord.lon;

  for (var i = 0; i < 5; i++) {
    document.querySelector(`#temp-${i}`).innerText =
      " Temp: " + data.list[i].main.temp + "°F";
    document.querySelector(`#icon-${i}`).src =
      "https://openweathermap.org/img/wn/" +
      data.list[i].weather[0].icon +
      ".png";
    displayDays();
    fetchCityInfo(lon, lat);
  }
};

var weatherSearch = function () {
  if (document.querySelector("#city-name").value != " ") {
    fetchWeather(document.querySelector("#city-name").value);
  }
};

var tripApi = "5ae2e3f221c38a28845f05b61b840da041916e6dd029d0db7a8f4003";

function fetchCityInfo(lon, lat) {
  fetch(
    "https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=" +
      lon +
      "&lat=" +
      lat +
      "&format=json&apikey=" +
      tripApi
  )
    .then((response) => response.json())
    .then((data) => displayPlaces(data));
}
var displayPlaces = function (data) {
  for (var i = 0; i < 5; i++) {
    document.querySelector(`#place-${i}`).innerText = data[i].name;
  }
};
document.querySelector("#go-time").addEventListener("click", weatherSearch);
