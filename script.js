
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");
const homePage = document.querySelector("#home__page");

const quizPage = document.querySelector("#quiz__page");

const scorePage = document.querySelector("#score__page");

const homePageForm = document.querySelector("form")

const questions = [
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

// Shuffle questions
questions.sort(() => Math.random() - 0.5);
for (let i = 0; i < questions.length; i++) {
    questions[i].answerSuggested.sort(() => Math.random() - 0.5);
};

let indexQuestion = 0;

let userScore = 0;

let answerSelected = "";

const questionTitle = document.querySelector(".question-title");

const questionStatusContainer = document.querySelector(".questionstatus__container")

const questionForm = document.querySelector(".question-form");

const showQuestionsFunction = (indexQuestion) => {
    document.title = "JavaScript Quiz APP | Questions";

    let questionText = `<span> ${questions[indexQuestion].question} </span>`;
    questionTitle.innerHTML = questionText;

    questionStatusContainer.innerHTML = `<div class="status">` +
        `<p class="question__number">Question  ${indexQuestion + 1}/15 </p>` +
        `<div class="timercounter">` + `</div>` +
        `</div>` + `<div class="progressbar__container">` +
        `<div class="progressbar">` + `</div>`
        + `</div > `;

    questionForm.innerHTML = `<div class="answer__container">` +
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
        `</div>` +

        `<div class="answer__container">` +
        `<input type="radio" class="answer" name="answer" id="fourthAnswerSuggested" value="${questions[indexQuestion].answerSuggested[0]}">` +
        `<label for="fourthAnswerSuggested">${questions[indexQuestion].answerSuggested[0]}</label>` +
        `</div>` +

        `<div class="buttonContainer">` +
        `<input type="button" value="Quitter" class="exitButton">` +
        `<input type="button" value="Suivant" class="nextButton" disabled>` +
        `</div>`;;


    const nextQuestionButton = document.querySelector(".nextButton");

    const answers = document.querySelectorAll("input[name='answer']");

    const checkAnswer = () => {
        for (const answer of answers) {
            answer.addEventListener("click", changeAnswer = () => {
                nextQuestionButton.disabled = false;
                answerSelected = answer.value;
            });
        };
    };
    if (indexQuestion === questions.length - 1) {
        nextQuestionButton.value = "Terminer";
    };
    const nextQuestion = () => {
        clearInterval(countTime);
        countTime = 0;
        if (indexQuestion < questions.length - 1) {
            // Get user current score
            getUserScore();
            indexQuestion++;
            // Show next question
            showQuestionsFunction(indexQuestion);
            // Restart progress bar
            startProgress(100);
        } else {
            // On last question 
            getUserScore();
            scorePage.style.display = "flex";

            showUserscorePage();
            quizPage.classList.remove("show");
        };

    };

    const getUserScore = () => {
        let correctAnswer = questions[indexQuestion].correctAnswer;
        if (answerSelected == correctAnswer) {
            userScore++;
            answerSelected = "";
        } else {
            userScore = userScore;
        };
    };
    nextQuestionButton.addEventListener("click", nextQuestion);
    const timeCounter = document.querySelector(".timercounter");

    let countTime = 0;

    const startTime = (time) => {
        const timer = () => {
            time--;

            timeCounter.textContent = time;

            if (time < 9) {
                let addZero = timeCounter.textContent;
                timeCounter.textContent = "0" + addZero;
            }
            if (time < 0) {

                clearInterval(countTime);
                nextQuestion();
            };
        };
        countTime = setInterval(timer, 1000);
    };

    const progressBar = document.querySelector(".progressbar");
    let progressLine = 0;
    const startProgress = (widthBar) => {
        const widthProgessBar = () => {
            widthBar -= 1.66666665;

            progressBar.style.width = widthBar + "%";

            if (widthBar < 1) {
                clearInterval(progressLine);
            };
        };
        progressLine = setInterval(widthProgessBar, 1000);
    };

    startTime(60);
    startProgress(100);
    checkAnswer();

    const exitButton = document.querySelector(".exitButton");

    const exitQuiz = () => {
        clearInterval(countTime);
        countTime = 0;

        getUserScore();

        scorePage.style.display = "flex";
        showUserscorePage();

        quizPage.classList.remove("show");
    };

    exitButton.addEventListener("click", exitQuiz);
};

let nameErrorMessage = document.createElement("span");
let mailErrorMessage = document.createElement("span");
nameErrorMessage.textContent = "";
mailErrorMessage.textContent = "";

username.after(nameErrorMessage);
usermail.after(mailErrorMessage);

homePageForm.addEventListener("submit", storeUserData = (event) => {
    event.preventDefault();



    nameErrorMessage.classList.add("errorMessage");
    mailErrorMessage.classList.add("errorMessage");

    const validUserName = new RegExp(/(?=.*[a-zA-Z.]{2,})/);
    const validUserMail = new RegExp(/(?=.*@)/)

    const correctUserName = username.value.match(validUserName);
    const correctUserMail = usermail.value.match(validUserMail);
    if (correctUserName == null) {
        username.style.border = ".1em solid red";
        nameErrorMessage.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz.";

    } else {
        localStorage.setItem("user-name", username.value);
        nameErrorMessage.textContent = "";
        username.style.border = ".1em solid #028A3D";
    }

    if (correctUserMail == null) {
        usermail.style.border = ".1em solid red";
        mailErrorMessage.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz."
    }
    else {
        localStorage.setItem("user-mail", usermail.value);
        mailErrorMessage.textContent = "";
        usermail.style.border = ".1em solid #028A3D";
    };

    if (correctUserName != null && correctUserMail != null) {
        homePage.style.display = "none";
        quizPage.classList.add("show");
        homePageForm.reset();
        showQuestionsFunction(0);
    };
});

const showUserscorePage = (event) => {
    document.title = "JavaScript Quiz APP | Result";

    const userName = localStorage.getItem("user-name");
    const userMail = localStorage.getItem("user-mail");

    scorePage.innerHTML =
        `<h2 class="username">${userName}</h2>` +
        `<p class="usermail">${userMail}</p>` +
        `<div class="icon__container">
            <p><i class="lni "></i></p>
        </div>`+
        `<div class="userscore__container">
        <p class="userscore">${userScore}/15</p>
        </div>` +
        `<button class="backToHome">Accueil</button>`;

    const icon__container = document.querySelector(".icon__container");
    const lasIcon = document.querySelector(".lni");

    if (userScore <= 7) {
        icon__container.classList.add("failed");
        lasIcon.classList.add("lni-cross-circle");


    } else {
        icon__container.classList.add("success");
        lasIcon.classList.add("lni-checkmark-circle");
    };

    const backToHome = document.querySelector(".backToHome");

    backToHome.addEventListener("click", homeReturn = () => {
        window.location.reload();
    });
};