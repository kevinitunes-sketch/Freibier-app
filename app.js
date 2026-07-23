let currentMember = "";
let currentBeers = 0;

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
    beers: currentBeers + 1
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
           db.collection("members")
    .doc(currentMember)
    .get()
    .then((doc) => {

     if (doc.exists) {

    alert(JSON.stringify(doc.data()));

    document.getElementById("usedBeer").textContent = doc.data().beers;
       currentBeers = doc.data().beers;
        alert(document.getElementById("usedBeer").textContent);
    document.getElementById("remainingBeer").textContent = 2 - doc.data().beers;

} else {
            document.getElementById("usedBeer").textContent = "0";
       currentBeers = 0;
      
            document.getElementById("remainingBeer").textContent = "2";
        }

    });

          document.getElementById("scanner").style.display = "none";

scanner.stop();
          

        },
        (errorMessage) => {
            // Absichtlich leer.
        }
    );

}
