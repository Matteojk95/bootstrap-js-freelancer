/*Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
*/

document.getElementById("button"). addEventListener("click", function () {
    let sviluppobackendeachhour = 20.5;
    let sviluppofrontendeachhour = 15.3;
    let analisiprogettualeeachhour = 33.6;
    let numeroore = "i"


    if("sviloppobackendeachhour") {
        for ( let i=0; i>=1; i++) {
            console.log (20.5*i);
        }
    }
 
    if("sviluppofrontendeachhour") {
        for (let i=0; i>=1; i++) {
            console.log (15.3*i);
        }
    }

    if("analisiprogettualeeachhour") {
        for ( let i=0; i>=1; i++) {
            console.log (33.6*i);
        }
    }


});