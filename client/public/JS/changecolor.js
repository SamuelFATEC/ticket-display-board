currentCall = JSON.parse(localStorage.getItem('currentCall'));
const elegibility_reason = currentCall.elegibility_reason;
document.getElementById('selcolor').addEventListener('change', function(){
    var corsel = this.value;

    if(elegibility_reason === Protanopia){
    document.documentElement.style.setProperty('--layout-background-color',corsel);
    document.documentElement.style.setProperty('--layout-primary-color', corsel);
    document.documentElement.style.setProperty('--layout-secondary-color', corsel);
    document.documentElement.style.setProperty('--layout-text-color', corsel);
    }
    else if(elegibility_reason === Deuteranopia){
    document.documentElement.style.setProperty('--layout-background-color',corsel);
    document.documentElement.style.setProperty('--layout-primary-color', corsel);
    document.documentElement.style.setProperty('--layout-secondary-color', corsel);
    document.documentElement.style.setProperty('--layout-text-color', corsel);
    }
    else if(elegibility_reason === Tritanopia){
    document.documentElement.style.setProperty('--layout-background-color',corsel);
    document.documentElement.style.setProperty('--layout-primary-color', corsel);
    document.documentElement.style.setProperty('--layout-secondary-color', corsel);
    document.documentElement.style.setProperty('--layout-text-color', corsel);
    }
    
    document.documentElement.style.setProperty('--layout-background-color',corsel);
    document.documentElement.style.setProperty('--layout-primary-color', corsel);
    document.documentElement.style.setProperty('--layout-secondary-color', corsel);
    document.documentElement.style.setProperty('--layout-text-color', corsel);

});