const btnGryf = document.querySelector('#gryffondorButton');
const btnSerp = document.querySelector('#serpentardButton');
const btnPouf = document.querySelector('#poufsouffleButton');
const btnSerd = document.querySelector('#serdaigleButton');

const pointsGryf = document.querySelector('#pointsGryf');
const pointsSerp = document.querySelector('#pointsSerp');
const pointsPouf = document.querySelector('#pointsPouf');
const pointsSerd = document.querySelector('#pointsSerd');

let totalGryf = 0;
let totalSerp = 0;
let totalPouf = 0;
let totalSerd = 0;


function ajouterPoints(button, inputName, pointsElement, total) {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        const input = document.querySelector(`input[name="${inputName}"]`);
        const pointsAjoutes = parseInt(input.value); 
        total += pointsAjoutes;
        pointsElement.textContent = `${total} point${total > 1 ? 's' : ''}`; 
    });
}



ajouterPoints(btnGryf, 'points_gryffondor', pointsGryf, totalGryf);
ajouterPoints(btnSerp, 'points_serpentard', pointsSerp, totalSerp);
ajouterPoints(btnPouf, 'points_poufsouffle', pointsPouf, totalPouf);
ajouterPoints(btnSerd, 'points_serdaigle', pointsSerd, totalSerd);



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


