
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    let index = 0

    setInterval(() => {
        index = (index + 1) % carousel.children.length;
        carousel.style.marginLeft = `-${100 * index}%`;
    }, 7000);
});