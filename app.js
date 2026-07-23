console.log("🍺 Freibier-App gestartet");

const memberCard = document.getElementById("memberCard");
const memberNumber = document.getElementById("memberNumber");
const usedBeer = document.getElementById("usedBeer");
const remainingBeer = document.getElementById("remainingBeer");
const message = document.getElementById("message");

function showMember(id, beersUsed) {
    memberCard.classList.remove("hidden");

    memberNumber.textContent = id;
    usedBeer.textContent = beersUsed;
    remainingBeer.textContent = Math.max(0, 2 - beersUsed);

    if (beersUsed >= 2) {
        message.textContent = "❌ Keine Freibiere mehr verfügbar";
    } else {
        message.textContent = "✅ Freibier verfügbar";
    }
}

// Nur zum Testen
showMember("9110017289", 1);
