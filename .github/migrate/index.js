const fs = require("fs/promises");
const path = require("path");

async function exist(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

const location = path.join(__dirname, "..", "..");
const links = require("./links.json");

const template = await fs.readFile("./index.html", "utf8");

for (const link of links) {
    const input = path.join(location, link.input);

    if (await exist(input)) continue;

    await fs.mkdir(path.dirname(input), { recursive: true });

    await fs.writeFile(input, template.replace("REPLACE_URL", link.output));
}