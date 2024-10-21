/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const firstCharacters = [];

names.forEach(function(currentItem) {
    let firstCharacter = currentItem.charAt(0);
    firstCharacters.push(firstCharacter);
})

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(firstCharacters);