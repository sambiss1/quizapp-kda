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
    const questionForm = document.querySelector(".question-form");
    // Fetching data
    const loadData = async (data) => {

        await fetch("./questions.json")

            .then(response => {
                if (response.ok) {
                    console.log("Load data");
                    return response.json()
                }

            })
            .then(data => {
                console.log(`Data ${data}`)
                // Question title
                let questionText = `<span> ${data[indexQuestion].question} </span>`;
                questionTitle.innerHTML = questionText;


                // Question status
                let status = `<div class="status">` +
                    `<p class="question__number">Question  ${indexQuestion + 1}/15 </p>` +
                    `<div class="timercounter">` + `</div>` +
                    `</div>`;
                // Question progress
                let progressContainer = `<div class="progressbar__container">` +
                    `<div class="progressbar">` + `</div>`
                    + `</div > `;

                // Show question, answer suggested and button
                // Add all of that in the DOM
                questionStatusContainer.innerHTML = status + progressContainer;
                // Anwers suggested
                const answerContainer = `<div class="answer__container">` +

                    `<input type="radio" class="answer" id="firstAnswerSuggested" name="answer" value="${data[indexQuestion].answerSuggested[3]}">` +
                    `<label for="firstAnswerSuggested"> ${data[indexQuestion].answerSuggested[3]} </label>` +
                    `</div>` +
                    `<div class="answer__container">` +

                    `<input type="radio" class="answer" name="answer" id="secondAnswerSuggested" value="${data[indexQuestion].answerSuggested[1]}">` +
                    `<label for="secondAnswerSuggested"> ${data[indexQuestion].answerSuggested[1]} </label>` +
                    `</div>` +
                    `<div class="answer__container">` +

                    `<input type="radio" class="answer" name="answer" id="thirdAnswerSuggested" value="${data[indexQuestion].answerSuggested[2]}" >` +
                    `<label for="thirdAnswerSuggested">  ${data[indexQuestion].answerSuggested[2]}</label>` +
                    `</div>` + `<div class="answer__container">` +

                    `<input type="radio" class="answer" name="answer" id="fourthAnswerSuggested" value="${data[indexQuestion].answerSuggested[0]}">` +
                    `<label for="fourthAnswerSuggested">${data[indexQuestion].answerSuggested[0]}</label>` +
                    `</div>`;

                questionForm.innerHTML = answerContainer;

                // Quiz buttons
                let quizButtonsContainer = `<div class="buttonContainer">` +
                    `<input type="button" value="Quitter" class="exitButton">` +
                    `<input type="button" value="Suivant" class="nextButton" disabled>` +
                    `</div>`
                questionForm.innerHTML += quizButtonsContainer;

                // Select User choice
                // const answerChoice = document.querySelectorAll(".answer__container");

                // Select nextbutton
                const nextQuestionButton = document.querySelector(".nextButton");

                // Get user selected choice
                // From radio button
                const userAnswers = document.querySelectorAll("input[name='answer']");

                // On check(select answer)
                const checkAnswer = () => {
                    for (const answer of userAnswers) {
                        answer.addEventListener("click", changeAnswer = () => {

                            // Enable nextButton
                            nextQuestionButton.disabled = false;

                            // Store answer value in ohter variable 
                            answerSelected = answer.value;

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
                    if (indexQuestion < data.length - 1) {
                        // Get user current score
                        getUserScore();

                        // Change isChecked value to false
                        isChecked = false;

                        // Incremente indexQuestion 
                        indexQuestion++;

                        // Show next question
                        showQuestionsFunction(indexQuestion);

                        // Restart progress bar
                        // startProgress(100);

                    } else {
                        // On last question 
                        // Get user current score
                        getUserScore();

                        // Display (show) user final score(Score board)
                        scoreBoard.style.display = "flex";
                        showUserScoreBoard();

                        // Hide quiz box
                        quizBox.classList.remove("show");
                    };
                };

                // Get user Score 
                const getUserScore = () => {
                    // Get correct answer from questions
                    let correctAnswer = data[indexQuestion].correctAnswer;

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
                    };
                };

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

                        // Decremente time
                        time--;

                        // Show timer on page
                        timeCounter.textContent = time;

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
                        widthBar -= 1.66666665;
                        // Here decremantation is on progress bar width
                        progressBar.style.width = widthBar + "%";

                        // If progressbar widthBar is less than 1, we stop 
                        if (widthBar < 1) {
                            clearInterval(progressLine);
                        };
                    };
                    progressLine = setInterval(widthTimerBar, 500);
                };

                // start timer and progress bar decrement
                startTime(60);
                // startProgress(100);
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

            })

            .catch((error) => {
                alert(`Une erreur est survenue ${error}`)
            })
        console.log("Data loaded");

    }
    loadData();


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
    const validUserName = new RegExp(/(?=.*[a-zA-Z.]{3,})/);
    const validUserMail = new RegExp(/(?=.*@)/)

    const correctUserName = username.value.match(validUserName);
    const correctUserMail = usermail.value.match(validUserMail);
    if (correctUserName == null) {
        username.style.border = ".1em solid red";
        nameErrorMessage.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";
        console.log(correctUserName);
    } if (correctUserMail == null) {
        usermail.style.border = ".1em solid red";
        mailErrorMessage.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz."
    }
    else {
        // Store user data
        localStorage.setItem("user-name", usernameValue);
        localStorage.setItem("user-mail", usermailValue);
        homeContent.style.display = "none";
        quizBox.classList.add("show");
        homePageForm.reset();
        showQuestionsFunction(0);
    }
});

// Back to home function 
backToHome.addEventListener("click", homeReturn = (event) => {
    window.location.reload();

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