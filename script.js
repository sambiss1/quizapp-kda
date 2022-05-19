// Using local Storage 
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");



const form = document.querySelector("form");

// form.addEventListener("submit", storeUserData = (event) => {
//     const usernameValue = username.value;
//     const usermailValue = usermail.value; event.preventDefault();
//     console.log(usernameValue);
//     console.log(usermailValue);

//     localStorage.setItem("user-name", usernameValue);
//     localStorage.setItem("user-mail", usermailValue);


//     const userNameResponse = localStorage.getItem("user-name");
//     const userMailResponse = localStorage.getItem("user-mail");

//     console.log(userNameResponse);
//     console.log(userMailResponse);
// })

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
]

// Active next button 
const nextButton = document.querySelector(".nextButton");
document.addEventListener("DOMContentLoaded", showContent = (event) => {
    // Question Title
    const questionTitle = document.createElement("p");
    questionTitle.classList.add("presentation-text");


    // Question status
    const questionStatusContainer = document.createElement("div");
    questionStatusContainer.classList.add("questionstatus__container");

    // Form (Answers suggested)
    const form = document.createElement("form");
    form.classList.add("main-form");

    for (let i = 0; i < questions.length; i++) {

        // Question title
        let questionText = `<span class="presentation-text">` + questions[0].question + `</span>`;
        questionTitle.innerHTML = questionText;

        // Question status
        let status = `<div class="status">` +
            `<p class="question__number">` + "Question " + questions[0].id + "/15" + `</p>` +
            `<div class="timercounter">` + "30" + `</div>` +
            `</div>`;
        // Question progress
        let progressContainer = `<div class="progressbar__container">` +
            `<div class="progressbar">` + `</div>`
            + `</div > `;
        questionStatusContainer.innerHTML = status + progressContainer;

        // Anwers suggested
        for (let i = 0; i < questions[0].answerSuggested.length; i++) {
            const answerContainer = `<div class="answer__container">` +
                `<input type="radio" class="answer" name="answer" >` +
                `<label>` + questions[0].answerSuggested[3] + `</label>` +
                `</div>` +
                `<div class="answer__container">` +
                `<input type="radio" class="answer" name="answer" >` +
                `<label>` + questions[0].answerSuggested[1] + `</label>` +
                `</div>` +
                `<div class="answer__container">` +
                `<input type="radio" class="answer" name="answer" >` +
                `<label>` + questions[0].answerSuggested[2] + `</label>` +
                `</div>` + `<div class="answer__container">` +
                `<input type="radio" class="answer" name="answer" >` +
                `<label>` + questions[0].answerSuggested[0] + `</label>` +
                `</div>`;
            form.innerHTML = answerContainer;
        }

        // Form buttons 
        let buttonsContainer = `<div class="buttonContainer">` +
            `<input type="button" value="Quitter" class="exitButton">` +
            `<input type="submit" value="Suivant" class="nextButton" disabled>` +
            `</div>`
        form.innerHTML += buttonsContainer;
    }
    quizBox.appendChild(questionTitle);
    quizBox.appendChild(questionStatusContainer);
    quizBox.appendChild(form);

    // User choice
    let answerChoice = document.querySelector(".answer__container");
    let answer = document.querySelector(".answer");
    let nextButton = document.querySelector(".nextButton");
    answerChoice.addEventListener("click", choiceAnswer = (event) => {
        answer.setAttribute("checked", "true")
        answerChoice.classList.add("cliked");
        nextButton.disabled = false;

    })


})
// Show question
const quizBox = document.querySelector(".quiz__box");
const showQuestions = document.createElement("button");



