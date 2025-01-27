const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
//q={city name}&appid={API key}
const API_KEY = "*******************";

let ele = document
  .getElementById("button")
  .addEventListener("click", getWeatherData);

async function getWeatherData(event) {
  event.preventDefault();
  cityName = document.getElementById("CityName").value;
  let response = await fetch(WEATHER_API + `q=${cityName}&appid=${API_KEY}`);
  let resjson = await response.json(); //extract JSON from the http response

  try {
    let resObj = createResult(cityName, resjson);
    createHtmlElement(resObj);
  } catch (err) {
    let data = document.getElementById("weatherData");
    while (data.firstChild) {
      data.firstChild.remove();
    }
    let errorPara = document.createElement("p");
    errorPara.innerHTML = `Error occurred. Please check the entered city name.`;
    data.appendChild(errorPara);
  }
}

function createResult(cityName, json) {
  let camelCaseCityName =
    cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();
  let resObj = {
    cityName: camelCaseCityName,
    currenttemperature: json.main.temp - 273.15 + "°C",
    humidity: json.main.humidity + " hPa",
    windSpeed: json.wind.speed + " meter/sec",
  };
  return resObj;
}

function createHtmlElement(resObj) {
  let data = document.getElementById("weatherData");
  while (data.firstChild) {
    data.firstChild.remove();
  }

  let cityPara = document.createElement("p");
  cityPara.innerHTML = `City : ${resObj.cityName}`;
  data.appendChild(cityPara);

  let temperaturePara = document.createElement("p");
  temperaturePara.innerHTML = `Temperature : ${resObj.currenttemperature}`;
  data.appendChild(temperaturePara);

  let humidityPara = document.createElement("p");
  humidityPara.innerHTML = `Humidity : ${resObj.humidity}`;
  data.appendChild(humidityPara);

  let windSpeedPara = document.createElement("p");
  windSpeedPara.innerHTML = `WindSpeed : ${resObj.windSpeed}`;
  data.appendChild(windSpeedPara);
}
