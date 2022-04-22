import { validar } from "./validaciones.js";


const inputs_login = document.querySelectorAll(".input-login");
const boton_entrar_login = document.querySelector("[data-submit-login]");

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
        //habilitarBotonSubmit(inputs_contacto, boton_enviar_contacto);
    });
});



// validacion de formulario login
inputs_login.forEach((input) => {

    input.addEventListener("blur", (input) => {
        validar(input.target)
    });

    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado

        // if ( tipoDeInput == "nombre"){        // comprueba solo el campo data-tipo="nombre" en cada ingreso de teclado
        //       validar(input.target);
        // }   
        validar(input.target);
    });
});

boton_entrar_login.addEventListener("click", (event) => {
    event.preventDefault();

    inputs_login.forEach((input) => {
        validar(input);
    });

    let passwordCorrecto = true;
    // Abrir pagina si el password es correcto

    if ( passwordCorrecto){             // ó la linea de abajo
        location.href="../todos-los-productos.html";  
        //window.open("../todos-los-productos.html", "_self");
        //window.open("https://github.com/MartinAlcaraz/Challenge-Alura-ONE-E-Commerce/settings/pages", "_self");
    }
    

});
