localStorage.clear();
// Function for findind city
function findCity() {
    var cityName = titleCase($("#cityName")[0].value.trim());
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=9352f5f8de34f97f9b8ff0f2b9652df8";
}
