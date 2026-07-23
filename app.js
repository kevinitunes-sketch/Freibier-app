let currentMember = "";

const giveBeerButton = document.getElementById("giveBeer");
const scannerButton = document.getElementById("startScanner");

scannerButton.addEventListener("click", startScanner);

giveBeerButton.addEventListener("click", () => {

    console.log("Button geklickt");

    if (currentMember === "") {
        return;
    }

    alert(currentMember);

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

        },
        (errorMessage) => {
            // Absichtlich leer.
        }
    );

}
