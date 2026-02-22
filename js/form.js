function envoyer() {
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const demande = document.getElementById("type");
    
    alert("Merci " + prenom.value + " " + nom.value + " pour votre " + demande.value + ". Nous vous recontacterons dans un délais de trois semaines.");
}