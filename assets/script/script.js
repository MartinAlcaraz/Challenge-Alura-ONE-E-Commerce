const boton_login = document.querySelector("#boton-login");
const boton_home = document.querySelector(".home");
const boton_ver_consolas = document.querySelector("boton-ver-consolas");
const boton_entrar = document.querySelector("#boton-entrar");
const boton_subir_img = document.querySelector("#boton-subir-img");

const bloque_login = document.querySelector("#bloque-login");
const bloque_banner = document.querySelector("#bloque-banner");
const bloque_productos = document.querySelector("#bloque-productos");
const bloque_productos_similares = document.querySelector("#bloque-productos-similares");
const bloque_todos_los_productos = document.querySelector("#bloque-todos-los-productos");
const items = document.querySelectorAll(".item");

const inputImagen = document.querySelector("[data-input-imagen]");

const dropZone = document.querySelector("#drop-zone");


bloque_banner.classList.add("banner--disabled");
bloque_productos.classList.add("bloque__productos--disabled");


boton_entrar.addEventListener("click", (event) => {
    event.preventDefault();
    bloque_banner.classList.add("banner--invisible");
    bloque_productos.classList.add("bloque__productos--invisible");
    bloque_login.classList.remove("bloque__login--visible");
    setTimeout(() => {
        bloque_banner.classList.add("banner--disabled");
        bloque_productos.classList.add("bloque__productos--disabled");
        bloque_login.classList.remove("bloque__login--enabled");

        bloque_todos_los_productos.classList.add("bloque__todos-los-productos--enabled");
    }, 400);

    setTimeout(() => {
        bloque_todos_los_productos.classList.add("bloque__todos-los-productos--visible");
    }, 500);

});


items.forEach(item => {
    item.addEventListener("click", () => {

        bloque_banner.classList.add("banner--invisible");
        bloque_productos.classList.add("bloque__productos--invisible");
        setTimeout(() => {
            bloque_banner.classList.add("banner--disabled");
            bloque_productos.classList.add("bloque__productos--disabled");
            bloque_productos_similares.classList.add("bloque__productos-similares--enabled");
        }, 400);

        setTimeout(() => {
            bloque_productos_similares.classList.add("bloque__productos-similares--visible");
        }, 500);

    });
});


boton_login.addEventListener("click", () => {

    bloque_banner.classList.add("banner--invisible");
    bloque_productos.classList.add("bloque__productos--invisible");
    bloque_productos_similares.classList.add("bloque__productos-similares--invisible");
    setTimeout(() => {
        bloque_banner.classList.add("banner--disabled");
        bloque_productos.classList.add("bloque__productos--disabled");
        bloque_productos_similares.classList.add("bloque__productos-similares--disabled");
        bloque_login.classList.add("bloque__login--enabled");
    }, 400);

    setTimeout(() => {
        bloque_login.classList.add("bloque__login--visible");
    }, 500);

});


/////////////////// mostrar imagen en pantalla

inputImagen.addEventListener("change", (event) => cargarImagen(event));

function cargarImagen (evento) {
    let file = evento.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
        let img = document.querySelector("#imagen-cargada");
        img.classList.add("box-image__imagen-cargada--visible");
        img.src = event.target.result;

        let fondo = document.querySelector("#fondo");
        fondo.classList.add("box-image__imagen-fondo--invisible");
        
    }
    reader.readAsDataURL(file);
};


boton_subir_img.addEventListener("click", (event) => {
    event.preventDefault();
    inputImagen.click();    
});

/////////////////////// drag and drop

function drag_handler(ev) {
    console.log("Drag");
}

function dragstart_handler(ev) {
    console.log("dragStart");
    ev.dataTransfer.setData("text", ev.target.id);
}


// dropZone.addEventListener("drop", (event) => {
//     console.log("Drop");
//     event.currentTarget.style.background = "lightyellow";
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     event.target.appendChild(document.getElementById(data));
// });

// dropZone.addEventListener("dragover", (event) => {
//     console.log("dragOver");
//     event.preventDefault();
// });
