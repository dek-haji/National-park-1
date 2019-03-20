
console.log("yep it's working");

fetch("http://localhost:9099/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.log(parsedParks);
        parsedParks.forEach(park => {
            let Dom = document.getElementById("park__form");
            let articleForm = document.createElement("article");
            articleForm.className = "positive";
            let parkName = document.createElement("h3");
            let parkState = document.createElement("p");
            parkName.textContent = park.name;
            parkState.textContent = park.state;


            if (park.visited !== true) {
                articleForm.className = "negative";
            }
            Dom.appendChild(articleForm)
            articleForm.appendChild(parkName)
            articleForm.appendChild(parkState)


        });

    })