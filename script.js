var button = $('.button')
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

button.on('click', function(){
  console.log(this.parentNode.children[0].value)
  var cityVal = this.parentNode.children[0].value
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityVal+'&appid=b0e340d681516cd40a2f81110f219ba5')
  .then(response => response.json())
  .then(data => console.log(data))

})