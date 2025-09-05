document.addEventListener('DOMContentLoaded', () => {

    const defaultImageUrl = "https://i.postimg.cc/Gp5Bnk0T/vrai-logo.jpg";

    const quizzes = [
        {
            title: "Je Maîtrise les concepts",
            questions: [
                { q: "L'écosystème est formé par :", a: [{ t: "La biocénose et le biotope", c: true }, { t: "La pollution et l'air", c: false }] },
                { q: "L'environnement, c'est…", a: [{ t: "Tout ce qui m'entoure", c: true }, { t: "L'air", c: false }] },
                { q: "Le climat désigne :", a: [{ t: "Les conditions de l'atmosphère dans une région donnée pendant une période donnée", c: true }, { t: "L'étude du temps", c: false }] },
                { q: "La mer est-elle un écosystème ?", a: [{ t: "Oui", c: true }, { t: "Non", c: false }] },
                { q: "La faune se compose de :", a: [{ t: "Les espèces animales vivant dans un espace géographique ou un habitat déterminé.", c: true }, { t: "Tous Les omnivores exclusivement", c: false }] },
                { q: "La flore est constituée de :", a: [{ t: "L'ensemble des espèces végétales indigènes ou subspontanées dans une région donnée, un milieu donné", c: true }, { t: "Tous les végétariens", c: false }] },
                { q: "La pollution désigne :", a: [{ t: "La dégradation de l'environnement par des substances ou des nuisances diverses", c: true }, { t: "Le sol qui craque sous nos pieds à cause des changements climatiques", c: false }] }
            ]
        },
        {
            title: "Protection de l'environnement et changements climatiques",
            questions: [
                { q: "Selon le rapport du GIEC, l'augmentation de la température à la fin du XXIe siècle sera probablement supérieure à :", a: [{ t: "1,5°C par rapport à l'époque allant de 1850 à 1900", c: true }, { t: "6,5°C par rapport à l'époque allant de 1850 à 1900", c: false }] },
                { q: "Le développement durable :", a: [{ t: "Satisfait les besoins des générations présentes tout en préservant les biens des générations futures", c: true }, { t: "Est constitué des matériaux durs", c: false }] },
                { q: "La biocénose est :", a: [{ t: "L'ensemble des êtres vivants qui occupent un milieu donné", c: true }, { t: "L'ensemble des espèces végétales", c: false }] },
                { q: "L'économie circulaire consiste à dire et faire ceci :", a: [{ t: "Rien ne se perd, tout se transforme, tout se recycle", c: true }, { t: "Extraire, fabriquer, jeter", c: false }] },
                { q: "La gazéification est :", a: [{ t: "Un procédé qui utilise de la matière végétale comme le bois pour en extraire un gaz de synthèse après une réaction thermochimique", c: true }, { t: "L'ensemble des gaz émis par le corps humain", c: false }] },
                { q: "L'azote est un nutriment essentiel pour les plantes parce que :", a: [{ t: "Il augmente la teneur en chlorophylle, L’azote permet aux plantes d’utiliser la photosynthèse pour absorber l’énergie du soleil.", c: true }, { t: "Il leur permet de détruire les vers qui mangent leurs racines", c: false }, {t: "Les plantes s'en alimentent dans le sol et le transforment en huile végétale", c: false}] },
                { q: "La lixiviation du sol désigne :", a: [{ t: "La perte des nutriments végétaux hydrosolubles du sol...", c: true }, { t: "La tombée de la neige qui gèle les sols", c: false }, { t: "L'absence d'agriculture sur une certaine période afin de reposer le sol", c: false}] },
                { q: "Quel gaz contribue à l'effet de serre ?", a: [{ t: "Ch4 (méthane)", c: true }, { t: "C9H10ClN5O2 (imidaclopride)", c: false }, {t: "C8H10ClN5O3S (thiaméthoxame)", c: false}] }
            ]
        },
        {
            title: "Soit l’acteur principal de ton environnement",
            questions: [
                { q: "Quelle espèce est en voie de disparition à travers le monde ?", a: [{ t: "Le rhinocéros de Java", c: true }, { t: "La coccinelle du Botswanga", c: false }, { t: "La chauve-souris d'Etetak", c: false }]},
                { q: "Quel animal peut-on chasser au cours de la chasse à courre en France ?", a: [{ t: "Le cerf", c: true }, { t: "L'hirola", c: false }, { t: "L'anguille d'Europe", c: false }] },
                { q: "Un masque chirurgical se détériore dans la nature au bout de combien d'années ?", a: [{ t: "400 ans", c: true }, { t: "500 ans", c: false }, { t: "10 ans", c: false }] },
                { q: "Quel est le plus vaste océan à travers le monde ?", a: [{ t: "Océan Pacifique", c: true }, { t: "Océan Atlantique", c: false }, { t: "Océan Arctique", c: false }] },
                { q: "Une nanoparticule est une molécule dont la taille varie entre :", a: [{ t: "1 et 100 nanomètres", c: true }, { t: "100 et 200 nanomètres", c: false }, { t: "100 et 500 nanomètres", c: false }] },
                { q: "Les nanoparticules peuvent avoir un impact négatif sur l'environnement à cause de :", a: [{ t: "Leur taille. Elles ne sont pas filtrées dans l'eau ou dans l'air...", c: true }, { t: "Leurs couleurs. Elles empêchent l'absorption des gaz à effet de serre", c: false }] },
                { q: "L'étude d'impact environnemental est une étude technique qui vise à :", a: [{ t: "Apprécier les conséquences d'un projet pour en limiter les effets négatifs.", c: true }, { t: "Encourager les dommages affectant la nature", c: false }] },
                { q: "Le terme biotope désigne :", a: [{ t: "Un milieu de vie délimité géographiquement avec des conditions écologiques homogènes", c: true }, { t: "Un large regroupement d'écosystèmes", c: false }] },
                { q: "L'Amazone :", a: [{ t: "Est un fleuve d'Amérique du sud", c: true }, { t: "Est le deuxième plus grand fleuve du monde", c: false }, { t: "Prend sa source au Brésil", c: false }] }
            ]
        },
        {
            title: "Je deviens acteur de l'environnement",
            questions: [
                { q: "La justice climatique désigne :", a: [{ t: "Les approches éthiques, morales, de justice et politique face au dérèglement climatique", c: true }, { t: "Les approches uniquement violentes ou physiques", c: false }] },
                { q: "Le sanctuaire de faune désigne :", a: [{ t: "Un espace bénéficiant de mesures assurant sa protection et sa sauvegarde", c: true }, { t: "Un espace où l'on peut adopter son animal domestique", c: false }] },
                { q: "L'appellation d'origine protégée (AOP) désigne des produits qui ont été :", a: [{ t: "Produits, transformés et élaborés dans une aire géographique déterminée", c: true }, { t: "Créée en 1986", c: false }] },
                { q: "Une zone économique exclusive (ZEE) désigne :", a: [{ t: "Un espace maritime où un État côtier exerce des droits souverains sur les ressources", c: true }, { t: "L'espace maritime qui longe les États n'ayant pas de côtes", c: false }] },
                { q: "Les eaux internationales (ou haute mer) désignent les zones maritimes éloignées de la côte d'au moins :", a: [{ t: "200 milles nautiques", c: true }, { t: "100 milles nautiques", c: false }] }
            ]
        },
        {
            title: "Que disent les conventions sur l'environnement ?",
            questions: [
                { q: "La convention de Bâle (1989) a été conçue afin de :", a: [{ t: "Contrôler les mouvements transfrontières de déchets dangereux", c: true }, { t: "Augmenter la circulation des déchets dangereux entre les pays", c: false }] },
                { q: "La convention de Stockholm (2001) est un accord visant à :", a: [{ t: "Interdire certains produits polluants", c: true }, { t: "Produire douze produits chimiques particulièrement polluants", c: false }] },
                { q: "La Convention de Rotterdam a pour but :", a: [{ t: "D'encourager le partage des responsabilités dans le commerce de produits chimiques dangereux", c: true }, { t: "De compliquer l'échange d'informations sur les produits chimiques", c: false }] },
                { q: "La convention de Ramsar (1971) a pour objectif :", a: [{ t: "La conservation et l'utilisation rationnelle des zones humides", c: true }, { t: "Le maintien à court terme des caractéristiques des zones humides", c: false }] },
                { q: "La CITES (1973) stipule que l'introduction depuis la mer d'une espèce de l'Annexe II nécessite :", a: [{ t: "Un certificat de l'organe de gestion de l'Etat d'introduction.", c: true }, { t: "Aucun permis particulier", c: false }] },
                { q: "La convention de Berne (1979) prohibe :", a: [{ t: "Toutes les formes de capture ou mise à mort intentionnelles des espèces de l'annexe II", c: true }, { t: "La tranquillité de la faune sauvage", c: false }] },
                { q: "La convention de Rio (1992) a pour objectif de :", a: [{ t: "Parvenir à la conservation de la diversité biologique et à l'utilisation durable de ses composantes", c: true }, { t: "Demander aux pays développés de ne pas fournir de ressources financières", c: false }] },
                { q: "La Convention sur la lutte contre la désertification (1994) concerne :", a: [{ t: "Les pays gravement touchés par la sécheresse et/ou la désertification, en particulier en Afrique", c: true }, { t: "Uniquement les pays africains pauvres très endettés", c: false }] }
            ]
        }
    ];

    let currentQuizIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;

    const mainMenu = document.getElementById('main-menu');
    const quizView = document.getElementById('quiz-view');
    const scoreView = document.getElementById('score-view');
    const moduleCards = document.querySelectorAll('.module-card');
    const backToMenuBtn = document.getElementById('back-to-menu');
    const quizTitle = document.getElementById('quiz-title');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const nextBtn = document.getElementById('next-btn');
    const finalScore = document.getElementById('final-score');
    const restartBtn = document.getElementById('restart-btn');

    function showMainMenu() {
        mainMenu.classList.remove('hidden');
        quizView.classList.add('hidden');
        scoreView.classList.add('hidden');
        backToMenuBtn.classList.add('hidden');
    }

    function showQuizView() {
        mainMenu.classList.add('hidden');
        quizView.classList.remove('hidden');
        scoreView.classList.add('hidden');
        backToMenuBtn.classList.remove('hidden');
    }

    function showScoreView() {
        mainMenu.classList.add('hidden');
        quizView.classList.add('hidden');
        scoreView.classList.remove('hidden');
        backToMenuBtn.classList.remove('hidden');
        finalScore.textContent = `${score} / ${quizzes[currentQuizIndex].questions.length}`;
    }

    function startQuiz(quizIndex) {
        currentQuizIndex = quizIndex;
        currentQuestionIndex = 0;
        score = 0;
        showQuizView();
        displayQuestion();
    }

    function displayQuestion() {
        const quiz = quizzes[currentQuizIndex];
        const question = quiz.questions[currentQuestionIndex];

        quizTitle.textContent = quiz.title;
        questionText.textContent = question.q;
        answersContainer.innerHTML = '';
        nextBtn.classList.add('hidden');
        
        questionContainer.classList.remove('fade-out');
        answersContainer.classList.remove('fade-out');

        question.a.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.dataset.correct = answer.c;
            
            const imageUrl = answer.imageUrl || defaultImageUrl;

            button.innerHTML = `
                <img src="${imageUrl}" alt="illustration">
                <span>${answer.t}</span>
            `;
            button.addEventListener('click', selectAnswer);
            answersContainer.appendChild(button);
        });
    }

    function selectAnswer(e) {
        Array.from(answersContainer.children).forEach(button => {
            button.classList.remove('selected');
        });

        const selectedBtn = e.currentTarget;
        selectedBtn.classList.add('selected');
        
        nextBtn.classList.remove('hidden');
    }

    function handleNextQuestion() {
        const selectedBtn = answersContainer.querySelector('.answer-btn.selected');
        if (!selectedBtn) return;

        const isCorrect = selectedBtn.dataset.correct === 'true';
        if (isCorrect) {
            score++;
        }
        
        questionContainer.classList.add('fade-out');
        answersContainer.classList.add('fade-out');
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length) {
                displayQuestion();
            } else {
                showScoreView();
            }
        }, 300);
    }

    moduleCards.forEach(card => {
        card.addEventListener('click', () => {
            startQuiz(parseInt(card.dataset.quizIndex));
        });
    });

    backToMenuBtn.addEventListener('click', showMainMenu);
    nextBtn.addEventListener('click', handleNextQuestion);
    restartBtn.addEventListener('click', () => {
        startQuiz(currentQuizIndex);
    });

    showMainMenu();
});
