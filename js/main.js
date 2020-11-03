// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.

const biciclette = [
  {
    nome: 'Luciano',
    peso: 30
  },
  {
    nome: 'Emanuele',
    peso: 12
  },
  {
    nome: 'Maria',
    peso: 21
  },
  {
    nome: 'Felicia',
    peso: 9
  }
];

// Default
let biciclettaLeggera = biciclette[0];
let pesoLeggero = biciclette[0].peso;

biciclette.forEach((element) => {
  if (element.peso < pesoLeggero) {
    biciclettaLeggera = element;
    pesoLeggero = element.peso;
  }
});

//Stampare i risultati
const {nome,peso} = biciclettaLeggera;
$('.container').html(`
  <div>
    <h2>Nome bicicletta leggera: ${nome}</h2>
    <h3>Peso bicicletta leggera: ${peso}</h3>
  </div>
`);



// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

//Array nomi scelti da me
const mioArray = ['Gabriele', 'Gennaro', 'Elisabetta', 'Massimo', 'Cinzia'];
let totale = mioArray.length - 1;
let minimo = parseInt( prompt('Inserisci un numero da 0 a 4'));
let massimo = parseInt( prompt('Inserisci un numero da 0 a 4'));

//Nuovo Array
let nuovoArray = [];

nuovoArray = mioArray.filter((element, index) => {
  if (minimo <= index && massimo >= index) {
    return element
  }
});

console.log(mioArray);
console.log(nuovoArray);


// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale

//Array di oggetti creato da me
const arrayCreato = [
  {
    nome: 'Tommaso',
    cognome: 'Crippa',
    eta: '26'
  },
  {
    nome: 'Giulia',
    cognome: 'Settembrini',
    eta: '48'
  },
  {
    nome: 'Antonella',
    cognome: 'Rossi',
    eta: '17'
  }
];

let arrayCreatoNew = [...arrayCreato].map(person => {
  return {
    ...person,
    position: genPosition(),
  }
});
console.table(arrayCreatoNew);

//Random position
function genPosition() {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let letter = letters[randNumero(0, letters.length - 1)];
  return letter;
}

//Randon number
function randNumero(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
