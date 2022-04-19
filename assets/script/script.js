import { validar, habilitarBotonSubmit } from "./validaciones.js";


const boton_login = document.querySelector("#boton-login");
const boton_subir_img = document.querySelector("#boton-subir-img");
// const boton_agregar_producto = document.querySelector("#boton-agregar-producto");


const inputs_contacto = document.querySelectorAll(".input-contacto");
const boton_enviar_contacto = document.querySelector("[data-submit-contacto]");



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
