
const seguirViendo = document.getElementById("seguirViendo");
const seguirViendoB = document.getElementById("seguirViendoB");

const gallery = document.getElementById("gallery");
const galleryB = document.getElementById("galleryB");
const galleryC = document.getElementById("galleryC");



seguirViendo.addEventListener("click", ()=>{
    galleryC.style.display = "grid";
    seguirViendo.style.display = "none";
    seguirViendoB.style.display = "block";
})

seguirViendoB.addEventListener("click", ()=>{
    galleryB.style.display = "grid";
    seguirViendoB.style.display = "none";
})

















