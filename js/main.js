
// METHODE FINIE ET FONCTIONNELLE

// variables séparées pour chaque maison pour stocker les points
let gryffondorPoints = 0;
let serpentardPoints = 0;
let poufsoufflePoints = 0;
let serdaiglePoints = 0;


// sélectionner les boutons d'ajout de points pour chaque maison
const btnGryf = document.querySelector('#gryffondorButton');
const btnSerp = document.querySelector('#serpentardButton');
const btnPouf = document.querySelector('#poufsouffleButton');
const btnSerd = document.querySelector('#serdaigleButton');


// sélectionner les éléments de texte qui affichent les points de chaque maison
const pointsGryf = document.querySelector('#pointsGryf');
const pointsSerp = document.querySelector('#pointsSerp');
const pointsPouf = document.querySelector('#pointsPouf');
const pointsSerd = document.querySelector('#pointsSerd');

// charger les points de chaque maison depuis le `localStorage`
function loadPointsFromLocalStorage() {
    // charge les points de Gryffondor
    if (localStorage.getItem('gryffondor')) {
        gryffondorPoints = parseInt(localStorage.getItem('gryffondor'));
    }
    // charge les points de Serpentard
    if (localStorage.getItem('serpentard')) {
        serpentardPoints = parseInt(localStorage.getItem('serpentard'));
    }
    // charge les points de Poufsouffle
    if (localStorage.getItem('poufsouffle')) {
        poufsoufflePoints = parseInt(localStorage.getItem('poufsouffle'));
    }
    // charge les points de Serdaigle
    if (localStorage.getItem('serdaigle')) {
        serdaiglePoints = parseInt(localStorage.getItem('serdaigle'));
    }

    // mettre à jour l'affichage des points dans le HTML pour chaque maison
    pointsGryf.textContent = `${gryffondorPoints} point${gryffondorPoints > 1 ? 's' : ''} pour Gryffondor`;
    pointsSerp.textContent = `${serpentardPoints} point${serpentardPoints > 1 ? 's' : ''} pour Serpentard`;
    pointsPouf.textContent = `${poufsoufflePoints} point${poufsoufflePoints > 1 ? 's' : ''} pour Poufsouffle`;
    pointsSerd.textContent = `${serdaiglePoints} point${serdaiglePoints > 1 ? 's' : ''} pour Serdaigle`;

    // mettre à jour l'ordre du classement des maisons
    rankingClassement();
}

// appel de la fonction pour charger les points au chargement de la page
loadPointsFromLocalStorage();

// sauvegarder les points dans le `localStorage` pour une maison spécifique
function savePointsToLocalStorage(house, points) {
    localStorage.setItem(house, points);
}

// ajout des points à Gryffondor
function addPointsGryffondor() {
    btnGryf.addEventListener('click', (event) => {
        event.preventDefault(); // empêche le reload de la page
        const input = document.querySelector(`input[name="points_gryffondor"]`); // sélectionne l'input gryffondor
        const pointsAdd = parseInt(input.value); // convertit la valeur de l'input en nombre
        gryffondorPoints += pointsAdd; // ajout des points au total de Gryffondor
        pointsGryf.textContent = `${gryffondorPoints} point${gryffondorPoints > 1 ? 's' : ''} pour Gryffondor`; // met à jour l'affichage des points de gryffondor au html
        savePointsToLocalStorage('gryffondor', gryffondorPoints); // enregistre les nouveaux points dans le localStorage
        rankingClassement(); // met à jour l'ordre du classement
    });
}

// ajout des points à Serpentard
function addPointsSerpentard() {
    btnSerp.addEventListener('click', (event) => {
        event.preventDefault(); // empêche le reload de la page
        const input = document.querySelector(`input[name="points_serpentard"]`); // sélectionne l'input serpentard
        const pointsAdd = parseInt(input.value); // convertit la valeur de l'input en nombre
        serpentardPoints += pointsAdd; // ajout des points au total de Serpentard
        pointsSerp.textContent = `${serpentardPoints} point${serpentardPoints > 1 ? 's' : ''} pour Serpentard`; // met à jour l'affichage des points de serptentard au html 
        savePointsToLocalStorage('serpentard', serpentardPoints); // enregistre les nouveaux points dans le localStorage
        rankingClassement(); // met à jour l'ordre du classement
    });
}

