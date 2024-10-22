/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

const firstCharacters = [];

// Dichiara la funzione qui.

function extractFirstCharacter (string) {
    
    // OPZIONE 1
    // result = string.charAt(0);
    // return result;

    // OPZIONE 2 Mapping
    const result = string.map((string => string[0]));
    return result;
}

console.log(extractFirstCharacter(names[0]));




// Invoca la funzione qui e stampa il risultato in console
names.forEach(function(currentItem) {
    const firstCharacters = [];
    let firstCharacter = extractFirstCharacter(currentItem);
    firstCharacters.push(firstCharacter);

    return firstCharacters;
})


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(firstCharacters);