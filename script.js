// Using local Storage 
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");
const homeContent = document.querySelector("#home");

// Question box
const quizBox = document.querySelector("#quiz__box");

// Score board 
const scoreBoard = document.querySelector("#score__board");

// Main form 
const homePageForm = document.querySelector("form")

// Back to home button 
const backToHome = document.querySelector(".backToHome");

// Create all questions 
const questions = [
    // Question 1
    {
        id: 1,
        question: "Which of the following is an advantage of using JavaScript?",
        correctAnswer: "All of the above",
        answerSuggested: [
            "Immediate feedback to the visitors",
            "Increased interactivity",
            "All of the above",
            "Less server interaction"
        ]
    },
    // Question 2
    {
        id: 2,
        question: "How can you get the total number of arguments passed to a function ?",
        correctAnswer: "Using arguments.length property",
        answerSuggested: [
            "None of the above.",
            "Using arguments.length property",
            "Using args.length property",
            "Both of the above"
        ]
    },
    // Question 3
    {
        id: 3,
        question: "Which of the following function of String object creates an HTML hypertext link that requests another URL ?",
        correctAnswer: "link()",
        answerSuggested: [
            "link()",
            "sub()",
            "sup()",
            "small()"
        ]
    },
    // Question 4
    {
        id: 4,
        question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
        correctAnswer: "reduce()",
        answerSuggested: [
            "reduceRight()",
            "reduce()",
            "pop()",
            "push()"
        ]
    },
    // Question 5
    {
        id: 5,
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        correctAnswer: "slice()",
        answerSuggested: [
            "slice()",
            "reverse()",
            "shift()",
            "some()"
        ]
    },
    // Question 6
    {
        id: 6,
        question: "Which built-in method reverses the order of the elements of an array?",
        correctAnswer: "reverse()",
        answerSuggested: [
            "changeOrder(order)",
            "sort(order)",
            "reverse()",
            "None of the above"
        ]
    },
    //QUestion 7
    {
        id: 7,
        question: "Which built-in method calls a function for each element in the array?",
        correctAnswer: "forEach()",
        answerSuggested: [
            "loop()",
            "forEach()",
            "while()",
            "None of the above"
        ]
    },
    // Question 8
    {
        id: 8,
        question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        correctAnswer: "split()",
        answerSuggested: [
            "split()",
            "slice()",
            "replace()",
            "search()"
        ]
    },
    // Question 9
    {
        id: 9,
        question: "Which of the following function of Number object defines how many total digits to display of a number?",
        correctAnswer: "toPrecision()",
        answerSuggested: [
            "toExponential()",
            "toLocaleString()",
            "toPrecision()",
            "toFixed()"
        ]
    },
    // Question 10
    {
        id: 10,
        question: "Which of the following function of String object returns the calling string value converted to upper case?",
        correctAnswer: "toUpperCase()",
        answerSuggested: [
            "toLocaleUpperCase()",
            "toUpperCase()",
            "substring()",
            "toString()",
        ]
    },
    // Question 11
    {
        id: 11,
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        correctAnswer: "push()",
        answerSuggested: [
            "last()",
            "None of the above.",
            "push()",
            "put()"
        ]
    },
    // Question 12
    {
        id: 12,
        question: "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
        correctAnswer: "concat()",
        answerSuggested: [
            "some()",
            "pop()",
            "concat()",
            "push()"
        ]
    },
    // Question 13
    {
        id: 13,
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        correctAnswer: "join()",
        answerSuggested: [
            "concat()",
            "join()",
            "pop()",
            "map()"
        ]
    },
    // Question 14
    {
        id: 14,
        question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
        correctAnswer: "window.location='http://www.newlocation.com'",
        answerSuggested: [
            "document.location='http://www.newlocation.com'",
            "navigator.location='http://www.newlocation.com'",
            "browser.location='http://www.newlocation.com'",
            "window.location='http://www.newlocation.com'"
        ]
    },
    // Question 15
    {
        id: 15,
        question: "Which of the following is correct about features of JavaScript?",
        correctAnswer: "All of the above",
        answerSuggested: [
            "JavaScript is a lightweight, interpreted programming language",
            "JavaScript is designed for creating network-centric applications",
            "All of the above",
            "JavaScript is complementary to and integrated with Java"
        ]
    },
];

// indexQuestion
let indexQuestion = 0;

// User score
let userScore = 0;

// Check if answer is checked 
let isChecked = false;

