// reset js
'use strict';

console.log("ciao mondo");

// creazione di un array vuoto per la lista della spesa 

const listaDellaSpesa = [];


// richiesta di input tramite propt all'utente dell'inserimento degli elementi della lista della spesa 

let thingsToBuy = prompt('Inserisci un elemento da aggiungere alla tua lista della spesa o scrivi "fine" per terminare');

// ciclo while per l'inserimento degli elementi della lista della spesa

while(thingsToBuy.toLocaleLowerCase() !== "fine"){
    // push degli elementi della lista della spesa all'interno dell'array vuoto

    listaDellaSpesa.push(thingsToBuy);

    // chiediamo nuovamente all'utente di inserire un elemento

    thingsToBuy = prompt('Inserisci un elemento da aggiungere alla tua lista della spesa o scrivi "fine" per terminare');
}

// ricerca nel documento l'elemento id = "list" 

const listaDellaSpesaParagrafo = document.getElementById('list');