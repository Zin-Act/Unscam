const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const quiz = document.getElementById("quiz");

easy.addEventListener("click", easyMode);

function easyMode() {
    document.getElementById("quiz").src = "https://www.westpac.com.au/security/protect-yourself-and-your-business/scams-quiz/scam-quiz/#/scamQuiz";
    console.log("testing");
}