function runDownload() {
    document.body.innerHTML = "";

    document.body.style.backgroundColor = "#00C000";

    let checkmark = document.createElement("i");
    checkmark.className = "bi bi-download";
    document.body.appendChild(checkmark);
    checkmark.style.position = "absolute";
    checkmark.style.top = "50%";
    checkmark.style.left = "50%";
    checkmark.style.transform = "translate(-50%, -50%)";
    checkmark.style.fontSize = "100px";
    checkmark.style.color = "white";

    setTimeout(function () {
        window.location.href = "https://downloads.malwarebytes.com/file/mb-windows";
    }, 1000);
}