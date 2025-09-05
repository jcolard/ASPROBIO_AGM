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
                    { t: "L'hirola", c: false, imageUrl: "https://picsum
