const boton_login = document.querySelector("#boton-login");
const boton_home = document.querySelector(".home");

const bloque_login = document.querySelector("#bloque-login");
const bloque_banner = document.querySelector("#bloque-banner");
const bloque_productos = document.querySelector("#bloque-productos");
const bloque__productos_similares = document.querySelector("#bloque-productos-similares");
const items = document.querySelectorAll(".item");


items.forEach(item => {
    item.addEventListener("click", () => {

        bloque_banner.classList.add("banner--invisible");
        bloque_productos.classList.add("bloque__productos--invisible");
        setTimeout(() => {
            bloque_banner.classList.add("banner--disabled");
            bloque_productos.classList.add("bloque__productos--disabled");
            bloque__productos_similares.classList.add("bloque__productos-similares--enabled");    
        } , 400);
        
        setTimeout(() => {
            bloque__productos_similares.classList.add("bloque__productos-similares--visible");
        } , 500);
    
    });
});


boton_login.addEventListener("click", () => {

    bloque_banner.classList.add("banner--invisible");
    bloque_productos.classList.add("bloque__productos--invisible");
    bloque__productos_similares.classList.add("bloque__productos-similares--invisible");
    setTimeout(() => {
        bloque_banner.classList.add("banner--disabled");
        bloque_productos.classList.add("bloque__productos--disabled");
        bloque__productos_similares.classList.add("bloque__productos-similares--disabled");
        bloque_login.classList.add("bloque__login--enabled");
    } , 400);

    setTimeout(() => {
        bloque_login.classList.add("bloque__login--visible");
    } , 500);

});