
fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun,mx&appid=57d3e04d4416d04180e8bdc5dac64198&units=metric")
.then(response => response.json())
.then(data => {
  console.log(data);
  console.log(data.main.temp);
  temperature.textContent = "Current Temperature: " + data.main.temp + "\u00b0C";
})
