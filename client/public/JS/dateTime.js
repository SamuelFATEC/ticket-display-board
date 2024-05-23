document.addEventListener("DOMContentLoaded", () => {
    updateInfo();
});

window.addEventListener('storage', (event) => {
    if (event.key === 'themeStorage') {
        updateTheme();
    }
});

function updateInfo() {
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();
    
        document.getElementById('info-time').innerText = time;
        document.getElementById('info-date').innerText = date;
    }, 1000);
}

console.log(localStorage.getItem("themeStorage"))

