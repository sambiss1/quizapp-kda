/*
    This file contains all functions for Quiz Application
*/
// User name and user mail
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");
const homeContent = document.querySelector("#home__page");

// Question box
const quizPage = document.querySelector("#quiz__page");

// Score board 
const scorePage = document.querySelector("#score__page");

// Main form 
const homePageForm = document.querySelector("form")

// Back to home button 
const backToHome = document.querySelector(".backToHome");

// Create all questions 
const questions = [
    // Question 1
    {
        id: 1,
        question: "Lequel des éléments suivants est un avantage de l'utilisation de JavaScript ?",
        correctAnswer: "Toutes ces réponses",
        answerSuggested: [
            "Retour immédiat aux visiteurs",
            "Augmentation de l'interactivité",
            "Toutes ces réponses",
            "Moins d'interaction avec le serveur"
        ]
    },
    // Question 2
    {
        id: 2,
        question: "Comment obtenir le nombre total d'arguments passés à une fonction ?",
        correctAnswer: "Utilisation de la propriété arguments.length",
        answerSuggested: [
            "Aucune des réponses ci-dessus.",
            "Utilisation de la propriété arguments.length",
            "Utilisation de la propriété args.length",
            "Les deux ci-dessus"
        ]
    },
    // Question 3
    {
        id: 3,
        question: "Laquelle des fonctions suivantes de l'objet String crée un lien hypertexte HTML qui demande une autre URL ?",
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
        question: "Laquelle des fonctions suivantes de l'objet Array applique une fonction simultanément à deux valeurs du tableau (de gauche à droite) afin de le réduire à une seule valeur ?",
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
        question: "Laquelle des fonctions suivantes de l'objet Array extrait une section d'un tableau et renvoie un nouveau tableau ?",
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
        question: "Quelle méthode intégrée inverse l'ordre des éléments d'un tableau ?",
        correctAnswer: "reverse()",
        answerSuggested: [
            "changeOrder(order)",
            "sort(order)",
            "reverse()",
            "Aucune de ces réponses"
        ]
    },
    //QUestion 7
    {
        id: 7,
        question: "Quelle méthode intégrée appelle une fonction pour chaque élément du tableau ?",
        correctAnswer: "forEach()",
        answerSuggested: [
            "loop()",
            "forEach()",
            "while()",
            "Aucune de ces réponses"
        ]
    },
    // Question 8
    {
        id: 8,
        question: "Laquelle des fonctions suivantes de l'objet String divise un objet String en un tableau de chaînes de caractères en séparant la chaîne de caractères en sous-chaînes ?",
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
        question: "Laquelle des fonctions suivantes de l'objet Number définit le nombre total de chiffres à afficher d'un nombre ?",
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
        question: "Laquelle des fonctions suivantes de l'objet String renvoie la valeur de la chaîne de caractères appelante convertie en majuscules ?",
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
        question: "Quelle méthode intégrée ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau ?",
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
        question: "Laquelle des fonctions suivantes de l'objet Array renvoie un nouveau tableau composé de ce tableau joint à d'autres tableaux et/ou valeurs ?",
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
        question: "Laquelle des fonctions suivantes de l'objet Array joint tous les éléments d'un tableau en une chaîne de caractères ?",
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
        question: "Quelle méthode est utilisée pour accèder au contenu de l'élément d'un Object en JavaScript",
        correctAnswer: "Object.element",
        answerSuggested: [
            "Object.element",
            "Object{element}",
            "Object(element)",
            "Object[element]"
        ]
    },
    // Question 15
    {
        id: 15,
        question: "Lequel des énoncés suivants est correct concernant les caractéristiques de JavaScript ?",
        correctAnswer: "Toutes ces réponses",
        answerSuggested: [
            "JavaScript est un langage de programmation interprété et léger",
            "JavaScript est conçu pour créer des applications centrées sur le réseau",
            "Toutes ces réponses",
            "JavaScript est complémentaire et intégré à Java"
        ]
    },
];

// Shuffle questions before showing
questions.sort(() => Math.random() - 0.5);
for (let i = 0; i < questions.length; i++) {
    questions[i].answerSuggested.sort(() => Math.random() - 0.5);
}

// indexQuestion
let indexQuestion = 0;

// index of question 
let index = 0;

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

    // Question title
    let questionText = `<span> ${questions[indexQuestion].question} </span>`;
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
        `</div>`;

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
            scorePage.style.display = "flex";
            showUserscorePage();

            // Hide quiz box
            quizPage.classList.remove("show");
        };
    };

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
            if (time < 0) {

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
        progressLine = setInterval(widthTimerBar, 1000);
    };

    // start timer and progress bar decrement
    startTime(60);
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
        scorePage.style.display = "flex";
        showUserscorePage();

        // Hide quiz box
        quizPage.classList.remove("show");
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

// home page form
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
        quizPage.classList.add("show");
        homePageForm.reset();
        showQuestionsFunction(0);
    };
});

// Back to home function 
backToHome.addEventListener("click", homeReturn = () => {
    window.location.reload();
});

// User score board elements
const username__response = document.querySelector(".username__response");
const usermail__response = document.querySelector(".usermail__response");
const userscore__container = document.querySelector(".userscore__container");
const icon__container = document.querySelector(".icon__container");
const lasIcon = document.querySelector(".lni");

// Function for get and show user final score
const showUserscorePage = (event) => {
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