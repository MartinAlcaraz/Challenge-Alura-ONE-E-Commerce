import { validar, habilitarBotonSubmit } from "./validaciones.js";


const inputs_contacto = document.querySelectorAll(".input-contacto");
const boton_enviar_contacto = document.querySelector("[data-submit-contacto]");

const inputImagen = document.querySelector("[data-input-imagen]");
const boton_subir_img = document.querySelector("#boton-subir-img");

const inputs_producto = document.querySelectorAll(".agregar-producto__input");
const boton_submit_producto = document.querySelector("[data-input-submit]");



// validacion de formulario de agregar producto
inputs_producto.forEach((input) => {
    
    input.addEventListener("blur", (input) => {
        validar(input.target)
    });

    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado

        // if ( tipoDeInput == "nombre"){        // comprueba solo el campo data-tipo="nombre" en cada ingreso de teclado
        //       validar(input.target);
        // }   
        validar(input.target);
        //habilitarBotonSubmit(inputs_contacto, boton_enviar_contacto);
    });
});

boton_submit_producto.addEventListener("click", (event) => {
    //event.preventDefault();
    inputs_producto.forEach( (input) => {
        validar(input);
    });

});


/////////////////// mostrar imagen en box-image
inputImagen.addEventListener("change", (event) => cargarImagen(event));

function cargarImagen(evento) {
    let file = evento.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
        let img = document.querySelector("#imagen-cargada");
        img.classList.add("box-image__imagen-cargada--visible");
        img.src = event.target.result;

        let fondo = document.querySelector("#fondo");
        fondo.classList.add("box-image__imagen-fondo--invisible");

        let mensajeDeError = img.parentElement.querySelector(".message-error").innerHTML = ""; 
    }
    reader.readAsDataURL(file);
};


boton_subir_img.addEventListener("click", (event) => {
    event.preventDefault();
    inputImagen.click();
});


// validacion de formulario de contacto
inputs_contacto.forEach((input) => {

    input.addEventListener("blur", (input) => {
        validar(input.target)
    });

    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado

        // if ( tipoDeInput == "nombre"){        // comprueba solo el campo data-tipo="nombre" en cada ingreso de teclado
        //       validar(input.target);
        // }   
        validar(input.target);
        habilitarBotonSubmit(inputs_contacto, boton_enviar_contacto);
    });
});