// Answer selected variables 
let answerSelected = "";

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
    const answerChoice = document.querySelectorAll(".answer__container");
    // const answer = document.querySelector(".answer");
    const nextQuestionButton = document.querySelector(".nextButton");

    // Get user selected choice
    // From radio button
    const userAnswers = document.querySelectorAll("input[name='answer']");

    // Check answer
    const checkAnswer = (isChecked) => {
        for (let i = 0; i < userAnswers.length; i++) {
            userAnswers[i].addEventListener("change", changeAnswer = (isChecked) => {
                isChecked = true;
                if (isChecked != false) {
                    nextQuestionButton.disabled = false;
                    answerSelected = userAnswers[i].value;
                    console.log("Answer selected : " + answerSelected);
                    console.log("On cheked " + isChecked);
                } else {
                    answerSelected = 0;
                }
            });

        };

        return;
    };

    // nextQuestion
    const nextQuestion = () => {
        clearInterval(countTime);
        countTime = 0;
        if (indexQuestion < questions.length - 1) {
            isChecked = false;
            indexQuestion++;
            showQuestionsFunction(indexQuestion);
            startProgress(100);
            getUserScore();
        } else {
            getUserScore();
            console.log("On last question : " + userScore);
            scoreBoard.style.display = "flex";
            showUserScoreBoard();
            quizBox.classList.remove("show");
            nextQuestionButton.style.display = "none";

        }
    }

    // Get user Score 
    const getUserScore = () => {
        let correctAnswer = questions[indexQuestion].correctAnswer;
        if (answerSelected == correctAnswer) {
            userScore++;
            answerSelected = "";
            console.log("Return if is Checked " + userScore);
        } else {
            userScore = userScore;
            console.log("Return if isnot Checked :" + userScore);
        }
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
        countTime = setInterval(timer, 1000);

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

    // Exit button 
    const exitButton = document.querySelector(".exitButton");

    // Exit quiz 
    const exitQuiz = () => {
        clearInterval(countTime);
        countTime = 0;
        getUserScore();
        scoreBoard.style.display = "flex";
        showUserScoreBoard();
        quizBox.classList.remove("show");
        nextQuestionButton.style.display = "none";
    }
    exitButton.addEventListener("click", exit = (event) => {
        exitQuiz();
    })
}

let nameErrorMessage = document.createElement("span");
let mailErrorMessage = document.createElement("span");
nameErrorMessage.textContent = "";
mailErrorMessage.textContent = "";

username.after(nameErrorMessage);
usermail.after(mailErrorMessage);

// Home page form
homePageForm.addEventListener("submit", storeUserData = (event) => {
    event.preventDefault();
    // Assign user data to variables 
    const usernameValue = username.value;
    const usermailValue = usermail.value;


    nameErrorMessage.style.color = "red";
    mailErrorMessage.style.color = "red";
    // Validator
    if (username.value == "") {
        username.style.border = ".1em solid red";
        nameErrorMessage.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";

        if (usermail.value == "") {
            usermail.style.border = ".1em solid red";
            mailErrorMessage.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz."
            for (let i = 0; i < usermailValue.length; i++) {
                if (usermailValue[i] != "@") {
                    usermail.style.border = ".1em solid red";
                    mailErrorMessage.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz."
                }
            }
        }
    }
    else {
        // Store user data
        localStorage.setItem("user-name", usernameValue);
        localStorage.setItem("user-mail", usermailValue);

        homeContent.style.display = "none";
        quizBox.classList.add("show");
        homePageForm.reset();
        showQuestionsFunction(indexQuestion);
    }

});


// Back to home function 
backToHome.addEventListener("click", homeReturn = (event) => {
    quizBox.classList.remove("show");
    scoreBoard.style.display = "none";
    homeContent.style.display = "flex";
    homePageForm.reset();
    userScore = 0;
    answerSelected = "";
});

// 
const username__response = document.querySelector(".username__response");
const usermail__response = document.querySelector(".usermail__response");
const userscore__container = document.querySelector(".userscore__container");
const icon__container = document.querySelector(".icon__container");
const lasIcon = document.querySelector(".lnr");
const showUserScoreBoard = (event) => {
    const userName = localStorage.getItem("user-name");
    const userMail = localStorage.getItem("user-mail");
    const userNameResponse = `<h2>` + userName + `</h2>`;
    const userMailResponse = `<p>` + userMail + `</p>`;
    const userFinalScore = `<p class="userscore">` + userScore + `/15</p>`;

    if (userScore <= 7) {
        icon__container.classList.add("failed");
        lasIcon.classList.add("lnr-cross-circle");
    } else {
        icon__container.classList.add("success");
        lasIcon.classList.add("lnr-checkmark-circle");
    }
    username__response.innerHTML = userNameResponse;
    usermail__response.innerHTML = userMailResponse;
    userscore__container.innerHTML = userFinalScore;
}
