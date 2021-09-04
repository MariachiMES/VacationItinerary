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
