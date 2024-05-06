// reset js
'use strict';

console.log("ciao mondo");

// creazione di un array vuoto per la lista della spesa 

const listaDellaSpesa = [];


// richiesta di input tramite propt all'utente dell'inserimento degli elementi della lista della spesa 

let thingsToBuy = prompt('Inserisci un elemento da aggiungere alla tua lista della spesa o scrivi "fine" per terminare');

// ciclo while per l'inserimento degli elementi della lista della spesa

while (thingsToBuy.toLocaleLowerCase() !== "fine") {
    // push degli elementi della lista della spesa all'interno dell'array vuoto

    listaDellaSpesa.push(thingsToBuy);

    // chiediamo nuovamente all'utente di inserire un elemento

    thingsToBuy = prompt('Inserisci un elemento da aggiungere alla tua lista della spesa o scrivi "fine" per terminare');
}

// ricerca nel documento l'elemento con id = "list" 

const listaDellaSpesaUl = document.getElementById('list');

// ciclo for per la stampa degli elementi della lista della spesa all'interno del UL

for (let i = 0; i < listaDellaSpesa.length; i++) {
    // creazione di un elemento li
    const li = document.createElement('li');

    // inserimento del testo all'interno dell'elemento li
    li.append(listaDellaSpesa[i]);

    // inserimento dell'elemento li all'interno del UL
    listaDellaSpesaUl.append(li);

    // Stampa il riferimento all'elemento su console
    console.log(listaDellaSpesa[i]);
}