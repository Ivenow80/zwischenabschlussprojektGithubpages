// Wartet, bis der DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    
    // Funktion, um eine Bestätigungsmeldung für den Kontakt anzuzeigen
    function showContactConfirmation() {
        alert("Danke für deine Kontaktaufnahme. Wir werden uns so schnell wie möglich bei dir melden.");
    }

    // E-Mail-Link auswählen und Event-Listener hinzufügen
    const emailLink = document.querySelector('a[href="mailto:IvonneFranke.IT@web.de"]');
    if (emailLink) {
        emailLink.addEventListener("click", function(event) {
            showContactConfirmation(); // Zeigt eine Bestätigung an, wenn auf die E-Mail-Adresse geklickt wird
        });
    }

    // LinkedIn-Link (optional) verknüpfen
    const linkedinLink = document.querySelector('a[href="https://www.linkedin.com"]');
    if (linkedinLink) {
        linkedinLink.addEventListener("click", function(event) {
            console.log("LinkedIn-Link wurde geöffnet."); // Optionale Konsolenmeldung
        });
    }

    // GitHub-Link (optional) verknüpfen
    const githubLink = document.querySelector('a[href="https://github.com"]');
    if (githubLink) {
        githubLink.addEventListener("click", function(event) {
            console.log("GitHub-Link wurde geöffnet."); // Optionale Konsolenmeldung
        });
    }

    // QR-Code für LinkedIn/GitHub dynamisch einfügen
    const kontaktAbschnitt = document.querySelector('p:has(strong:contains("Kontakt"))');
    if (kontaktAbschnitt) {
        // Neues Element für QR-Code erstellen
        const qrCodeContainer = document.createElement("div");
        qrCodeContainer.innerHTML = `
            <strong>QR-Code für LinkedIn/GitHub:</strong><br>
            <img src="img/QRlinked_GitHub.png" alt="LinkedIn und GitHub QR-Code" width="150">
        `;
        kontaktAbschnitt.appendChild(qrCodeContainer);
    }

});

 // Was passiert hier genau?
 // DOMContentLoaded sorgt dafür, dass der Code erst ausgeführt wird, wenn das Dokument vollständig geladen ist (sicherer, als sofort zu starten).
  
 // impressumHTML speichert deinen fertigen HTML-Block.
  
  //document.body.innerHTML = impressumHTML; setzt den gesamten Inhalt der Seite auf das Impressum.
  
  //Die <a>-Tags für E-Mail, LinkedIn und GitHub sind richtig klickbar gemacht.
  
  
