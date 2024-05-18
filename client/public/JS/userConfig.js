document.addEventListener("DOMContentLoaded", () => {
    loadValues();
});

const entriesForm = document.querySelector(".userEntriesForm");

entriesForm.addEventListener('submit', async event => {
    event.preventDefault();
    updateValues();
    
    const formData = new FormData(entriesForm);
    const userEntries = Object.fromEntries(formData);

    // Process the formData if needed
    console.log(userEntries);

    // Handle file inputs if needed
    const medias = document.querySelector("#videos");
    if (medias.files.length > 0) {
        formData.delete('videos');
        for (let i = 0; i < medias.files.length; i++) {
            formData.append(`media[${i}]`, medias.files[i]);
        }
    }
});

function loadValues() {
    if (!("stylesheetStorage" in localStorage)) {
        const stylesheetValues = {
            "background-color": "#FFFFFF",
            "text-color": "#FFFFFF",
            "primary-color":  "#262626",
            "secundary-color": "#00B0F0",
        };
        localStorage.setItem("stylesheetStorage", JSON.stringify(stylesheetValues));
        console.log('%cCreate stylesheetStorage(Status): Success', 'color: cyan');
    }
    updateStyle();
}

function updateValues() {
    const newValues = JSON.parse(localStorage.getItem('stylesheetStorage')) || {};
    newValues["background-color"] = document.getElementById("background-color").value.toUpperCase();
    newValues["text-color"] = document.getElementById("text-color").value.toUpperCase();
    newValues["primary-color"] = document.getElementById("primary-color").value.toUpperCase();
    newValues["secundary-color"] = document.getElementById("secundary-color").value.toUpperCase();
    localStorage.setItem('stylesheetStorage', JSON.stringify(newValues));
    console.log(localStorage['stylesheetStorage']);
    updateStyle();
}

function updateStyle() {
    const stylesheetStyleValues = JSON.parse(localStorage.getItem("stylesheetStorage"));
    const root = document.querySelector(':root');
    root.style.setProperty('--layout-background-color', stylesheetStyleValues["background-color"]);
    root.style.setProperty('--layout-text-color', stylesheetStyleValues["text-color"]);
    root.style.setProperty('--layout-color-1', stylesheetStyleValues["primary-color"]);
    root.style.setProperty('--layout-color-2', stylesheetStyleValues["secundary-color"]);

    document.getElementById("background-color").value = stylesheetStyleValues["background-color"];
    document.getElementById("text-color").value = stylesheetStyleValues["text-color"];
    document.getElementById("primary-color").value = stylesheetStyleValues["primary-color"];
    document.getElementById("secundary-color").value = stylesheetStyleValues["secundary-color"];

    document.getElementById("span1").textContent = stylesheetStyleValues["background-color"];
    document.getElementById("span2").textContent = stylesheetStyleValues["text-color"];
    document.getElementById("span3").textContent = stylesheetStyleValues["primary-color"];
    document.getElementById("span4").textContent = stylesheetStyleValues["secundary-color"];
    console.log(localStorage);
}

addEventListener("keydown", (event) => {
    if(event.key === '*'){
        localStorage.clear()
    }
})


