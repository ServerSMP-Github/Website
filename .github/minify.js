const { transform } = require("lightningcss");
const swc = require("@swc/core");
const { Glob } = require("bun");

export async function getFiles(pattern) {
    const glob = new Glob(pattern);
    const files = [];

    for await (const file of glob.scan(".")) {
        files.push(file);
    }

    return files;
}

const scripts = await getFiles(`${__dirname}/../**/*.js`);

for (const script of scripts) {
    const file = Bun.file(script);

    const minified = await swc.minify(
        await file.text(),
        {
            compress: true,
            mangle: true,
            toplevel: false,
            sourceMap: false,
        }
    );

    await Bun.write(script, minified.code);

    console.log("Minified", script);
}

const styles = await getFiles(`${__dirname}/../**/*.css`);

for (const style of styles) {
    const file = Bun.file(style);

    const minified = transform({
        filename: style,
        code: Buffer.from(await file.text()),
        minify: true,
    });

    await Bun.write(style, minified.code);

    console.log("Minified", style);
}