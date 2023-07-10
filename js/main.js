/*Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
*/

document.getElementById("button"). addEventListener("click", function () {
    let sviluppobackend = 20.5;
    let sviluppofrontend = 15.3;
    let analisiprogettuale = 33.6;
    let numeroore = document.getElementById("numeroore");
    let numerooreValue= numeroore.Value ;
    
    if ("sviluppobackend") = sviluppobackend*numeroore ;
    if ("sviluppofrontend") = sviluppofrontend*numeroore;
    if ("analisiprogettuale") = analisiprogettuale*numeroore;
    return price

})
