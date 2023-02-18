function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
