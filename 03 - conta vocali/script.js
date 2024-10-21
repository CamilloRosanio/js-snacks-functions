/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Somma del conteggio delle vocali in una parola
let sum = 0;

// Funzione che determina se un carattere siau na vocale o no
let isVowel = 0;

// Array dove finiranno le vocali conteggiate
const vowelsInString = [];


// Dichiaro una funzione semplice per confrontare un carattere e verificare se sia una vocale.
const isVowel = (stringToCheck) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if(vowels.includes(stringToCheck)) {
        return true;
    }
}


// Dichiara la funzione qui.
word.forEach((currentCharacter) => {
    
}


)


// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsFound);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)