let apiKey = localStorage.getItem("api");

function checkAPI() {
    if (!apiKey) return;

    document.getElementById("divAPI").classList.add("hidden");
    document.getElementById("document").classList.remove("hidden");

    getList();
}

checkAPI();

function setAPI() {
    const key = document.getElementById("apiKey").value;

    localStorage.setItem("api", key);

    apiKey = key;

    checkAPI();
    getList();
}

function searchBox() {
    document.getElementById("page").innerHTML = `<div class="searchBox"><div class="background searchStyle"><h1 class="centerText">Search</h1><div class="centerText"><input type="text" class="textBox" id="searchBox"><button class="button" onclick="search()">Search</button></div></div></div><div class="grid background-secondary" id="grid"></div>`;
}

async function addSearch(name, artist, image) {
    console.log(name, artist, image)
    let list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

    list.push({ name, artist, image });

    localStorage.setItem("list", JSON.stringify(list));

    getList();
}

async function search() {
    if (!apiKey) return;

    const query = document.getElementById("searchBox").value;

    const result = await (await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${apiKey}&format=json`)).json();

    const albums = result.results.albummatches.album;

    for (let index = 0; index < albums.length; index++) {
        const album = albums[index];

        console.log(album)

        document.getElementById("grid").innerHTML += `<div class="card"><img src="${album.image[3]["#text"]}" alt="" class="album" width="256" height="256"><p class="title">${album.name}</p><p class="author">${album.artist}</p><button class="button" onclick="addSearch('${album.name}', '${album.artist}', '${album.image[3]["#text"]}')">Add</button></div>`
    }
}

async function getList() {
    document.getElementById("page").innerHTML = `<div class="grid" id="grid"></div>`;

    if (!localStorage.getItem("list")) return;

    const list = JSON.parse(localStorage.getItem("list"));

    for (let index = 0; index < list.length; index++) {
        const element = list[index];

        document.getElementById("grid").innerHTML += `<div class="card"><img src="${element.image}" alt="" class="album" width="256" height="256"><p class="title">${element.name}</p><p class="author">${element.artist}</p><button class="button" onclick="deleteAlbum(${index})">Delete</button></div>`
    }
}

async function deleteAlbum(index) {
    let list = JSON.parse(localStorage.getItem("list"));

    list.splice(index, list.length);

    localStorage.setItem("list", JSON.stringify(list));

    getList();
}