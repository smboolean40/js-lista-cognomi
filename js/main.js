// 0. definisco l'array di cognomi
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
// 1. chiedi all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1).toLowerCase();
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
cognomi.push(cognomeUtente);
// 3. stampa la lista ordinata alfabeticamente
cognomi.sort();

for ( var i = 0; i < cognomi.length; i++ ) {
	document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// var posizioneCognome = cognomi.indexOf(cognomeUtente) + 1;

var i = 0;
var indicePosizione = -1;

while (i < cognomi.length && indicePosizione == -1) {

	if ( cognomeUtente == cognomi[i] ) {
		indicePosizione = i;
	}

	i++;
}

var posizioneCognome = indicePosizione + 1;

document.getElementById("posizione").innerHTML += posizioneCognome;
