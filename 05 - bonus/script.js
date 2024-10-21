/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const hourBasedGreetings = (userName) => {
    let time = (new Date()).getHours();
    let outputMessage;

    if (time > 0 && time < 13) {
        outputMessage = `Buongiorno a te ${userName}!`;
    } else if (time >= 13 && time <= 17) {
        outputMessage = `Buon pomeriggio a te ${userName}!`;
    } else {
        outputMessage = `Buonasera a te ${userName}!`;
    }

    return outputMessage;
}



// Invoca la funzione qui e stampa il risultato in console
let myResult = hourBasedGreetings(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(myResult);
