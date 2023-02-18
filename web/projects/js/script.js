const loading = document.getElementById("loading");
const body = document.getElementById("body");

window.onload = () => setTimeout(() => {
    loading.classList.add("disabled");
    body.classList.remove("disabled")
}, 1550);