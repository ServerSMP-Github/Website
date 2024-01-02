// random rgb color
function randomRGB() {
    const r256 = () =>  Math.random() * 256 >> 0;

    return [
        r256(),
        r256(),
        r256()
    ]
}