var menuDeroule = false;

function showMenu() {
    if (menuDeroule) {
        let menu = document.getElementById("menuDeroulant");
        menu.style.animation = "slideLeft 0.5s";
        setTimeout(() => {
            menu.style.display = "none";
        }, 400);
    } 
    else {
        let menu = document.getElementById("menuDeroulant");
        menu.style.display = "flex";
        menu.style.animation = "slideRight 0.5s";
    }
    menuDeroule = !menuDeroule;
}