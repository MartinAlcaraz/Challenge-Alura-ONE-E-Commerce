const boton_login = document.querySelector("#boton-login");
const boton_home = document.querySelector(".home");

const bloque_login = document.querySelector("#bloque-login");
const bloque_banner = document.querySelector("#bloque-banner");
const bloque_productos = document.querySelector("#bloque-productos");


// temporal
bloque_banner.classList.add("banner--invisible");
bloque_productos.classList.add("bloque__productos--invisible");



boton_login.addEventListener("click", () => {
    bloque_login.classList.add("bloque__login--visible");
    bloque_banner.classList.add("banner--invisible");
    bloque_productos.classList.add("bloque__productos--invisible");

});