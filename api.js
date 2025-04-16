fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=288d420b34996916abbc55694e5f757c&units=metric')
//api 
.then (response => response.json())

.then (data => {
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature:" + data.main.temp + "\u00B0C";
})