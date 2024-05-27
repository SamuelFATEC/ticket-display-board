document.getElementById('selcolor').addEventListener('change', function(){
    var corsel = this.value;

    document.documentElement.style.setProperty('--layout-background-color',corsel);
    document.documentElement.style.setProperty('--layout-primary-color', corsel);
    document.documentElement.style.setProperty('--layout-secondary-color', corsel);
    document.documentElement.style.setProperty('--layout-text-color', corsel);

});