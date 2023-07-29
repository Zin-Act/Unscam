document.getElementById("easy").addEventListener("click", easyMode)
document.getElementById("hard").addEventListener("click", hardMode)
document.getElementById("link").href = "https://www.consumer.vic.gov.au/scam-quiz"

function easyMode() {
    document.getElementById("quiz").src = "https://www.westpac.com.au/security/protect-yourself-and-your-business/scams-quiz/scam-quiz/#/scamQuiz"
    document.getElementById("link").href = "https://www.westpac.com.au/security/protect-yourself-and-your-business/scams-quiz/scam-quiz/#/scamQuiz"
}

function hardMode() {
    document.getElementById("quiz").src = "https://www.consumer.vic.gov.au/scam-quiz"
    document.getElementById("link").href = "https://www.consumer.vic.gov.au/scam-quiz"
}