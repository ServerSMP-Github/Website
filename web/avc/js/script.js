async function putSekeleton() {
    for (let i = 0; i < 20; i++) {
        document.getElementById('search-results-skeleton').innerHTML += `<div class="card-img-search card-tall-img-search card-wide-img-search skeleton" style="background-image:url('./img/loading.png')"></div>`;
    }

    await loadJSON();
}

putSekeleton();

async function loadJSON() {
    const response = await (await fetch('./files/files.json')).json();
    await putImages(response);
}

async function putImages(response) {
    for (let index = 0; index < response.images.length; index++) {
        const element = response.images[index];
        document.getElementById("search-results").innerHTML += `<div class="card-img-search card-tall-img-search card-wide-img-search" onclick="showImg('${element}')" style="background-image:url('${element}')"></div>`;
    }
    document.getElementById("search-results-skeleton").innerHTML = "";
}

async function showImg(path) {
    document.getElementById("exitDiv").innerHTML = `<button type="button" class="exit-btn btn btn-primary topLeft" onclick="closeImg()">&times;</button>`;

    const searchGrid = document.getElementById("search-results");

    searchGrid.style.display = "block";
    searchGrid.innerHTML = `<img src="${path}" class="img-fluid center img-screen" alt="${path}">`;
}

async function closeImg() {
    document.getElementById("exitDiv").innerHTML = "";

    const searchGrid = document.getElementById("search-results");

    searchGrid.style.display = "grid";
    searchGrid.innerHTML = "";

    putSekeleton();
}