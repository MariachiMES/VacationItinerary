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
  for (var i = 0; i < 5; i++) {
    document.querySelector(`#temp-${i}`).innerText =
      " Temp: " + data.list[i].main.temp + "°F";
    document.querySelector(`#icon-${i}`).src =
      "https://openweathermap.org/img/wn/" +
      data.list[i].weather[0].icon +
      ".png";
    displayDays();
  }
};

var weatherSearch = function () {
  if (document.querySelector("#city-name").value != " ") {
    fetchWeather(document.querySelector("#city-name").value);
  }
};

document.querySelector("#go-time").addEventListener("click", weatherSearch);

// document.querySelector("#go-time").addEventListener("click", fetchWeather);
// $(function () {
//   var cityNames = [
//     "Los Angeles",
//     "San Francisco",
//     "San Diego",
//     "Oakland",
//     "Portland",
//     "Seattle",
//     "Las Vegas",
//     "Boise",
//     "Phoenix",
//     "Tucson",
//     "Salt Lake City",
//     "Denver",
//     "Albuquerque",
//     "Honolulu",
//     "Maui",
//     "Anchorage",
//     "Fairbanks",
//     "Cheyenne",
//     "Great Falls",
//     "Fargo",
//     "Sioux Falls",
//     "Omaha",
//     "Wichita",
//     "Oklahoma City",
//     "Dallas",
//     "Houston",
//     "San Antonio",
//     "New Orleans",
//     "Minneapolis",
//     "Milwaukee",
//     "Des Moines",
//     "St. Louis",
//     "Kansas City",
//     "Little Rock",
//     "Chicago",
//     "Indianapolis",
//     "Nashville",
//     "Louisville",
//     "Atlanta",
//     "Miami",
//     "Tampa",
//     "Orlando",
//     "Charlotte",
//     "Cleveland",
//     "Cincinnati",
//     "Detroit",
//     "Baltimore",
//     "Washington, D.C.",
//     "Philadelphia",
//     "Pittsburgh",
//     "New York City",
//     "Boston",
//     "Newark",
//     "Bristol",
//   ];
//   $("#city-name").autocomplete({
//     source: cityNames,
//   });
// });

// $(function () {
//   $("#datepicker").datepicker();
// });
