
const input = document.getElementById('counter')
const buttonValidate = document.getElementById('validation')
const output = document.querySelector('h1')

let minValue = 0


// Ajouter un gestionnaire d'événements 'click' au bouton
buttonValidate.addEventListener('click', function() {
    // Récupérer la valeur de l'input
    const userInput = Number(input.value);
    // Vérifier si c'est le premier nombre ou si le nombre est plus grand que le minValue
    if ( minValue> userInput ) {
        // Mettre à jour minValue avec la nouvelle valeur plus grande
        minValue = userInput;
    }
    
        else {
            alert ("Le nombre n'est pas dans le range")
        }
        // Mettre à jour l'affichage du range
        output.textContent = `${minValue} < ? < 50`;
})
