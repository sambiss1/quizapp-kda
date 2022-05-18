// Using local Storage 
const username = document.querySelector("#username");
const usermail = document.querySelector("#usermail");



const form = document.querySelector("form");

form.addEventListener("submit", storeUserData = (event) => {
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
})

// Create all questions 

const allQuestions = {
    questions: [
        { id: 1, questionText: "Question 1" },
        { id: 2, questionText: "Question 2" },
        { id: 3, questionText: "Question 3" },
        { id: 4, questionText: "Question 4" },
        { id: 5, questionText: "Question 5" },
        { id: 6, questionText: "Question 6" },
        { id: 7, questionText: "Question 7" },
        { id: 8, questionText: "Question 8" },
        { id: 9, questionText: "Question 9" },
        { id: 10, questionText: "Question 10" },
        { id: 11, questionText: "Question 11" },
        { id: 12, questionText: "Question 12" },
        { id: 13, questionText: "Question 13" },
        { id: 14, questionText: "Question 14" },
        { id: 15, questionText: "Question 15" },
    ],
    answer: [
        { id: 1, correctAnswer: "Correct Answer", falseAnswer: "" }
    ]
}

// Active next button 
const nextButton = document.querySelector(".nextButton");


document.addEventListener("DOMContentLoaded", load = (event) => {
})