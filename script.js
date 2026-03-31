// Funzione base per il bottone di ricerca
function cercaAuto() {
    const marca = document.getElementById('marca').value;
    const prezzo = document.getElementById('prezzo').value;
    
    let messaggio = "Ricerca avviata per: ";
    messaggio += marca ? marca.toUpperCase() : "Tutte le marche";
    messaggio += prezzo ? ` - Sotto i ${prezzo}€` : " - Qualsiasi prezzo";
    
    // In un sito reale, questo codice filtrerebbe il database
    alert(messaggio);
}

// Aggiunge un effetto di click ai bottoni dei dettagli
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        alert("Reindirizzamento alla scheda dettagliata del veicolo...");
    });
});