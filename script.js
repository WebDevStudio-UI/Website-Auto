function cercaAuto() {
    const marca = document.getElementById('marca').value;
    const prezzo = document.getElementById('prezzo').value;
    let msg = "Ricerca per: " + (marca ? marca.toUpperCase() : "Tutte") + " | Prezzo: " + (prezzo ? "Fino a " + prezzo + "€" : "Qualsiasi");
    alert(msg);
}

function inviaMessaggio(event) {
    event.preventDefault();
    alert("Messaggio inviato con successo! Ti contatteremo presto.");
    event.target.reset();
}
