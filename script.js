// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambiatitolo(nuovoTitolo){
    var titoloelemento = document.getElementById("h1");
    titoloelemento.textContent=nuovoTitolo;
}
cambiatitolo("DENZEN STORE - CAMBIATO");
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
document.body.style.backgroundColor = "gray";
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio. Commento personale:  NON L'HO CAPITO
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function aggiungiClasseAmazon(){
    var links = document.getElementsByTagName ('a');
    for(i = 0; i<links.length; i++ ){
        if(links[i].href.includes("amazon")){
            links[i].classList.add ('Linked');

        }
        }
    } 
window.addEventListener('load' , aggiungiClasseAmazon);
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine Commento personale:  NON CI SONO RIUSCITO
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata NON CI SONO RIUSCITO