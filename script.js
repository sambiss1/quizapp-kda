// Using local Storage 
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");
const homeContent = document.querySelector("#home");

// Question box
const quizBox = document.querySelector("#quiz__box");
//const form = document.createElement("form");
//form.classList.add("main-form");
const form = document.querySelector("form")




// Create all questions 
const questions = [
    {
        id: 1,
        question: "Question 1",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "Correct answer",
            "False anwswer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 2,
        question: "Question 2",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "False answer",
            "Correct answer",
            "False answer"
        ]
    },
    {
        id: 3,
        question: "Question 3",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "False answer",
            "False answer",
            "Correct answer"
        ]
    },
    {
        id: 4,
        question: "Question 4",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "False answer",
            "Correct answer",
            "False answer"
        ]
    },
    {
        id: 5,
        question: "Question 5",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "False answer",
            "Correct answer",
            "False answer"
        ]
    },
    {
        id: 6,
        question: "Question 6",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "Correct answer",
            "False anwswer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 7,
        question: "Question 7",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "Correct answer",
            "False anwswer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 8,
        question: "Question 8",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "False answer",
            "Correct answer",
            "False answer"
        ]
    },
    {
        id: 9,
        question: "Question 9",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "Correct answer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 10,
        question: "Question 10",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "Correct answer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 11,
        question: "Question 11",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "Correct answer",
            "False anwswer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 13,
        question: "Question 13",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "Correct answer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 14,
        question: "Question 14",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "Correct answer",
            "False answer",
            "False answer"
        ]
    },
    {
        id: 15,
        question: "Question 15",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "False anwswer",
            "False answer",
            "Correct answer",
            "False answer"
        ]
    },
];



let indexQuestion = 0;


// Function for showing questions 
const showQuestionsFunction = (indexQuestion) => {
    // Question Title
    const questionTitle = document.querySelector(".question-title");
    // questionTitle.classList.add("presentation-text");

    // Question status
    const questionStatusContainer = document.querySelector(".questionstatus__container")

    // Question form
    const questionForm = document.querySelector(".question-form")

    // Question title
    let questionText = `<span>` + questions[indexQuestion].question + `</span>`;
    questionTitle.innerHTML = questionText;
    // Question status
    let status = `<div class="status">` +
        `<p class="question__number">` + "Question " + questions[indexQuestion].id + "/15" + `</p>` +
        `<div class="timercounter">` + "30" + `</div>` +
        `</div>`;
    // Question progress
    let progressContainer = `<div class="progressbar__container">` +
        `<div class="progressbar">` + `</div>`
        + `</div > `;


    // Anwers suggested
    const answerContainer = `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" >` +
        `<label for="answer">` + questions[indexQuestion].answerSuggested[3] + `</label>` +
        `</div>` +
        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" >` +
        `<label for="answer">` + questions[indexQuestion].answerSuggested[1] + `</label>` +
        `</div>` +
        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" >` +
        `<label for="answer">` + questions[indexQuestion].answerSuggested[2] + `</label>` +
        `</div>` + `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" >` +
        `<label for="answer">` + questions[indexQuestion].answerSuggested[0] + `</label>` +
        `</div>`;

    // Form buttons 
    let buttonsContainer = `<div class="buttonContainer">` +
        `<input type="button" value="Quitter" class="exitButton">` +
        `<input type="button" value="Suivant" class="nextButton" disabled>` +
        `</div>`

    // Show data
    questionStatusContainer.innerHTML = status + progressContainer;
    questionForm.innerHTML = answerContainer;
    questionForm.innerHTML += buttonsContainer;

    // User choice
    const answerChoice = document.querySelector(".answer__container");
    const answer = document.querySelector(".answer");
    const nextButton = document.querySelector(".nextButton");

    // Get user selected choice
    // From radio button
    const userAnswers = document.querySelectorAll("input[name='answer']")

    // From radio label 
    const labelAnswers = document.querySelectorAll(".answer__container");


    for (const userAnswer of userAnswers) {
        userAnswer.addEventListener("change", activeNextButton = (event) => {
            nextButton.disabled = false;
        });
    };
    for (const labelAnswer of labelAnswers) {
        labelAnswer.addEventListener("click", enableNextButton = (event) => {
            nextButton.disabled = false;
            

        })
    }



    // if next button is clicked
    nextButton.addEventListener("click", showNextQuestion = (event) => {

        if (indexQuestion == 14) {
            nextButton.disabled = true;
        } else {
            indexQuestion++;
            showQuestionsFunction(indexQuestion);
            console.log(indexQuestion);
        }
    })
    return;
}

// Home page form
form.addEventListener("submit", storeUserData = (event) => {
    event.preventDefault();
    // Store user data
    const usernameValue = username.value;
    const usermailValue = usermail.value; event.preventDefault();
    console.log(usernameValue);
    console.log(usermailValue);

    localStorage.setItem("user-name", usernameValue);
    localStorage.setItem("user-mail", usermailValue);


    const userNameResponse = localStorage.getItem("user-name");
    const userMailResponse = localStorage.getItem("user-mail");

    console.log(userNameResponse);
    console.log(userMailResponse);
    homeContent.style.display = "none";
    quizBox.classList.add("show");

    form.reset();
    showQuestionsFunction(0);

});







