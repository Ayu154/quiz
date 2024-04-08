const questions = [
    {
        question: "When was AYUSH LOHANI born?",
        choices: ["2009", "2010", "2008", "1999"],
        correctAnswer: 0
    },
    {
        question: "What is AYUSH LOHANI to u?",
        choices: ["Friend", "God", "Brother", "Sensi"],
        correctAnswer: [0, 2, 3]
    },
    {
        question: "What is the height of AYUSH LOHANI?",
        choices: ["5'6", "5'0", "6'1", "5'5"],
        correctAnswer: 3
    },
    {
        question: "Where is AYUSH LOHANI from?",
        choices: ["Jhapa", "Ilam", "Tanahu", "India"],
        correctAnswer: 2
    },
    {
        question: "Where is Ayush's mawala??",
        choices: ["Tanahu", "Ilam", "Dhading", "Kathmandu"],
        correctAnswer: 1
    },
    {
        question: "What is the fav movie of Ayush?",
        choices: ["Oppenhimer", "God-father", "Jhola", "5cenimeter per sec"],
        correctAnswer: 0
    },
    {
        question: "What is the fav manga of Ayush?",
        choices: ["Vinland saga", "Demonic Empreror", "One piece", "Mout-patlu"],
        correctAnswer: 2
    },
    {
        question: "What is the fav book of Ayush?",
        choices: ["Song of Fire & Ice", "The Alchemist", "Radha", "Harry potter"],
        correctAnswer: 0
    },
    {
        question: "What is the fav color of Ayush?",
        choices: ["White", "Black", "Golden", "Pink"],
        correctAnswer: [0, 1]
    },
    {
        question: "What is the current fav song of Ayush?",
        choices: ["7 years", "Perfect", "The Oh Hellos", "Welcome to Wonderland"],
        correctAnswer: 3
    },
    {
        question: "What animal does Ayush like?",
        choices: ["Lion", "Sloth", "Flamingos", "Armadillo"],
        correctAnswer: 2
    },
    {
        question: "What is the fav fruit of Ayush?",
        choices: ["Mango", "Gauva", "Kiwi", "Berries"],
        correctAnswer: [0,3]
    }
];

let currentQuestion = 0;
let score = 0;

const startButton = document.getElementById('startButton');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('nextButton');
const resultElement = document.getElementById('result');

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = '';

    q.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(button);
    });

    nextButton.style.display = 'none';
    resultElement.textContent = '';
}

function checkAnswer(index) {
    const q = questions[currentQuestion];
    const correctAnswers = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
    const isCorrect = correctAnswers.includes(index);
    
    if (isCorrect) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect!';
    }

    // Play audio
    const opAudio = new Audio('op.mp3');
    opAudio.play();

    nextButton.style.display = 'inline';
}

 

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    questionElement.style.display = 'block';
    choicesElement.style.display = 'block';
    nextButton.style.display = 'inline';
    showQuestion();

   
});

document.getElementById("startButton").addEventListener("click", function() {
    const audio = new Audio("music.mp3");
    audio.play();
});

 

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = 'Quiz Complete!';
        choicesElement.innerHTML = `Your Score: ${score} / ${questions.length}`;
        nextButton.style.display = 'none';
        resultElement.textContent = '';
    }

    // Play audio
    const clickAudio = new Audio('click.wav');
    clickAudio.play();
});



