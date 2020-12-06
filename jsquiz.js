
  (function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is the name of galaxy containg our solar system i.e sun, earth and mars?",
        answers: {
          a: "Andromeda", 
          b: "Sagittarius",  
          c: "Milky-way",
          d:"Ursa-Major"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the largest planet in the solar system",
        answers: {
          a: "Mars",  
          b: "Earth",
          c: "Jupitar",
          d: "Saturn"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the name of the NASA mission that first reached the moon?",
        answers: {
          a: "Apollo-11",
          b: "Perseverance-10",
          c: "Endeavour-5",
          d: "Soyuz-12"
        },
        correctAnswer: "d"
      }
    ];
     

    // (function() {
    //     var questions = [{
    // {
    //       {
    //       question: "Which country was behind putting the first satellite, the first animal and the first man into space?",
    //       choices: ["USA", "France", "Germany", "Russia", "China"],
    //       correctAnswer: "Russia"
    //     }, {
    //       question: "What does the E stand for in ESA?",
    //       choices: ["European", "Extra-terrastrail", "Entropy", "Eutrophy"],
    //       correctAnswer: "European"
    //     }, {
    //       question: "What is the name of the NASA mission that aims to put the first woman on the moon?",
    //       choices: ["Freya", "Artemis", "Pan", "Iona", "Aphrodite"],
    //       correctAnswer: "Artemis"
    //     }, {
    //       question: "What is the name of Space-X rocket that can be re-used a major breakthrough in space technology?",
    //       choices: ["Boudica", "Pegasus", "Hermes", "Falcon", "Charon"],
    //       correctAnswer: "Falcon"
    //     }];


  


  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  