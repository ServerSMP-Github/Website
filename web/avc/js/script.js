async function putSekeleton() {
    for (let i = 0; i < 20; i++) {
        document.getElementById('search-results-skeleton').innerHTML += `<div class="card-img-search card-tall-img-search card-wide-img-search skeleton" style="background-image:url('/img/loading.png')"></div>`;
    }

    await loadJSON();
}

putSekeleton();

async function loadJSON() {
    const response = await fetch('./files/files.json');
    const data = await response.json();
    await putImages(data);
}

async function putImages(data) {
    data.images.forEach(path => document.getElementById("search-results").innerHTML += `<div class="card-img-search card-tall-img-search card-wide-img-search" onclick="showImg('${path}')" style="background-image:url('${path}')"></div>`);
    document.getElementById("search-results-skeleton").innerHTML = "";
}

async function showImg(path) {
    document.getElementById("exitDiv").innerHTML = `<button type="button" class="exit-btn btn btn-primary topLeft" onclick="closeImg()">&times;</button>`;
    document.getElementById("search-results").innerHTML = `<img src="${path}" class="img-fluid center img-screen" alt="${path}">`;
}

async function closeImg() {
    document.getElementById("exitDiv").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";
    putSekeleton();
}