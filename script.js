var displayDays = function () {
  for (var i = 0; i < 5; i++) {
    document.querySelector(`#day-${i}`).innerText =
      moment().add(i, "days").format("dddd") + " ";
  }
};

$(function () {
  $("#datepicker").datepicker();
});

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
  console.log(lat, lon);

  for (var i = 0; i < 5; i++) {
    document.querySelector(`#temp-${i}`).innerText =
      " Temp: " + data.list[i].main.temp + "°F";
    document.querySelector(`#icon-${i}`).src =
      "https://openweathermap.org/img/wn/" +
      data.list[i].weather[0].icon +
      ".png";
    displayDays();
  }
  fetchCityInfo(lon, lat);
};

var weatherSearch = function () {
  if (document.querySelector("#city-name").value != " ") {
    fetchWeather(document.querySelector("#city-name").value);
  }
};

var alternateTripApi =
  "5ae2e3f221c38a28845f05b60ade91485de3f230f12f105b7c087b90";

var tripApi = "5ae2e3f221c38a28845f05b627a67175ff5888a5fca032db41baf3b1";
var apiKey = "5ae2e3f221c38a28845f05b61b840da041916e6dd029d0db7a8f4003";

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
  console.log(data);
  for (var i = 0; i < 10; i++) {
    document.querySelector(`#place-${i}`).innerText = data[i].name;
  }
};
document.querySelector("#go-time").addEventListener("click", weatherSearch);

var draggables = document.querySelectorAll(".activity-card");
var containers = document.querySelectorAll(".five-things-to-do");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    var afterElement = getDragAfterElement(container, e.clientY);
    var draggable = document.querySelector(".dragging");
    console.log(afterElement);
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  var draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      var box = child.getBoundingClientRect();
      var offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
