const modalImage = document.querySelector("dialog img");
const modal = document.querySelector("dialog");

modal.addEventListener("click", (e) => e.target === modal && modal.close());

const images = document.querySelectorAll(".content img");

for (const image of images) {
    image.addEventListener("click", () => {
        modalImage.src = image.src;
        modal.showModal();
    });
}