
console.log("yep it's working");

const key = "e334406534080de7629411f25edbd1a9"
// first i made a parks fetch to get all the parks name and location   
fetch("http://localhost:9099/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.table(parsedParks);
        parsedParks.forEach(park => {
          
       

            let lat = park.latitude
            let long = park.longitude


fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e334406534080de7629411f25edbd1a9/${lat},${long}`)
.then(function (response) {
    return response.json();
})
.then(function (weather) {
    weather = JSON.stringify(weather);
    weather = JSON.parse(weather);
    console.log(weather)
    let currently = weather.currently.summary
    let daily = weather.daily.summary;
    console.log(daily)
   

     
    let Dom = document.getElementById("park__form");
    let articleForm = document.createElement("article");
    articleForm.className = "positive";
    let parkName = document.createElement("h3");
    let parkState = document.createElement("p");
    let weatherState = document.createElement("li")
    let daily1 = document.createElement("li")
    daily1.textContent = daily;
    weatherState.textContent = currently;
    parkName.textContent = park.name;
    parkState.textContent = park.state;


    if (park.visited !== true) {
        articleForm.className = "negative";
    }
    Dom.appendChild(articleForm)
    articleForm.appendChild(parkName)
    articleForm.appendChild(parkState)
    articleForm.appendChild(weatherState)
    articleForm.appendChild(daily1)

        })
        });

    })