/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const searchedSubstring = 'A';


// Dichiara la funzione qui.
const filterBySubstring = (needle, haystack) => {

    filteredArray = [];
    
    for (let i = 0; i < haystack.length; i++) {
        currentItem = haystack[i];
        console.log('currentItem: ' + currentItem);

    
        if (needle === currentItem.charAt(0)) {
            filteredArray.push(currentItem);
        }
    }

    return filteredArray;
}
// Invoca la funzione qui e stampa il risultato in console

let myResult = filterBySubstring(searchedSubstring, names);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(myResult);