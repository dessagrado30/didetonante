
//firefox mindfield

document.addEventListener("DOMContentLoaded", function() {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        document.body.classList.add("firefox");
    }
    console.log(navigator.userAgent); // Para inspeccionar el userAgent
});