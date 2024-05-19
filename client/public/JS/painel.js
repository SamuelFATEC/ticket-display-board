document.addEventListener("DOMContentLoaded", () => {
    updateTheme();
});

window.addEventListener('storage', (event) => {
    if (event.key === 'themeStorage') {
        updateTheme();
    }
});

const ticketHighlight = document.querySelector(".ticket-highlight");

addEventListener("keydown", (event) => {
    if(event.key === '+') {
        ticketHighlight.classList.add("ticket-highlight-show");
        const audio = new Audio('../Audio/72128__kizilsungur__sweetalertsound4.wav');
        audio.play();
        setTimeout(() => {
            ticketHighlight.classList.remove("ticket-highlight-show");
        }, 4000);
    } 
});

function updateTheme() {
    const themeValues = JSON.parse(localStorage.getItem("themeStorage"));
    const root = document.documentElement;

    if (themeValues) {
        Object.entries(themeValues).forEach(([key, value]) => {
            root.style.setProperty(`--layout-${key}`, value);
        });
    }
}