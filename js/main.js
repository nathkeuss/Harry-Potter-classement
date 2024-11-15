// const btnGryf = document.querySelector('#gryffondorButton');
// const btnSerp = document.querySelector('#serpentardButton');
// const btnPouf = document.querySelector('#poufsouffleButton');
// const btnSerd = document.querySelector('#serdaigleButton');

// const pointsGryf = document.querySelector('#pointsGryf');
// const pointsSerp = document.querySelector('#pointsSerp');
// const pointsPouf = document.querySelector('#pointsPouf');
// const pointsSerd = document.querySelector('#pointsSerd');

// let totalGryf = 0;
// let totalSerp = 0;
// let totalPouf = 0;
// let totalSerd = 0;


// function ajouterPoints(button, inputName, pointsText, total) {
//     button.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         const input = document.querySelector(`input[name="${inputName}"]`);
//         const pointsAjoutes = parseInt(input.value); 
//         total += pointsAjoutes;
//         pointsText.textContent = `${total} point${total > 1 ? 's' : ''}`; 
//     });
// }



// ajouterPoints(btnGryf, 'points_gryffondor', pointsGryf, totalGryf);
// ajouterPoints(btnSerp, 'points_serpentard', pointsSerp, totalSerp);
// ajouterPoints(btnPouf, 'points_poufsouffle', pointsPouf, totalPouf);
// ajouterPoints(btnSerd, 'points_serdaigle', pointsSerd, totalSerd);



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


const btnGryf = document.querySelector('#gryffondorButton');
const btnSerp = document.querySelector('#serpentardButton');
const btnPouf = document.querySelector('#poufsouffleButton');
const btnSerd = document.querySelector('#serdaigleButton');

const pointsGryf = document.querySelector('#pointsGryf');
const pointsSerp = document.querySelector('#pointsSerp');
const pointsPouf = document.querySelector('#pointsPouf');
const pointsSerd = document.querySelector('#pointsSerd');

let total = {
    gryffondor: 0,
    serpentard: 0,
    poufsouffle: 0,
    serdaigle: 0,
}

function loadPointsFromLocalStorage() {
    if (localStorage.getItem('gryffondor')) {
        total.gryffondor = parseInt(localStorage.getItem('gryffondor'));
    }
    if (localStorage.getItem('serpentard')) {
        total.serpentard = parseInt(localStorage.getItem('serpentard'));
    }
    if (localStorage.getItem('poufsouffle')) {
        total.poufsouffle = parseInt(localStorage.getItem('poufsouffle'));
    }
    if (localStorage.getItem('serdaigle')) {
        total.serdaigle = parseInt(localStorage.getItem('serdaigle'));
    }

    pointsGryf.textContent = `${total.gryffondor} point${total.gryffondor > 1 ? 's' : ''} pour Gryffondor`;
    pointsSerp.textContent = `${total.serpentard} point${total.serpentard > 1 ? 's' : ''} pour Serpentard`;
    pointsPouf.textContent = `${total.poufsouffle} point${total.poufsouffle > 1 ? 's' : ''} pour Poufsouffle`;
    pointsSerd.textContent = `${total.serdaigle} point${total.serdaigle > 1 ? 's' : ''} pour Serdaigle`;
}


loadPointsFromLocalStorage();


function savePointsToLocalStorage(house) {
    localStorage.setItem(house, total[house]);
}

function addPoints(button, inputName, pointsText, house) {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        const input = document.querySelector(`input[name="${inputName}"]`);
        const pointsAdd = parseInt(input.value); 
        total[house] += pointsAdd;
        pointsText.textContent = `${total[house]} point${total[house] > 1 ? 's' : ''}`; 
        
        savePointsToLocalStorage(house);
        rankingClassement();
    });
}

function rankingClassement() {
    const classementContainer = document.querySelector('#containerClassement');
    const houses = [
        { name: 'gryffondor', total: total.gryffondor, element: pointsGryf},
        { name: 'serpentard', total: total.serpentard, element: pointsSerp},
        { name: 'poufsouffle', total: total.poufsouffle, element: pointsPouf},
        { name: 'serdaigle', total: total.serdaigle, element: pointsSerd},
    ];

    houses.sort((a, b) => b.total - a.total);

    houses.forEach(house => {
        classementContainer.appendChild(house.element.parentElement);
    })

}



addPoints(btnGryf, 'points_gryffondor', pointsGryf, `gryffondor`);
addPoints(btnSerp, 'points_serpentard', pointsSerp, `serpentard`);
addPoints(btnPouf, 'points_poufsouffle', pointsPouf, `poufsouffle`);
addPoints(btnSerd, 'points_serdaigle', pointsSerd, `serdaigle`);

