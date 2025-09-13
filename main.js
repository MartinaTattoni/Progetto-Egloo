// Dropdown al click

document.querySelectorAll(".dropdown .dropbtn").forEach(btn => {
  btn.addEventListener("click", (event) => {
    const dropmenu = event.target.closest(".dropdown");
    dropmenu.classList.toggle("show");

    // chiusura menù aperti
    document.querySelectorAll(".dropdown").forEach(drop => {
      if (drop !== dropmenu) drop.classList.remove("show");
    });
  });
});



// chiudi dropdown cliccando all'esterno

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
  }
});



// CARD DI DETTAGLIO ALL'APERTURA 

const openBtns = document.querySelectorAll(".openModal");

// Aggiunta del messaggio di dettaglio una volta aperte le card

const modalContainer = `
    <div class="modal-inner">
        <h2>🍂🥂 Vivi un’esperienza unica tra vino e natura! 🥂🍂</h2>
        <h3>Unisciti a noi per una degustazione di vini pregiati immersa nel verde, tra paesaggi incantevoli e atmosfere rilassanti. Scopri nuovi sapori, ascolta storie affascinanti sui nostri vini e lasciati guidare in un percorso sensoriale indimenticabile.</h3>
        <p><i class="fa-solid fa-ticket"></i> Posti limitati – prenota subito il tuo biglietto e trasforma un giorno qualunque in un’esperienza memorabile!</p>
        <p><i class="fa-solid fa-phone"></i> Chiama adesso e riserva il tuo posto: <strong>+39 123 456 7890</strong></p>
        <button class="closeModal">Chiudi</button>
    </div>
`;

openBtns.forEach(btn => {

  btn.addEventListener("click", () => {
    
    const modal = document.createElement("div");
    modal.classList.add("modal", "open");
    modal.innerHTML = modalContainer;
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    
    const closeBtn = modal.querySelector(".closeModal");
    closeBtn.addEventListener("click", () => {
      modal.remove();
      document.body.style.overflow = "";

    });

  });

});




