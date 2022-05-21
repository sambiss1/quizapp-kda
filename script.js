// Using local Storage 
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");
const homeContent = document.querySelector("#home");

// Question box
const quizBox = document.querySelector("#quiz__box");

// Score board 
const scoreBoard = document.querySelector("#score__board");

// Main form 
const form = document.querySelector("form")

// Back to home button 
const backToHome = document.querySelector(".backToHome");

// Create all questions 
const questions = [
    {
        id: 1,
        question: "Question 1",
        correctAnswer: "Correct answer",
        answerSuggested: [
            "Correct answer",
            "False answer",
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

// indexQuestion
let indexQuestion = 0;

// User score
let userScore = 0;

isChecked = false;

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
        `<div class="timercounter">` + `</div>` +
        `</div>`;
    // Question progress
    let progressContainer = `<div class="progressbar__container">` +
        `<div class="progressbar">` + `</div>`
        + `</div > `;


    // Anwers suggested
    const answerContainer = `<div class="answer__container">` +
        `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexQuestion].answerSuggested[3]}">` +
        `<label for="firstAnswerSuggested">` + questions[indexQuestion].answerSuggested[3] + `</label>` +
        `</div>` +
        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="secondAnswerSuggested" value="${questions[indexQuestion].answerSuggested[1]}">` +
        `<label for="secondAnswerSuggested">` + questions[indexQuestion].answerSuggested[1] + `</label>` +
        `</div>` +
        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="thirdAnswerSuggested" value="${questions[indexQuestion].answerSuggested[2]}" >` +
        `<label for="thirdAnswerSuggested">` + questions[indexQuestion].answerSuggested[2] + `</label>` +
        `</div>` + `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="fourthAnswerSuggested" value="${questions[indexQuestion].answerSuggested[0]}">` +
        `<label for="fourthAnswerSuggested">` + questions[indexQuestion].answerSuggested[0] + `</label>` +
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
    // const answer = document.querySelector(".answer");
    const nextQuestionButton = document.querySelector(".nextButton");

    // Get user selected choice
    // From radio button
    const userAnswers = document.querySelectorAll("input[name='answer']");

    // Check answer

    const checkAnswer = () => {
        for (let i = 0; i < userAnswers.length; i++) {
            userAnswers[i].addEventListener("change", checked = (isChecked) => {
                nextQuestionButton.disabled = false;
                isChecked = true;
                console.log(userAnswers[i].value);
                let correctAnswer = questions[indexQuestion].correctAnswer;
                if (userAnswers[i].value == correctAnswer) {
                    if (isChecked == true) {
                        userScore++;
                        console.log("If is correct answer" + userScore);
                        console.log(userScore);
                        return;
                    } else {
                        userScore = userScore;
                        console.log("User score if we recheck on true answer " + userScore);
                    };
                } else {
                    userScore = userScore;
                    console.log(userScore);
                };
                isChecked = false;
            });

        };

    };

    // nextQuestion
    const nextQuestion = () => {
        if (indexQuestion < questions.length - 1) {
            indexQuestion++;
            showQuestionsFunction(indexQuestion);
            console.log(userScore);
        } else {
            // quizBox.classList.remove("show");
            // homeContent.style.display = 'none';
            // scoreBoard.style.display = "flex";
            nextQuestionButton.disabled = true;
            // nextQuestionButton.style.display = "none";
        }
        startProgress(100);
        checkAnswer();
        isChecked = false;
    }
    nextQuestionButton.addEventListener("click", showNextQuestion = (event) => {
        nextQuestion();
    });

    // Timer
    const timeCounter = document.querySelector(".timercounter");
    let countTime = 0;
    const startTime = (time) => {

        const timer = () => {
            timeCounter.textContent = time;
            time--;
            if (time < 9) {
                let addZero = timeCounter.textContent;
                timeCounter.textContent = "0" + addZero;
            }
            if (time <= 0) {
                clearInterval(countTime);
                nextQuestion();
            }
        }
        countTime = setInterval(timer, 1000)
    }

    // Progress bar 
    const progressBar = document.querySelector(".progressbar");
    const startProgress = (timeBar) => {
        const timerBar = () => {
            timeBar -= 1.66666665; // Decremente progressbar
            progressBar.style.width = timeBar + "%";
            if (timeBar < 1) {
                clearInterval(progressLine);
            };

        };
        progressLine = setInterval(timerBar, 1000);
    }

    // start timer and progress bar decrement
    startTime(59);
    startProgress(100);
    checkAnswer();

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


    const userName = localStorage.getItem("user-name");
    const userMail = localStorage.getItem("user-mail");

    homeContent.style.display = "none";
    quizBox.classList.add("show");

    form.reset();
    showQuestionsFunction(0);

});


// Back to home function 
backToHome.addEventListener("click", homeReturn = (event) => {
    quizBox.classList.remove("show");
    scoreBoard.style.display = "none";
    homeContent.style.display = "flex";
});

const showUserScoreBoard = (event) => { }
