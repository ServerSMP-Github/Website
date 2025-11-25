import { readdir, readFile, writeFile, exists } from "fs/promises";
import { join } from "path";

async function getImages() {
    const files = await readdir(join(__dirname, "files", "img"));

    return files
        .filter(file => [".webp", ".jpg", ".jpeg", ".png", ".gif"].some(ext => file.toLowerCase().endsWith(ext)))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map(file => `./files/img/${file}`);
}

function renderImages(images) {
    return images
        .map((path, index) => /* html */ `<img src="${path}" alt="Image ${index + 1}">`)
        .join("\n");
}

const template = await readFile(join(__dirname, "index.template.html"), "utf8");

await writeFile(
    join(__dirname, "index.html"),
    template.replace(
        "{{CARDS}}",
        renderImages(await getImages())
    ),
    "utf8"
);