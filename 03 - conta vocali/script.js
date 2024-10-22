/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = prompt('Inserisci una parola o una frase');


// Dichiara la funzione qui.

/**
 * La funzione conta le vocali in una stringa, aggiungendole a un nuovo Array e indicando come risultato la lunghezza dell'Array.x
 * @param {String} string String è il parametro esterno di tipo stringa da elaborare
 * @return {Array} validCharacters è l'array reso della funzione, e la sua lunghezza è il numero di vocali contenute nella stringa.
 */
function vowelsCount(string) {
    const vowelsList = ['a','e','i','o','u','A','E','I','O','U'];
    const vowelsCount = [];
    let currentCharacter;
    let stringArray = string.split("");

    console.log('Stringa da elaborare: ' + stringArray);

    for (let i = 0; i < stringArray.length; i++) {
        currentCharacter = stringArray[i];
    
        if (vowelsList.includes(currentCharacter)) {
            vowelsCount.push(currentCharacter);
        }
        
        console.log('Current character: "' + currentCharacter + '" is included: ' + vowelsList.includes(currentCharacter));
    }

    return vowelsCount;
}


// Invoca la funzione qui e stampa il risultato in console
let myResult = vowelsCount(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(myResult);