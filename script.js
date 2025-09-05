document.addEventListener('DOMContentLoaded', () => {

    const quizzes = [
        { // Quiz 0: Concepts
            title: "Je Maîtrise les concepts",
            questions: [
                { q: "L'écosystème est formé par :", a: [
                    { t: "La biocénose et le biotope", c: true, imageUrl: "https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg" }, // Image: Interaction animaux/végétaux et leur milieu (roche, eau).
                    { t: "La pollution et l'air", c: false, imageUrl: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg" } // Image: Fumée d'usine.
                ]},
                { q: "L'environnement, c'est…", a: [
                    { t: "Tout ce qui m'entoure", c: true, imageUrl: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg" }, // Image: Paysage à 360° (montagne, ville, mer).
                    { t: "L'air", c: false, imageUrl: "https://images.pexels.com/photos/1115609/pexels-photo-1115609.jpeg" } // Image: Ciel bleu avec des nuages.
                ]},
                { q: "Le climat désigne :", a: [
                    { t: "Les conditions de l'atmosphère dans une région donnée pendant une période donnée", c: true, imageUrl: "https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg" }, // Image: Carte météo avec soleil, nuages, pluie.
                    { t: "L'étude du temps", c: false, imageUrl: "https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg" } // Image: Une horloge ou un calendrier.
                ]},
                { q: "La mer est-elle un écosystème ?", a: [
                    { t: "Oui", c: true, imageUrl: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg" }, // Image: Récif corallien plein de poissons.
                    { t: "Non", c: false, imageUrl: "https://images.pexels.com/photos/3825273/pexels-photo-3825273.jpeg" } // Image: Un désert de sable.
                ]},
                { q: "La faune se compose de :", a: [
                    { t: "Les espèces animales vivant dans un espace géographique ou un habitat déterminé.", c: true, imageUrl: "https://images.pexels.com/photos/33754715/pexels-photo-33754715.jpeg" }, // Image: Plusieurs animaux différents (lion, oiseau, poisson).
                    { t: "Tous Les omnivores exclusivement", c: false, imageUrl: "https://images.pexels.com/photos/206716/pexels-photo-206716.jpeg" } // Image: Un ours mangeant du poisson et des baies.
                ]},
                { q: "La flore est constituée de :", a: [
                    { t: "L'ensemble des espèces végétales indigènes ou subspontanées dans une région donnée, un milieu donné", c: true, imageUrl: "https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg" }, // Image: Champ de fleurs sauvages variées.
                    { t: "Tous les végétariens", c: false, imageUrl: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg" } // Image: Un lapin ou un panda.
                ]},
                { q: "La pollution désigne :", a: [
                    { t: "La dégradation de l'environnement par des substances ou des nuisances diverses", c: true, imageUrl: "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg" }, // Image: Déchets plastiques sur une plage.
                    { t: "Le sol qui craque sous nos pieds à cause des changements climatiques", c: false, imageUrl: "https://images.pexels.com/photos/1097016/pexels-photo-1097016.jpeg" } // Image: Terre sèche et craquelée d'un désert.
                ]}
            ]
        },
        { // Quiz 1: Protection & Climat
            title: "Protection de l'environnement et changements climatiques",
            questions: [
                { q: "Selon le rapport du GIEC, l'augmentation de la température à la fin du XXIe siècle sera probablement supérieure à :", a: [
                    { t: "1,5°C par rapport à l'époque allant de 1850 à 1900", c: true, imageUrl: "https://picsum.photos/seed/giec-1-5/200/200" }, // Image: Thermomètre indiquant une légère hausse.
                    { t: "6,5°C par rapport à l'époque allant de 1850 à 1900", c: false, imageUrl: "https://picsum.photos/seed/giec-6-5/200/200" } // Image: Thermomètre dans le rouge vif.
                ]},
                { q: "Le développement durable :", a: [
                    { t: "Satisfait les besoins des générations présentes tout en préservant les biens des générations futures", c: true, imageUrl: "https://picsum.photos/seed/durable/200/200" }, // Image: Panneaux solaires et éoliennes dans un paysage vert.
                    { t: "Est constitué des matériaux durs", c: false, imageUrl: "https://picsum.photos/seed/materiaux/200/200" } // Image: Tas de briques ou de pierres.
                ]},
                { q: "La biocénose est :", a: [
                    { t: "L'ensemble des êtres vivants qui occupent un milieu donné", c: true, imageUrl: "https://picsum.photos/seed/etres-vivants/200/200" }, // Image: Forêt grouillante de vie (animaux, plantes, champignons).
                    { t: "L'ensemble des espèces végétales", c: false, imageUrl: "https://picsum.photos/seed/vegetales/200/200" } // Image: Uniquement des plantes et des fleurs.
                ]},
                { q: "L'économie circulaire consiste à dire et faire ceci :", a: [
                    { t: "Rien ne se perd, tout se transforme, tout se recycle", c: true, imageUrl: "https://picsum.photos/seed/circulaire/200/200" }, // Image: Symbole du recyclage avec des flèches en cercle.
                    { t: "Extraire, fabriquer, jeter", c: false, imageUrl: "https://picsum.photos/seed/jeter/200/200" } // Image: Une décharge à ciel ouvert.
                ]},
                { q: "La gazéification est :", a: [
                    { t: "Un procédé qui utilise de la matière végétale comme le bois pour en extraire un gaz de synthèse après une réaction thermochimique", c: true, imageUrl: "https://picsum.photos/seed/gazeification/200/200" }, // Image: Usine de biomasse.
                    { t: "L'ensemble des gaz émis par le corps humain", c: false, imageUrl: "https://picsum.photos/seed/gaz-humain/200/200" } // Image: Illustration humoristique d'une personne.
                ]},
                { q: "L'azote est un nutriment essentiel pour les plantes parce que :", a: [
                    { t: "Il augmente la teneur en chlorophylle, L’azote permet aux plantes d’utiliser la photosynthèse pour absorber l’énergie du soleil.", c: true, imageUrl: "https://picsum.photos/seed/azote-plante/200/200" }, // Image: Feuille d'un vert très vif et sain.
                    { t: "Il leur permet de détruire les vers qui mangent leurs racines", c: false, imageUrl: "https://picsum.photos/seed/ver-racine/200/200" } // Image: Ver de terre près de racines.
                ]},
                { q: "La lixiviation du sol désigne :", a: [
                    { t: "La perte des nutriments végétaux hydrosolubles du sol, qui sont dissous et entraînés par les eaux d'infiltration", c: true, imageUrl: "https://picsum.photos/seed/lixiviation/200/200" }, // Image: Gouttes de pluie s'infiltrant dans le sol.
                    { t: "La tombée de la neige qui gèle les sols", c: false, imageUrl: "https://picsum.photos/seed/neige-gel/200/200" } // Image: Paysage enneigé.
                ]},
                { q: "Quel gaz contribue à l'effet de serre ?", a: [
                    { t: "Ch4 (méthane)", c: true, imageUrl: "https://picsum.photos/seed/methane/200/200" }, // Image: Troupeau de vaches dans un pré.
                    { t: "C9H10ClN5O2 (imidaclopride)", c: false, imageUrl: "https://picsum.photos/seed/chimie/200/200" }, // Image: Formule chimique complexe.
                ]}
            ]
        },
        { // Quiz 2: Acteur de l'environnement
            title: "Soit l’acteur principal de la protection de ton environnement",
            questions: [
                { q: "Quelle espèce est en voie de disparition à travers le monde ?", a: [
                    { t: "Le rhinocéros de Java", c: true, imageUrl: "https://picsum.photos/seed/rhino-java/200/200" }, // Image: Un rhinocéros de Java.
                    { t: "La coccinelle du Botswanga", c: false, imageUrl: "https://picsum.photos/seed/coccinelle/200/200" }, // Image: Une coccinelle.
                    { t: "La chauve-souris d'Etetak", c: false, imageUrl: "https://picsum.photos/seed/chauve-souris/200/200" } // Image: Une chauve-souris.
                ]},
                { q: "Quel animal peut-on chasser au cours de la chasse à courre en France ?", a: [
                    { t: "Le cerf", c: true, imageUrl: "https://picsum.photos/seed/cerf/200/200" }, // Image: Un cerf majestueux.
                    { t: "L'hirola", c: false, imageUrl: "https://picsum.photos/seed/hirola/200/200" }, // Image: Une antilope hirola.
                    { t: "Le napoléon", c: false, imageUrl: "https://picsum.photos/seed/napoleon-poisson/200/200" } // Image: Le poisson napoléon aux couleurs vives.
                ]},
                { q: "Un masque chirurgical se détériore dans la nature au bout de combien d'années ?", a: [
                    { t: "400 ans", c: true, imageUrl: "https://picsum.photos/seed/masque-400/200/200" }, // Image: Un masque usagé au sol.
                    { t: "10 ans", c: false, imageUrl: "https://picsum.photos/seed/masque-10/200/200" }, // Image: Un vieux morceau de plastique.
                    { t: "50 ans", c: false, imageUrl: "https://picsum.photos/seed/masque-50/200/200" } // Image: Une bouteille en plastique dégradée.
                ]},
                { q: "Quel est le plus vaste océan à travers le monde ?", a: [
                    { t: "Océan Pacifique", c: true, imageUrl: "https://picsum.photos/seed/pacifique/200/200" }, // Image: Grande étendue d'eau calme vue du ciel.
                    { t: "Océan Atlantique", c: false, imageUrl: "https://picsum.photos/seed/atlantique/200/200" }, // Image: Vagues se brisant sur une côte.
                    { t: "Océan Arctique", c: false, imageUrl: "https://picsum.photos/seed/arctique/200/200" } // Image: Un iceberg.
                ]},
                { q: "Une nanoparticule est une molécule dont la taille varie entre :", a: [
                    { t: "1 et 100 nanomètres", c: true, imageUrl: "https://picsum.photos/seed/nanoparticule/200/200" }, // Image: Représentation 3D de molécules très petites.
                    { t: "100 et 200 nanomètres", c: false, imageUrl: "https://picsum.photos/seed/molecules-moyennes/200/200" }, // Image: Représentation 3D de molécules plus grosses.
                ]},
                 { q: "L'Amazone :", a: [
                    { t: "Est un fleuve d'Amérique du sud", c: true, imageUrl: "https://picsum.photos/seed/amazone-fleuve/200/200" }, // Image: Vue aérienne du fleuve Amazone.
                    { t: "Est le deuxième plus grand fleuve du monde", c: false, imageUrl: "https://picsum.photos/seed/deuxieme/200/200" }, // Image: Médaille d'argent.
                    { t: "Prend sa source au Brésil", c: false, imageUrl: "https://picsum.photos/seed/source-bresil/200/200" } // Image: Carte du Brésil.
                ]}
            ]
        },
        { // Quiz 3: Devenir acteur
            title: "Je deviens acteur de l'environnement",
            questions: [
                { q: "La justice climatique désigne :", a: [
                    { t: "Les approches éthiques, morales, de justice et politique face au dérèglement climatique", c: true, imageUrl: "https://picsum.photos/seed/justice-climatique/200/200" }, // Image: Balance de la justice avec la Terre sur un plateau.
                    { t: "Les approches uniquement violentes ou physiques", c: false, imageUrl: "https://picsum.photos/seed/violence/200/200" } // Image: Un poing levé ou une manifestation tendue.
                ]},
                { q: "Le sanctuaire de faune désigne :", a: [
                    { t: "Un espace bénéficiant d'un ensemble de mesures assurant sa garantie, sa protection", c: true, imageUrl: "https://picsum.photos/seed/sanctuaire/200/200" }, // Image: Grande réserve naturelle avec des animaux en liberté.
                    { t: "Un espace dans lequel les animaux errants sont amenés", c: false, imageUrl: "https://picsum.photos/seed/refuge-animal/200/200" } // Image: Un refuge pour chiens et chats.
                ]},
                { q: "L'appellation d'origine protégée (AOP) :", a: [
                    { t: "Désigne des produits qui ont été produits, transformés et élaborés dans une aire géographique déterminée", c: true, imageUrl: "https://picsum.photos/seed/aop/200/200" }, // Image: Logo AOP sur un fromage ou une bouteille de vin.
                    { t: "Met en œuvre le savoir-faire reconnu de producteurs étrangers", c: false, imageUrl: "https://picsum.photos/seed/etranger/200/200" } // Image: Un drapeau de plusieurs pays.
                ]},
                { q: "Une zone économique exclusive (ZEE) désigne :", a: [
                    { t: "Un espace maritime sur lequel un État côtier exerce des droits souverains en matière d'exploration et d'usage des ressources.", c: true, imageUrl: "https://picsum.photos/seed/zee/200/200" }, // Image: Carte montrant la côte d'un pays et sa ZEE.
                    { t: "L'espace maritime qui longe les États n'ayant pas de côtes", c: false, imageUrl: "https://picsum.photos/seed/pas-de-cote/200/200" } // Image: Un pays enclavé comme la Suisse ou le Tchad.
                ]},
                { q: "Les eaux internationales (ou haute mer) désignent :", a: [
                    { t: "Les zones maritimes éloignées de la côte d'au moins 200 milles nautiques", c: true, imageUrl: "https://picsum.photos/seed/haute-mer/200/200" }, // Image: Un bateau seul au milieu de l'océan.
                    { t: "Les zones maritimes éloignées de la côte d'au plus 100 milles nautiques", c: false, imageUrl: "https://picsum.photos/seed/cote/200/200" } // Image: Une plage vue depuis la mer.
                ]}
            ]
        },
        { // Quiz 4: Conventions
            title: "Que disent les conventions sur l'environnement ?",
            questions: [
                { q: "La convention de Bâle du 22 mars 1989 a été conçue afin de :", a: [
                    { t: "Contrôler les mouvements transfrontières de déchets dangereux et leur élimination", c: true, imageUrl: "https://picsum.photos/seed/dechets-dangereux/200/200" }, // Image: Panneau de danger (tête de mort) sur un baril.
                    { t: "Augmenter la circulation des déchets dangereux entre les pays", c: false, imageUrl: "https://picsum.photos/seed/circulation-dechets/200/200" } // Image: Un cargo porte-conteneurs sur l'océan.
                ]},
                { q: "La convention de Stockholm signée le 22 mai 2001 :", a: [
                    { t: "Est un accord international visant à interdire certains produits polluants", c: true, imageUrl: "https://picsum.photos/seed/interdire-polluants/200/200" }, // Image: Un panneau d'interdiction sur un pesticide.
                    { t: "Vise à produire douze produits chimiques particulièrement polluants", c: false, imageUrl: "https://picsum.photos/seed/produire-polluants/200/200" } // Image: Un laboratoire de chimie avec des éprouvettes.
                ]},
                { q: "La Convention de Rotterdam a pour but :", a: [
                    { t: "D'encourager le partage des responsabilités et la coopération entre Parties dans le commerce international de certains produits chimiques dangereux", c: true, imageUrl: "https://picsum.photos/seed/cooperation/200/200" }, // Image: Poignée de main entre deux personnes de pays différents.
                    { t: "De contribuer à l'utilisation de masse des produits chimiques", c: false, imageUrl: "https://picsum.photos/seed/masse-chimique/200/200" } // Image: Grande cuve dans une usine chimique.
                ]},
                { q: "La convention de Ramsar de 1971 est relative aux zones humides. Son objectif est :", a: [
                    { t: "La conservation et l'utilisation rationnelle de ressources et d'habitats naturels", c: true, imageUrl: "https://picsum.photos/seed/ramsar/200/200" }, // Image: Marais ou zone humide avec des oiseaux.
                    { t: "Le maintien à court terme des caractéristiques écologiques des zones humides", c: false, imageUrl: "https://picsum.photos/seed/court-terme/200/200" } // Image: Une horloge qui tourne vite.
                ]},
                { q: "CITES, est la convention sur le commerce international des espèces de faune et de flore sauvages menacées d'extinction. Elle dispose que :", a: [
                    { t: "L'introduction en provenance de la mer d'un spécimen d'une espèce inscrite à l'Annexe II nécessite la délivrance préalable d'un certificat", c: true, imageUrl: "https://picsum.photos/seed/certificat/200/200" }, // Image: Un document officiel avec un tampon.
                    { t: "L'exportation d'un spécimen d'une espèce inscrite à l'Annexe I ne nécessite pas la délivrance et la présentation préalables d'un permis d'exportation", c: false, imageUrl: "https://picsum.photos/seed/pas-permis/200/200" } // Image: Une valise grande ouverte à une douane.
                ]},
                { q: "La convention de Rio de Janeiro de 1992 a pour objectif de :", a: [
                    { t: "Parvenir à la conservation de la diversité biologique", c: true, imageUrl: "https://picsum.photos/seed/rio-92/200/200" }, // Image: Montage de plusieurs animaux et plantes différents.
                    { t: "Demander explicitement aux pays développés de ne pas fournir des ressources financières nouvelles", c: false, imageUrl: "https://picsum.photos/seed/pas-argent/200/200" } // Image: Main qui refuse de l'argent.
                ]}
            ]
        }
    ];

    // Variables d'état du jeu
    let currentQuizIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;

    // Sélection des éléments du DOM
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

    // --- Fonctions de navigation ---
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

    // --- Fonctions du Quiz ---
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
            
            const imageUrl = answer.imageUrl;

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

    // --- Écouteurs d'événements ---
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

    // Afficher le menu principal au chargement
    showMainMenu();
});
