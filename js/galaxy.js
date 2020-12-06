const corsEnabledUrl  = "https://api.nasa.gov/planetary/apod?api_key=QcSfR7VpkjeKqLMSNgAgMJ25JzVAkrnD8hs3hquK&start_date=2017-07-08&end_date=2017-07-15";
//const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/ " + creatorsUrl;

console.log(corsEnabledUrl);

 fetch(corsEnabledUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleJson(json) { // ON DOM READY
        const data = json;
            target = $('#target');
        console.log(data);
        const data1 = json[0].url;
        console.log(data1);
        console.log(data.length);
        const resultsContainer = document.querySelector(".row.results");
           console.log(resultsContainer);
           let html = "";
        for(let i = 0; i < data.length; i++) {
//        html = '<div class="image-list">';
//            html += '<img src ="' + json[i].images[0].src + '" class="image-styles" />';
//            html += '<p class="image-title">' + data[i].name + '</p>';
//            html += '</div>';
//            target.append(html);
//         }
         let imageUrl = "https://via.placeholder.com/250";
// within the JSON object each URL is attached to an image label
        if (json[i].url) {
            imageUrl = json[i].url;
        }
        html += ` <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card">
                             <img class="image" src="${imageUrl}" alt="${data[i].title}">
                                <div class="details">
                                <h4 class="name">${data[i].title}</h4>
                            </div>
                        </div>
                    </div>
                    `
     }

     resultsContainer.innerHTML = html;
     console.log(resultsContainer);
    }; // end of on DOM READY