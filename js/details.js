const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const creatorsUrl = "https://api.nasa.gov/planetary/apod?api_key=QcSfR7VpkjeKqLMSNgAgMJ25JzVAkrnD8hs3hquK&start_date=2017-07-08&end_date=2017-07-16";
const detailUrl = `${creatorsUrl}${id}`;
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + detailUrl;

console.log(corsEnabledUrl);

fetch(detailUrl)
     .then(function(response) {
         return response.json();
     })
     .then(function(json) {
        createCharacter(json);
    });
//    .catch(function() {
//        document.location.href = "error.html";
//       });

//     })
//     .catch(function() {
//      document.location.href = "error.html";
//     });

function createCharacter(json) {
console.dir(json);
imageUrl=json.images[0].src;
console.dir(imageUrl);


    // get the loader div
    const loader = document.querySelector(".breadcrumb-nav");
    // hide the loader
    loader.style.display = "none";

    // get detail container div
    const detailContainer = document.querySelector(".detail-container");
    // remove the hidden class
    detailContainer.classList.remove("hidden");

    const image = document.querySelector(".details-image");
    image.alt = json.name;

        // set the img.src property depending on what properties are available in the JSON
        if (json.images[0]) {
            image.src = json.images[0].src;
        } else if (json.image_background) {
            image.src = json.image_background;
        } else {
            image.src = "https://via.placeholder.com/250";
        }

    const name = document.querySelector("h1");
    name.innerHTML = json.name;
    
    const actual_price=json.prices.price/100;
    console.dir(actual_price)
    const gameCount = document.querySelector("#status");
    gameCount.innerHTML = actual_price;

    const originName = document.querySelector("#origin");
    originName.innerHTML = json.short_description;

//   title the page with the character name and the previous document title

    document.title = json.name + " | " + document.title;
}
