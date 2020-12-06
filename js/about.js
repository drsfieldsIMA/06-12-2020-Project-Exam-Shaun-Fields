function logTime() {
    // first log the current date/time

    // if the counter is equal to 4 it means the function has been called 5 times (because we started the counter at 0)
    // cancel the timer - the logTime function won't be called again
    if(counter === 4) {

    // Find all the paragraph tags
        const generalParagraph = document.querySelectorAll("p");
    // set up a function to handle each paragraph of the node lists for the JSON object
            function handleEachPar(item) {
            //  console.log(item)
            //  Do a global find and replace of "the" and "replaced"  for every paragraph
            const formattedParagraph=item.textContent.replace(/the/g, "replaced").replace(/The/g, "Replaced");
            item.textContent = formattedParagraph;
            }

    generalParagraph.forEach(handleEachPar);
      
    //  Do a global find and replace of "the" and "replaced"  for every h1 tag

    const generalHeading = document.querySelector("h1");
    const formattedHeading=generalHeading.textContent.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    generalHeading.textContent = formattedHeading;
    
    clearInterval(intervalId);
         

    }

    // add one to the counter variable
    // this is shorthand for count = count + 1
    counter++;

}

// this is the variable we'll increment and use to check how of often the function has been called
let counter = 0;

// The timer's id will be stored in `intervalId`:
const intervalId = setInterval(logTime, 1000);
