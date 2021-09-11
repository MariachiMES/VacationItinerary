$(function () {
  var cityNames = [
    "Los Angeles",
    "San Francisco",
    "San Diego",
    "Oakland",
    "Portland",
    "Seattle",
    "Las Vegas",
    "Boise",
    "Phoenix",
    "Tucson",
    "Salt Lake City",
    "Denver",
    "Albuquerque",
    "Honolulu",
    "Maui",
    "Anchorage",
    "Fairbanks",
    "Cheyenne",
    "Great Falls",
    "Fargo",
    "Sioux Falls",
    "Omaha",
    "Wichita",
    "Oklahoma City",
    "Dallas",
    "Houston",
    "San Antonio",
    "New Orleans",
    "Minneapolis",
    "Milwaukee",
    "Des Moines",
    "St. Louis",
    "Kansas City",
    "Little Rock",
    "Chicago",
    "Indianapolis",
    "Nashville",
    "Louisville",
    "Atlanta",
    "Miami",
    "Tampa",
    "Orlando",
    "Charlotte",
    "Cleveland",
    "Cincinnati",
    "Detroit",
    "Baltimore",
    "Washington, D.C.",
    "Philadelphia",
    "Pittsburgh",
    "New York City",
    "Boston",
    "Newark",
    "Bristol",
  ];
  $("#city-name").autocomplete({
    source: cityNames,
  });
});

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
      apiKey
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
/*var listItem = document.createElement("li");
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);*/

/* PRACTICE!!!!!
 

var firstName = "Frank";
var lastName = "Almaraz";

var fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//Methods: toUpperCase, toLowerCase, indexOf/*/
