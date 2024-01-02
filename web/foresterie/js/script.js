const loaded = window.sessionStorage.getItem("loaded");
const loading = document.getElementById("loading");
const button = document.getElementById("button");
const body = document.getElementById("body");

function randomRGB() {
    const r256 = () =>  Math.random() * 256 >> 0;

    return [
        r256(),
        r256(),
        r256()
    ]
}

// change bg color of every button
const inputs = document.getElementsByTagName("a");

for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];

    if (!input.classList.contains("anchor")) input.style.background = `rgb(${randomRGB().join(",")})`;
}

// check if user has already loaded
if (loaded) {
    loading.classList.add("disabled");
    body.classList.remove("disabled");
    button.classList.remove("disabled");
}

// fake load screen
window.onload = () => setTimeout(() => {
    if (loaded) return;
    loading.classList.add("disabled");
    body.classList.remove("disabled");
    button.classList.remove("disabled");
    window.sessionStorage.setItem("loaded", "true");
}, 1550);