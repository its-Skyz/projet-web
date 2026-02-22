function popup(src) {
    var img = document.getElementById("image");
    var bg = document.getElementById("popupBG");

    bg.style.display = "block";
    img.style.display = "block";
    img.src = src;
    document.addEventListener("click", noClick, true);
    document.querySelector("html").style.overflow = "hidden";
    document.addEventListener("keydown", removePopup, true)
}

function noClick(e) {
    e.stopPropagation();
    e.preventDefault();
}


function removePopup(e) {
    if (e.key === 'Escape') {
        var img = document.getElementById("image");
        var bg = document.getElementById("popupBG");
        
        bg.style.display = "none";
        img.style.display = "none";
        document.removeEventListener("click", noClick, true);
        document.querySelector("html").style.overflow = "visible";
        document.removeEventListener("keydown", removePopup, true);
    }
}