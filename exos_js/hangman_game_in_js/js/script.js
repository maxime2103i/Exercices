document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === "a") {
        document.querySelector('.poutre-droite').style.visibility = "visible"
        document.querySelector('.poutre').style.visibility = "visible"
        document.querySelector('.corde').style.visibility = "visible"
        document.querySelector('.tete').style.visibility = "visible"
        document.querySelector('.corps').style.visibility = "visible"
        document.querySelector('.bras-droit').style.visibility = "visible"
        document.querySelector('.bras-gauche').style.visibility = "visible"
        document.querySelector('.jambe-droite').style.visibility = "visible"
        document.querySelector('.jambe-gauche').style.visibility = "visible"
    }
})