// ajout des points à Poufsouffle
function addPointsPoufsouffle() {
    btnPouf.addEventListener('click', (event) => {
        event.preventDefault(); // empêche le reload de la page
        const input = document.querySelector(`input[name="points_poufsouffle"]`); // sélectionne l'input poufsouffle
        const pointsAdd = parseInt(input.value); // convertit la valeur de l'input en nombre
        poufsoufflePoints += pointsAdd; // ajout des points au total de Serpentard
        pointsPouf.textContent = `${poufsoufflePoints} point${poufsoufflePoints > 1 ? 's' : ''} pour Poufsouffle`; // met à jour l'affichage des points de poufsouffle au html
        savePointsToLocalStorage('poufsouffle', poufsoufflePoints); // enregistre les nouveaux points dans le localStorage
        rankingClassement(); // met à jour l'ordre du classement
    });
}

// Ajouter des points à Serdaigle
function addPointsSerdaigle() {
    btnSerd.addEventListener('click', (event) => {
        event.preventDefault(); // empêche le reload de la page
        const input = document.querySelector(`input[name="points_serdaigle"]`); // sélectionne l'input de Serdaigle
        const pointsAdd = parseInt(input.value); // convertit la valeur de l'input en nombre 
        serdaiglePoints += pointsAdd; // ajout des points au total de Serdaigle
        pointsSerd.textContent = `${serdaiglePoints} point${serdaiglePoints > 1 ? 's' : ''} pour Serdaigle`; // met à jour l'affichage des points de serdaigle au html
        savePointsToLocalStorage('serdaigle', serdaiglePoints); // enregistre les nouveaux points dans le localStorage
        rankingClassement(); // met à jour l'ordre du classement
    });
}

// classe les maisons en fonction de leur total points
function rankingClassement() {
    const classementContainer = document.querySelector('#containerClassement'); // sélectionne le conteneur du classement (qui est dans le html)

    // créer un tableau avec les maisons et leur total de points
    let houses = [
        { element: pointsGryf.parentElement, points: gryffondorPoints },
        { element: pointsSerp.parentElement, points: serpentardPoints },
        { element: pointsPouf.parentElement, points: poufsoufflePoints },
        { element: pointsSerd.parentElement, points: serdaiglePoints }
    ];

    // trie le tableau en fonction des points (du plus grand au plus petit)
    houses.sort((a, b) => b.points - a.points);

    // réorganise l'ordre des éléments dans le container du classement
    houses.forEach(house => {
        classementContainer.appendChild(house.element); //ajouter chaque maison triée au container
    });
}

// appel de chaque fonction pour ajouter des points
addPointsGryffondor(); // appel de la fonction pour ajouter des points à gryffondor
addPointsSerpentard(); // appel de la fonction pour ajouter des points à serpentard
addPointsPoufsouffle(); // appel de la fonction pour ajouter des points à poufsouffle
addPointsSerdaigle(); // appel de la fonction pour ajouter des points à serdaigle

document.addEventListener('keydown', (event) => { // 'keydown' correspond à n'importe quelle touche du clavier
    if (event.key === 'Escape') { // escape = echap
        localStorage.clear(); // clear le localstorage
        window.location.reload(); // reload pour afficher les changement
    }
});



// METHODE FINIE, FONCTIONNELLE, MAIS PLUS COMPLEXE CAR FONCTION QUI MARCHE PEUT IMPORTE LA MAISON


// const btnGryf = document.querySelector('#gryffondorButton');
// const btnSerp = document.querySelector('#serpentardButton');
// const btnPouf = document.querySelector('#poufsouffleButton');
// const btnSerd = document.querySelector('#serdaigleButton');

// const pointsGryf = document.querySelector('#pointsGryf');
// const pointsSerp = document.querySelector('#pointsSerp');
// const pointsPouf = document.querySelector('#pointsPouf');
// const pointsSerd = document.querySelector('#pointsSerd');

