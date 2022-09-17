localStorage.clear();
// Function for findind city
function findCity() {
    var cityName = $("#cityName")[0].value.trim().toLowerCase();
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=9352f5f8de34f97f9b8ff0f2b9652df8";
    fetch(apiURL)
  .then((response) => response.json())
  .then((data) => { 
    console.log(data.main.temp)
    futureClima (data.coord.lon, data.coord.lat) 
});

}

$('#search-button').on('click', findCity);



function futureClima(lon,lat) {
    var apiURL =  
    fetch(apiURL)
  .then((response) => response.json())
  .then((data) => { 
    console.log(data) 
});
}

// data.list[0].dt_txt.split(' ')[1]