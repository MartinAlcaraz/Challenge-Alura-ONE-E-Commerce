const boton_login = document.querySelector("#boton-login");
const boton_home = document.querySelector(".home");

const bloque_login = document.querySelector("#bloque-login");
const bloque_banner = document.querySelector("#bloque-banner");
const bloque_productos = document.querySelector("#bloque-productos");


// boton_home.addEventListener("click", ()=>{
//     bloque_banner.classList.remove("banner--invisible");
//     bloque_productos.classList.remove("bloque__productos--invisible");
//     bloque_login.classList.add("bloque__login--invisible");    

// });

boton_login.addEventListener("click", () => {
    bloque_login.classList.remove("bloque__login--invisible");
    bloque_banner.classList.add("banner--invisible");
    bloque_productos.classList.add("bloque__productos--invisible");

});