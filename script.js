const challenges = [
    {
        question: "What has to be broken before you can use it?",
        answer: "egg",
    },
    {
        question: "I speak without a mouth and hear without ears. What am I?",
        answer: "echo",
    },
    {
        question: "What goes up but never comes down?",
        answer: "age",
    },
    { question: "What has hands but can’t clap?", answer: "clock" },

    { question: "What has one eye but can’t see?", answer: "needle" },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        answer: "penny",
    },
    { question: "What gets wetter the more it dries?", answer: "towel" },
    {
        question: "What belongs to you but other people use it more than you do?",
        answer: "your name",
    },
    { question: "What gets bigger the more you take away?", answer: "hole" },
    {
        question: "The more you take, the more you leave behind. What are they?",
        answer: "footsteps",
    },
    {
        question: "What has many keys but can’t open a single lock?",
        answer: "piano",
    },
    {
        question:
            "What can travel around the world while staying in the same corner?",
        answer: "stamp",
    },
    { question: "What has a neck but no head?", answer: "bottle" },
];

let current = Math.floor(Math.random() * challenges.length);
let timerValue = 60;
let interval;

document.getElementById("challenge").innerText = challenges[current].question;

function startTimer() {
    interval = setInterval(() => {
        timerValue--;
        document.getElementById("timer").innerText = timerValue;
        if (timerValue === 0) {
            clearInterval(interval);
            showResult("Time’s up!", false);
        }
    }, 1000);
}

startTimer();

document.getElementById("answerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const userAnswer = document
        .getElementById("userAnswer")
        .value.trim()
        .toLowerCase();
    const correctAnswer = challenges[current].answer.toLowerCase();

    clearInterval(interval);

    if (userAnswer === correctAnswer) {
        showResult("Hurray! Your answer is correct!", true);
    } else {
        showResult("Better luck next time!", false);
    }
});

function showResult(message, isCorrect) {
    document.getElementById("feedback").innerText = message;
    const correctAns = document.getElementById("correctAnswer");
    correctAns.innerText = "Answer: " + challenges[current].answer;
    correctAns.classList.remove("hidden");
}
