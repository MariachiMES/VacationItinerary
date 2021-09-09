setInterval(function () {
  //get the current day and time using moment.js
  var toDay = moment().format("dddd");
  var dayOne = moment().add(1, "days").format("dddd");
  var dayTwo = moment().add(2, "days").format("dddd");
  var dayThree = moment().add(3, "days").format("dddd");
  var dayFour = moment().add(4, "days").format("dddd");
  var dayFive = moment().add(5, "days").format("dddd");
  var daySix = moment().add(6, "days").format("dddd");

  //gets a handle on the text with the id 'dayEl' in the html
  var currentDay = document.querySelector("#day-0");
  var dayOneEl = document.querySelector("#day-1");
  var dayTwoEl = document.querySelector("#day-2");
  var dayThreeEl = document.querySelector("#day-3");
  var dayFourEl = document.querySelector("#day-4");
  var dayFiveEl = document.querySelector("#day-5");
  var daySixEl = document.querySelector("#day-6");
  //set the day text in the #dayEl html
  currentDay.innerText = toDay;
  dayOneEl.innerText = dayOne;
  dayTwoEl.innerText = dayTwo;
  dayThreeEl.innerText = dayThree;
  dayFourEl.innerText = dayFour;
  dayFiveEl.innerText = dayFive;
  daySixEl.innerText = daySix;
  //run it every 1000 milliseconds
}, 1000);

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
