const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const quiz = document.getElementById("quiz");

easy.addEventListener("click", easyMode);

function easyMode() {
    document.getElementById("quiz").src = "https://www.abc.net.au/news/2022-10-17/would-you-fall-for-these-scams-take-the-test/101500782?utm_campaign=abc_news_web&utm_content=link&utm_medium=content_shared&utm_source=abc_news_web";
    console.log("testing");
}