/*Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
*/

// codici sconto
let promotionalcode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function submitform(event) {
    event.preventDefault();
    console.log("il form funziona");

document.getElementById("button"). addEventListener("click", function () {
let ore = parseInt (document.getElementById ("hour").value);
let tipodilavoro= parseInt (document.getElementById ("typeofwork").value);
let prezzofinale= 0;

if (typeofwork=backend) {
    price = 20.5 * ore;
} else if (typeofwork=frontend) {
    price= 15.3 * ore;
} else {
    price= 33.6 * ore;
}


//parte sui codici sconto


























/*let codicisconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


function submitform(event) {
    event.preventDefault();
    console.log("il form funziona");


    document.getElementById("button").addEventListener("click", function () {
        let prezzofinale = 0;
        let tipodiofferta = parseInt(document.getElementById("offertype").value);
        let ore = parseInt(document.getElementById("ore").value);
        let codsconto = document.getElementById("codicesconto").value;

        switch (tipodiofferta) {
            case "primo":
                prezzofinale = 20.5 * ore;
            case "secondo":
                prezzofinale = 15.3 * ore;
            case "terzo":
                prezzofinale = 33.6 * ore;
        }
    })


        let hocodicesconto = false;
        for (let i = 0; i < codicisconto.lenght; i++) {
            if (codicisconto[i] == codsconto) {
                hocodicesconto = true;
            }
        }


        if ((codsconto != "") && !hocodicesconto) {
            alert("codice non valido");
        }

        if (hocodicesconto) {
            prezzofinale = 0.75 * prezzofinale;
        }

        prezzofinale = prezzofinale.toFixed(2);
        document.getElementById("prezzo").innerHTML = "il prezzo finale è:" + prezzofinale;

}    
    


