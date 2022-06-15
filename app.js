/*
Author: Babou Jobe
Role: Senior Software developer
Org: WYWM
 */
const apikey = "9455f19dc09d4881ad1d102f567e6b5a";


//When the page loads 
document.getElementById("winefilterLow").addEventListener("click", getTopFiveWines(15));
document.getElementById("winefilterMed").addEventListener("click", getTopFiveWines(25));
document.getElementById("winefilterHigh").addEventListener("click", getTopFiveWines(50));

function getTopFiveWines(maxPrice) {
    var numberOfWines = 5;
    var minrating = 0.8;
    var wine = "wine";
    var max = maxPrice;
    const myNaiveUrl = `https://api.spoonacular.com/food/wine/recommendation?apiKey=${apikey}&wine=${wine}&maxPrice=${max}&minRating=${minrating}&number=${numberOfWines}`;
    fetch(myNaiveUrl)
        .then((res) => res.json())
        .then(function (object) {
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    for (const key in element) {
                        if (Object.hasOwnProperty.call(element, key)) {
                            const wineDetails = element[key];
                            let text = "<div class='card'></div>" +
                                "<img src='" + wineDetails.imageUrl + "' class='card-img-top' alt='Wine Image'>" +
                                "<div class='card-body'>" +
                                "<h5 class='card-title'>" + wineDetails.title + "</h5>" +
                                "<p class='card-text'>" + wineDetails.description + "</p>" +
                                "<a href='#' class='btn btn-primary'>Go somewhere</a>" +
                                "</div>" +
                                "</div>";
                            document.getElementById("wineFilterResults").innerHTML = text;
                            // HTML CODES goes here
                        }
                    }
                }
            }
        })
        .catch((err) => console.log(err))
}
