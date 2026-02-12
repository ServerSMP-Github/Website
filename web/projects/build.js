const cards = require("./cards.json");

const html = [];
for (const { name, description, link, image } of cards) {
    html.push(/* html */`
        <div class="card card-background card-rounded">
            <h1 class="card-title">${name}</h1>
            <p class="card-description">${description}</p>
            <br>
            <a class="button card-button button-primary" href="${link}">View</a>
            <br>
            <br>
            <img class="card-rounded card-shadow" src="${image}" width="90%" height="90%">
        </div>
    `)
}

const file = Bun.file(`${__dirname}/index.template.html`);

Bun.write(
    `${__dirname}/index.html`,
    await file
        .text()
        .replace(
            "REPLACE_WITH_CARDS",
            html.join("\n")
        )
);