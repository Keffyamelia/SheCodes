let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

//   // write your code here

let city = prompt("Enter a city");

if (city in weather) {
  let temperatureC = Math.round(weather[city].temp);
  let temperatureF = Math.round((temperatureC * 9) / 5 + 32);
  let humidity = Math.round(weather[city].humidity);

  alert(
    "It is currently " +
      temperatureC +
      "°C (" +
      temperatureF +
      "°F) in " +
      city +
      " with a humidity of " +
      humidity +
      "%"
  );
} else {
  alert(
    "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
      city
  );
}
