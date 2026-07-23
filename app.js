let currentMember = "";

const giveBeerButton = document.getElementById("giveBeer");
const scannerButton = document.getElementById("startScanner");

scannerButton.addEventListener("click", startScanner);

giveBeerButton.addEventListener("click", () => {

  if (currentMember === "") {
    return;
}

db.collection("members")
  .doc(currentMember)
  .set({
    beers: 1
}, { merge: true })
  .then(() => {
      alert("Gespeichert");
  })
  .catch((error) => {
    console.error(error);
      alert(error.message);
  });
});

function startScanner() {

    const scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        (decodedText) => {

            document.getElementById("memberCard").classList.remove("hidden");

            currentMember = decodedText;

            document.getElementById("memberNumber").textContent = currentMember;
            document.getElementById("usedBeer").textContent = "0";
            document.getElementById("remainingBeer").textContent = "2";

            scanner.stop();
            document.getElementById("scanner").style.display = "none";

        },
        (errorMessage) => {
            // Absichtlich leer.
        }
    );

}
