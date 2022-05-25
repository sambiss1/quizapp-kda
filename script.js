/*
    This file contains all functions for Quiz Application


*/
// User name and user mail
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

// Answer selected value 
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
    let questionText = `<span> ${questions[indexQuestion].question} </span>`;
    questionTitle.innerHTML = questionText;
    // Question status
    let status = `<div class="status">` +
        `<p class="question__number">Question  ${questions[indexQuestion].id}/15 </p>` +
        `<div class="timercounter">` + `</div>` +
        `</div>`;
    // Question progress
    let progressContainer = `<div class="progressbar__container">` +
        `<div class="progressbar">` + `</div>`
        + `</div > `;

    // Anwers suggested
    const answerContainer = `<div class="answer__container">` +
        
        `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${questions[indexQuestion].answerSuggested[3]}">` +
        `<label for="firstAnswerSuggested"> ${questions[indexQuestion].answerSuggested[3]} </label>` +
        `</div>` +
        `<div class="answer__container">` +
        
        `<input type="radio" class="answer" name="answer" id="secondAnswerSuggested" value="${questions[indexQuestion].answerSuggested[1]}">` +
        `<label for="secondAnswerSuggested"> ${questions[indexQuestion].answerSuggested[1]} </label>` +
        `</div>` +
        `<div class="answer__container">` +
        
        `<input type="radio" class="answer" name="answer" id="thirdAnswerSuggested" value="${questions[indexQuestion].answerSuggested[2]}" >` +
        `<label for="thirdAnswerSuggested">  ${questions[indexQuestion].answerSuggested[2]}</label>` +
        `</div>` + `<div class="answer__container">` +
        
        `<input type="radio" class="answer" name="answer" id="fourthAnswerSuggested" value="${questions[indexQuestion].answerSuggested[0]}">` +
        `<label for="fourthAnswerSuggested">${questions[indexQuestion].answerSuggested[0]}</label>` +
        `</div>`;

    // Quiz buttons
    let quizButtonsContainer = `<div class="buttonContainer">` +
        `<input type="button" value="Quitter" class="exitButton">` +
        `<input type="button" value="Suivant" class="nextButton" disabled>` +
        `</div>`

    // Show question, answer suggested and button
    // Add all of that in the DOM
    questionStatusContainer.innerHTML = status + progressContainer;
    questionForm.innerHTML = answerContainer;
    questionForm.innerHTML += quizButtonsContainer;

    // Select User choice
    const answerChoice = document.querySelectorAll(".answer__container");

    // Select nextbutton
    const nextQuestionButton = document.querySelector(".nextButton");

    // Get user selected choice
    // From radio button
    const userAnswers = document.querySelectorAll("input[name='answer']");

    // On check(select answer)
    const checkAnswer = () => {
        for (const answer of userAnswers) {
            answer.addEventListener("click", changeAnswer = (isChecked) => {
                // Change isChecked value 
                isChecked = true;
                if (isChecked != false) {
                    // Enable nextButton
                    nextQuestionButton.disabled = false;

                    // Store answer value in ohter variable 
                    answerSelected = answer.value;
                } else {
                    answerSelected = "";
                };
            });
        };
    };

    // nextQuestion function
    const nextQuestion = () => {
        // Clear timer interval
        clearInterval(countTime);
        // Restart timer
        countTime = 0;

        /* Check questions status ()
            Check if we're not on last question
        */
        if (indexQuestion < questions.length - 1) {
            // Get user current score
            getUserScore();

            // Change isChecked value to false
            isChecked = false;

            // Incremente indexQuestion 
            indexQuestion++;

            // Show next question
            showQuestionsFunction(indexQuestion);

            // Restart progress bar
            startProgress(100);

        } else {
            // On last question 
            // Get user current score
            getUserScore();

            // Display (show) user final score(Score board)
            scoreBoard.style.display = "flex";
            showUserScoreBoard();

            // Hide quiz box
            quizBox.classList.remove("show");
        }
    }

    // Get user Score 
    const getUserScore = () => {
        // Get correct answer from questions
        let correctAnswer = questions[indexQuestion].correctAnswer;

        // Check if useranswer is correct
        if (answerSelected == correctAnswer) {
            // if is correct, incremente score
            userScore++;
            // Change user answer to empty string
            answerSelected = "";

        } else {
            // Else 
            // User score dont change
            userScore = userScore;
        }
    }

    // Next questions button 
    nextQuestionButton.addEventListener("click", showNextQuestion = (event) => {
        // Call next question function
        nextQuestion();
    });

    // Timer
    const timeCounter = document.querySelector(".timercounter");
    // Declare timer value to 0
    let countTime = 0;
    // Function for starting timer
    const startTime = (time) => {
        const timer = () => {
            // Show timer on page
            timeCounter.textContent = time;

            // Decremente time
            time--;

            // If time is less than 9 we add zero to number(integer)
            if (time < 9) {
                let addZero = timeCounter.textContent;
                timeCounter.textContent = "0" + addZero;
            }
            // If time is less than 0 we stop timer, and call next question function
            if (time <= 0) {
                clearInterval(countTime);
                nextQuestion();
            };
        };
        // Timer interval
        countTime = setInterval(timer, 1000);
    };

    // Progress bar 
    const progressBar = document.querySelector(".progressbar");
    let progressLine = 0;
    // Function for starting progress bar
    const startProgress = (widthBar) => {
        // Time for decrementation progress bar
        const widthTimerBar = () => {
            // Decremente progressbar
            widthBar -= 1.66666665;//0.833333325;
            // Here decremantation is on progress bar width
            progressBar.style.width = widthBar + "%";

            // If progressbar widthBar is less than 1, we stop 
            if (widthBar < 1) {
                clearInterval(progressLine);
            };
        };
        progressLine = setInterval(widthTimerBar, 1000);
    };

    // start timer and progress bar decrement
    startTime(59);
    startProgress(100);
    checkAnswer();

    // Exit button 
    const exitButton = document.querySelector(".exitButton");

    // Exit quiz 
    const exitQuiz = () => {
        // Stop timer 
        clearInterval(countTime);
        countTime = 0;

        // Get user current score
        getUserScore();

        // Show user score board
        scoreBoard.style.display = "flex";
        showUserScoreBoard();

        // Hide quiz box
        quizBox.classList.remove("show");
    };

    // On exiting quiz
    exitButton.addEventListener("click", exit = (event) => {
        // Call exit quiz function
        exitQuiz();
    });
};

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
        showQuestionsFunction(0);
    };
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

// User score board elements
const username__response = document.querySelector(".username__response");
const usermail__response = document.querySelector(".usermail__response");
const userscore__container = document.querySelector(".userscore__container");
const icon__container = document.querySelector(".icon__container");
const lasIcon = document.querySelector(".lni");

// Function for get and show user final score
const showUserScoreBoard = (event) => {
    // Get user name and user mail
    const userName = localStorage.getItem("user-name");
    const userMail = localStorage.getItem("user-mail");

    // Show user name and usermail
    const userNameResponse = `<h2>${userName}</h2>`;
    const userMailResponse = `<p>${userMail}</p>`;

    // Show user score
    const userFinalScore = `<p class="userscore">${userScore}/15</p>`;


    // If user score is less than 7
    if (userScore <= 7) {
        // Show failed icon
        icon__container.classList.add("failed");
        lasIcon.classList.add("lni-cross-circle");


    } else {
        // Else 
        // Show success icon
        icon__container.classList.add("success");
        lasIcon.classList.add("lni-checkmark-circle");
    }

    // Add it to the DOM
    username__response.innerHTML = userNameResponse;
    usermail__response.innerHTML = userMailResponse;
    userscore__container.innerHTML = userFinalScore;
};
// End