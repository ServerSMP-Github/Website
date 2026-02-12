const element = document.getElementById("typewriter-text");

const text = element.textContent;
let index = 0;
let direction = 1;

function typewriter() {
    if (direction === 1) element.textContent = text.slice(0, ++index);
    else element.textContent = text.slice(0, --index);

    if (index === text.length) direction = -1;
    else if (index === 0) direction = 1;

    setTimeout(typewriter, 500);
}

typewriter();