
function loadValues(){
    // verifica se stylesheetStorage ainda não existe no localStorage
    if(!("stylesheetStorage" in localStorage)){

        //cria um stylesheetStorage e o coloca no localStorage
        var stylesheetValues = {
            "background-color": "#FFFFFF",
            "text-color": "#FFFFFF",
            "primary-color":  "#262626",
            "secundary-color": "#00B0F0",
        };

        localStorage.setItem("stylesheetStorage", JSON.stringify(stylesheetValues))

        console.log('\x1b[36m%s\x1b[0m', "Create stylesheetStorage(Status): Sucess")
    }
    console.log(localStorage)
    updateStyle()
}

function updateValues(){
    var newValues = JSON.parse(localStorage.getItem('stylesheetStorage')) || {}; 
    newValues["background-color"] = document.getElementById("background-color").value.toUpperCase();
    newValues["text-color"] = document.getElementById("text-color").value.toUpperCase();
    newValues["primary-color"] = document.getElementById("primary-color").value.toUpperCase();
    newValues["secundary-color"] = document.getElementById("secundary-color").value.toUpperCase();

    localStorage.setItem('stylesheetStorage', JSON.stringify(newValues));
    console.log(localStorage['stylesheetStorage']);
    updateStyle(); // Call updateStyle() after updating values
}

function updateStyle() {
    var stylesheetStyleValues = JSON.parse(localStorage.getItem("stylesheetStorage"));
    var root = document.querySelector(':root')
    root.style.setProperty('--layout-background-color', stylesheetStyleValues["background-color"])
    root.style.setProperty('--layout-text-color', stylesheetStyleValues["text-color"])
    root.style.setProperty('--layout-color-1', stylesheetStyleValues["primary-color"])
    root.style.setProperty('--layout-color-2', stylesheetStyleValues["secundary-color"])  
    
    document.getElementById("background-color").value = stylesheetStyleValues["background-color"]
    document.getElementById("text-color").value = stylesheetStyleValues["text-color"]
    document.getElementById("primary-color").value = stylesheetStyleValues["primary-color"]
    document.getElementById("secundary-color").value =  stylesheetStyleValues["secundary-color"]

    document.getElementById("span1").textContent = stylesheetStyleValues["background-color"]
    document.getElementById("span2").textContent = stylesheetStyleValues["text-color"]
    document.getElementById("span3").textContent = stylesheetStyleValues["primary-color"]
    document.getElementById("span4").textContent = stylesheetStyleValues["secundary-color"]
    console.log(localStorage)
}


window.onload = function() {
    loadValues();
};

document.addEventListener('keydown', function(event) {
    // apaga o localStorage
    if (event.key === '=') {
      localStorage.clear()

    }
})

document.querySelector("#atualizar").addEventListener("click", function() {
    updateValues()
})