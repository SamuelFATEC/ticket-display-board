// Inicialização quando o DOM está pronto
document.addEventListener("DOMContentLoaded", initializeValues);

// Função para inicializar os valores do tema
function initializeValues() {
    if (!localStorage.getItem("themeStorage")) {
        // Define o tema padrão se não existir no localStorage
        const defaultTheme = {
            "background-color": "#FFFFFF",
            "text-color": "#FFFFFF",
            "primary-color": "#00B0F0",
            "secondary-color": "#262626",
        };

        localStorage.setItem("themeStorage", JSON.stringify(defaultTheme));
        console.log('\x1b[36m%s\x1b[0m', "Create themeStorage(Status): Success");
    }
    updateTheme();
}

// Função para salvar os valores atualizados do tema no localStorage
function saveUpdatedValues() {
    const updatedTheme = {
        "background-color": document.getElementById("background-color").value.toUpperCase(),
        "text-color": document.getElementById("text-color").value.toUpperCase(),
        "primary-color": document.getElementById("primary-color").value.toUpperCase(),
        "secondary-color": document.getElementById("secondary-color").value.toUpperCase()
    };

    localStorage.setItem('themeStorage', JSON.stringify(updatedTheme));
    console.log(localStorage.getItem('themeStorage'));
    updateTheme();
}

// Função para atualizar o tema com base nos valores do localStorage
function updateTheme() {
    const themeValues = JSON.parse(localStorage.getItem("themeStorage"));
    const root = document.documentElement;

    Object.entries(themeValues).forEach(([key, value]) => {
        root.style.setProperty(`--layout-${key}`, value);
        document.getElementById(key).value = value;
        document.getElementById(`span${Object.keys(themeValues).indexOf(key) + 1}`).textContent = value;
    });

    notifyStorageChange();
}

// Função para notificar mudanças no localStorage
function notifyStorageChange() {
    const event = new Event('storageChange');
    window.dispatchEvent(event);
}

// Limpa o localStorage e recarrega a página quando a tecla '=' é pressionada
document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
        localStorage.clear();
        location.reload();
    }
});

// Adiciona um ouvinte de eventos para o botão de atualizar
document.getElementById("update").addEventListener("click", saveUpdatedValues);