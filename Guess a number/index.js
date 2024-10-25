function promptNumber(message){

const resultNumber = prompt(message)
return resultNumber

}

function didIwin(choosenNumber, secretNumber){

let messageBravo = document.querySelector('h1')

    if (choosenNumber == secretNumber){
        alert("Bravo ! Vous avez deviné le nombre")
        messageBravo.innerText = "Bravo vous avez réussi"
        return true
    }
    else if (choosenNumber > secretNumber){
        alert("Le nombre est plus petit")
        return false
    }
    else {
        alert("Le nombre est plus grand")
        return false
    }
}

function askPlayer1(){

    let resultPlayer = promptNumber("Choisis un nombre secret entre 0 et 50")

    while (resultPlayer <0 || resultPlayer >50){ //si (resultPlayer inférieur à 0 OU resultPlayer supérieur à 50) fait: redemande au joueur
        alert('Relis la consigne analphabète ')
        resultPlayer = promptNumber("Choisis un nombre secret entre 0 et 50")
    }
    return resultPlayer
    }
    

function gamePlayChief(){ //réalise les appels de fonctions

    const numberToGuess = askPlayer1()

    let givenNumber = promptNumber("Quel est le nombre secret ?")
    while(didIwin(givenNumber,numberToGuess)==false){ //While est une boucle. Tant que (didIwin est faux) fait: redemande au joueur 
        givenNumber = promptNumber("Quel est le nombre secret ?")   //change le parametre 
    }
}

gamePlayChief()

