function runCheck() {
    document.body.innerHTML = "";

    document.body.style.backgroundColor = "#00C000";

    let checkmark = document.createElement("img");
    checkmark.src = "./img/troll.png";
    document.body.appendChild(checkmark);
    checkmark.style.position = "absolute";
    checkmark.style.top = "50%";
    checkmark.style.left = "50%";
    checkmark.style.transform = "translate(-50%, -50%)";
    checkmark.style.fontSize = "100px";
    checkmark.style.color = "white";

    setTimeout(function () {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 1000);
}

const url = document.getElementById("change");

let number = 1;
url.addEventListener("click", () => {
    if (number > 2) number = 1;

    if (number === 1) url.value = "https://réycons.com";
    else if (number === 2) url.value = "https://xn--rycons-bva.com"

    number++;
});