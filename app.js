let currentMember = "";
let currentBeers = 0;

const giveBeerButton = document.getElementById("giveBeer");
const scannerButton = document.getElementById("startScanner");

scannerButton.addEventListener("click", startScanner);

giveBeerButton.addEventListener("click", () => {

  if (currentMember === "") {
    return;
}
 
if (currentBeers >= 2) {
    alert("Dieses Mitglied hat bereits alle 2 Freibiere erhalten.");
    return;
}
db.collection("members")
  .doc(currentMember)
  .get()
  .then((doc) => {

    let beers = 0;

    if (doc.exists) {
        beers = doc.data().beers || 0;
    }

    if (beers >= 2) {
        alert("Dieses Mitglied hat bereits alle 2 Freibiere erhalten.");
        return;
    }

    return db.collection("members")
      .doc(currentMember)
      .set({
          beers: beers + 1
      }, { merge: true });

})
.then((result) => {

    if (!result) {
        return;
    }

    currentBeers++;

    document.getElementById("usedBeer").textContent = currentBeers;
    document.getElementById("remainingBeer").textContent = 2 - currentBeers;


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


    document.getElementById("usedBeer").textContent = doc.data().beers;
       currentBeers = doc.data().beers;
 
    document.getElementById("remainingBeer").textContent = 2 - doc.data().beers;
       if (doc.data().beers >= 2) {
    giveBeerButton.disabled = true;
} else {
    giveBeerButton.disabled = false;
}

} else {
            document.getElementById("usedBeer").textContent = "0";
       currentBeers = 0;
      
            document.getElementById("remainingBeer").textContent = "2";
       giveBeerButton.disabled = false;
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
