/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
const unSaluto = (string) => `Ciao ${string}, benvenuto!`;

// Invoca la funzione qui e stampa il risultato in console

let myResult = unSaluto(name);


//Risultato atteso se si passa 'Mario': // ciao Mario

console.log(myResult);