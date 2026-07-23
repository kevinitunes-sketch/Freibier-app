const scannerButton = document.getElementById("startScanner");

scannerButton.addEventListener("click", startScanner);

function startScanner() {

    const scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        (decodedText) => {
            alert("QR-Code: " + decodedText);
            scanner.stop();
        }
    );

}
