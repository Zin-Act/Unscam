const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const quiz = document.getElementById("quiz");

easy.addEventListener("click", easyMode);

function easyMode() {
    document.getElementById("quiz").src = "https://www.scamwatch.gov.au/research-and-resources/tools-resources/online-resources/spot-the-scam-quiz";
    console.log("testing");
}