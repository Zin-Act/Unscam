const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const quiz = document.getElementById("quiz");

easy.addEventListener("click", easyMode);

function easyMode() {
    document.getElementById("quiz").src = "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/quiz/tech-support-scam";
    console.log("testing");
}