// let total = {
//     gryffondor: 0,
//     serpentard: 0,
//     poufsouffle: 0,
//     serdaigle: 0,
// }

// function loadPointsFromLocalStorage() {
//     if (localStorage.getItem('gryffondor')) {
//         total.gryffondor = parseInt(localStorage.getItem('gryffondor'));
//     }
//     if (localStorage.getItem('serpentard')) {
//         total.serpentard = parseInt(localStorage.getItem('serpentard'));
//     }
//     if (localStorage.getItem('poufsouffle')) {
//         total.poufsouffle = parseInt(localStorage.getItem('poufsouffle'));
//     }
//     if (localStorage.getItem('serdaigle')) {
//         total.serdaigle = parseInt(localStorage.getItem('serdaigle'));
//     }

//     pointsGryf.textContent = `${total.gryffondor} point${total.gryffondor > 1 ? 's' : ''} pour Gryffondor`;
//     pointsSerp.textContent = `${total.serpentard} point${total.serpentard > 1 ? 's' : ''} pour Serpentard`;
//     pointsPouf.textContent = `${total.poufsouffle} point${total.poufsouffle > 1 ? 's' : ''} pour Poufsouffle`;
//     pointsSerd.textContent = `${total.serdaigle} point${total.serdaigle > 1 ? 's' : ''} pour Serdaigle`;
//     rankingClassement();
// }


// loadPointsFromLocalStorage();


// function savePointsToLocalStorage(house) {
//     localStorage.setItem(house, total[house]);
// }

// function addPoints(button, inputName, pointsText, house) {
//     button.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         const input = document.querySelector(`input[name="${inputName}"]`);
//         const pointsAdd = parseInt(input.value); 
//         total[house] += pointsAdd;
//         pointsText.textContent = `${total[house]} point${total[house] > 1 ? 's' : ''}`; 
        
//         savePointsToLocalStorage(house);
//         rankingClassement();
//     });
// }

// function rankingClassement() {
//     const classementContainer = document.querySelector('#containerClassement');
//     const houses = [
//         { name: 'gryffondor', total: total.gryffondor, element: pointsGryf},
//         { name: 'serpentard', total: total.serpentard, element: pointsSerp},
//         { name: 'poufsouffle', total: total.poufsouffle, element: pointsPouf},
//         { name: 'serdaigle', total: total.serdaigle, element: pointsSerd},
//     ];

//     houses.sort((a, b) => b.total - a.total);

//     houses.forEach(house => {
//         classementContainer.appendChild(house.element.parentElement);
//     })

// }


// addPoints(btnGryf, 'points_gryffondor', pointsGryf, `gryffondor`);
// addPoints(btnSerp, 'points_serpentard', pointsSerp, `serpentard`);
// addPoints(btnPouf, 'points_poufsouffle', pointsPouf, `poufsouffle`);
// addPoints(btnSerd, 'points_serdaigle', pointsSerd, `serdaigle`);




// METHODE NON FINIE (PAS DE CLASSEMENT ET LOCALSTORAGE) MAIS DIFFERENTE


// let totalGryf = 0;
// let totalSerp = 0;
// let totalPouf = 0;
// let totalSerd = 0;

// function ajouterPoints(inputName, buttonId, pointsId, total) {
//     const input = document.querySelector(inputName);
//     const pointsElements = document.querySelector(pointsId);

//     document.querySelector(buttonId).addEventListener('click', (event) => {
//         event.preventDefault();
//         const pointsAjoutes = parseInt(input.value);
//         total += pointsAjoutes;
//         pointsElements.textContent = total;
//     });
// }

// ajouterPoints('input[name="points_gryffondor"]', '#gryffondorButton', '#pointsGryf', totalGryf);
// ajouterPoints('input[name="points_serpentard"]', '#serpentardButton', '#pointsSerp', totalSerp);
// ajouterPoints('input[name="points_poufsouffle"]', '#poufsouffleButton', '#pointsPouf', totalPouf);
// ajouterPoints('input[name="points_serdaigle"]', '#serdaigleButton', '#pointsSerd', totalSerd);




