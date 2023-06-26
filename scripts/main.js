const button = document.querySelector(".Nav-Button");
const icono = document.getElementById("Button");
const menu = document.querySelector(".Menu");

icono.onclick = function() {
    if (menu.style.display === "" || menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}