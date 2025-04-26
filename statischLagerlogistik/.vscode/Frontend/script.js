// Sobald das DOM fertig geladen ist
document.addEventListener("DOMContentLoaded", function() {

    // Funktion zum Erstellen einer Section mit Fade-In und Delay
    function createSection(className, innerHTML, delay = 0) {
      const section = document.createElement("section");
      section.className = `${className} fade-in`;
      section.style.animationDelay = `${delay}s`; // Verzögerung setzen
      section.innerHTML = innerHTML;
      document.body.appendChild(section);
    }
  
    let delay = 0.2; // Start-Delay
  
    // Logo-Section (kommt zuerst)
    createSection("logo-section", `
      <div class="logo-container">
        <img src="logo_aktuell.png" alt="Logo_aktuell">
        <h1>Willkommen!</h1>
      </div>
    `, delay);
  
    delay += 0.3;
  
    // Formular-Sektion
    createSection("form-section", `
      <div class="form-container">
       <img src="logo_aktuell.png" alt="Logo_aktuell"> 
        <h2>Login</h2>
        <form id="loginForm">
          <input type="text" id="username" placeholder="Benutzername" required>
          <input type="password" id="password" placeholder="Passwort" required>
          <input type="submit" id="loginButton" value="Einloggen">
        </form>
      </div>
    `, delay);
  
    delay += 0.3;
  
    // Footer-Sektion
    createSection("footer-section", `
      <div class="footer-container">
        <p>&copy; 2025 Deine Firma</p>
        <a href="#">Impressum</a>
      </div>
    `, delay);
  
    // Danach die weiteren Skripte laden
    loadScript("js/StartseiteQR.js");
    loadScript("js/Loginstartseite.js");
    loadScript("js/Lagertabelle.js");
    loadScript("js/Lagerbestand.js");
  
    // Spinner ausblenden, nachdem die Sections erstellt sind
    setTimeout(() => {
      hideSpinner();
    }, 1000); // Spinner mindestens 1 Sekunde sichtbar lassen
  
  });
  
  // Auch noch absichern: Wenn alles (Bilder etc.) geladen ist, Spinner verstecken
  window.addEventListener("load", function() {
    hideSpinner();
  });
  
  // Hilfsfunktion: Spinner ausblenden
  function hideSpinner() {
    const spinner = document.getElementById("loading-spinner");
    if (spinner) {
      spinner.style.opacity = "0"; // sanft ausfaden
      spinner.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        spinner.style.display = "none";
      }, 500); // nach Ausfaden komplett entfernen
    }
  }
  
  // Hilfsfunktion: Skripte dynamisch laden
  function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  }
  
  
  
//Erklärung:
//Der Spinner wird nach dem Erstellen der Sections und Laden der Skripte ausgeblendet.

//Dies geschieht in der setTimeout-Funktion, die den Spinner nach 1 Sekunde (oder länger, je nach deinem Wunsch) ausblendet.

//Die Verzögerung im setTimeout stellt sicher, dass der Spinner mindestens 1 Sekunde lang sichtbar bleibt.

//-------------------------
// window.addEventListener= stellt sicher ,das der Spinner auch entfernt wird wenn die gesamte Seite mit allen externen 
//Ressourcen zBBildern,Logos ect geladen ist
//NÜTZLICH wenn man möchte dass der Spinner wirklich erst nach vollständigem laden der Seite verschwindet