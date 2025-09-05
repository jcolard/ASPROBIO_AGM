// Sélection des éléments du DOM
const questionImageElement = document.getElementById('question-image');
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

// Structure des données du quiz avec des images uniques pour chaque question
const quizData = [
    {
        question: "Qu'est-ce que l'intelligence artificielle (IA) ?",
        // Commentaire : Image conceptuelle représentant des circuits neuronaux ou un cerveau digital.
        imageUrl: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070",
        answers: [
            { text: "Un robot physique uniquement", correct: false },
            { text: "La simulation de l'intelligence humaine dans des machines", correct: true },
            { text: "Un simple programme informatique sans apprentissage", correct: false },
            { text: "Une nouvelle marque de smartphone", correct: false }
        ]
    },
    {
        question: "Quel langage est le plus populaire pour le développement de l'IA ?",
        // Commentaire : Image montrant le logo de Python sur un fond de code complexe.
        imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932",
        answers: [
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "Python", correct: true },
            { text: "JavaScript", correct: false }
        ]
    },
    {
        question: "Que signifie 'Machine Learning' ?",
        // Commentaire : Visuel d'un ordinateur apprenant à partir de données, peut-être avec des graphiques et des flèches.
        imageUrl: "https://images.unsplash.com/photo-1507146426996-32bb7d2b2d39?q=80&w=2070",
        answers: [
            { text: "Une machine qui apprend à souder", correct: false },
            { text: "Un concept où les ordinateurs apprennent sans être explicitement programmés", correct: true },
            { text: "La dernière version de Windows", correct: false },
            { text: "Un type de matériel informatique", correct: false }
        ]
    },
    {
        question: "Lequel de ces films célèbres a pour thème une IA rebelle ?",
        // Commentaire : Image iconique du film "2001, l'Odyssée de l'espace" montrant l'œil de HAL 9000.
        imageUrl: "https://images.unsplash.com/photo-1581467658799-9735414457a8?q=80&w=1935",
        answers: [
            { text: "Star Wars", correct: false },
            { text: "Le Seigneur des Anneaux", correct: false },
            { text: "Jurassic Park", correct: false },
            { text: "2001, l'Odyssée de l'espace", correct: true }
        ]
    }
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Suivant";
    displayQuestion();
}

function displayQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionTextElement.innerText = currentQuestion.question;
    
    // C'est ici que l'URL spécifique à la question est utilisée !
    questionImageElement.src = currentQuestion.imageUrl;
    questionImageElement.alt = currentQuestion.question; // Bon pour l'accessibilité

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionTextElement.innerHTML = `Vous avez obtenu ${score} sur ${quizData.length} !`;
    // Commentaire : Image festive ou de célébration pour l'écran des résultats.
    questionImageElement.src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070";
    nextButton.innerHTML = "Recommencer";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Lancement du quiz au chargement de la page
startQuiz();
