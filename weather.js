const apikey = "b73d7d3d954573303897dfeb1296bddb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function CheckWeather(city) {
  const respone = await fetch(apiurl + city + `&appid=${apikey}`);
  if (respone.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await respone.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    let cel = data.main.temp;
    document.querySelector(".temp").innerHTML =
    Math.round(cel -273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./image/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./image/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  CheckWeather(searchbox.value);
});
