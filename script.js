var displayDays = function () {
  for (var i = 0; i < 5; i++) {
    document.querySelector(`#day-${i}`).innerText =
      moment().add(i, "days").format("dddd") + " ";
  }
};

$(function () {
  $("#datepicker").datepicker();
});

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
  for (var i = 0; i < 5; i++) {
    document.querySelector(`#place-${i}`).innerText = data[i].name;
  }
};
document.querySelector("#go-time").addEventListener("click", weatherSearch);
