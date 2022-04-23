import { validar, habilitarBotonSubmit } from "./validaciones.js";
import { addEventToInputsContacto } from "./script.js";

const inputs_contacto = document.querySelectorAll(".input-contacto");
const boton_enviar_contacto = document.querySelector("[data-submit-contacto]");

const inputImagen = document.querySelector("[data-input-imagen]");
const boton_subir_img = document.querySelector("#boton-subir-img");

const inputs_producto = document.querySelectorAll(".agregar-producto__input");
const boton_submit_producto = document.querySelector("[data-input-submit]");

//const input_precio = document.querySelector("[data-input-precio]");

// da formato tipo moneda al input precio ej $2.754,50
const darFormatoMoneda = (input) => {
    let numValue = input.value;
    let num = numValue.replace(/[\$\.\,]/g, "");      // elimina los signos $ . , 

    // num = num.replace(/[\,]+/g, "");      
    num = num.replace(/^0+/g, "");          //  elimina los ceros delanteros

    switch (num.length) {
        case 0:
            num = "000";                //  si no se ingresa ningun número
            break;
        case 1:
            num = "00" + num;             // si se ingresa un solo número
            break;
        case 2:
            num = "0" + num;              // si se ingresan dos números
            break;
    }
    let numero = "$";
    for (let i = 0; i < num.length; i++) {

        if ((num.length - i) == 2) {
            numero += ",";
        }
        if (((num.length >= 6) && (num.length - i == 5)) || ((num.length >= 9) && (num.length - i == 8))) {
            numero += ".";
        }
        numero += num[i];
    }

    input.value = numero;        // cambia el valor del input precio, para que se vea como un monto de dinero.


    // instrucciones para ver el numero real, en numero flotante. Ej 52,43

    // let n = numero.replace(/[\$\.]/g, "");      // elimina los signos $ y .   
    // console.log("numero sin signos : ", n);
    // n = n.replace(/[\,]+/g, ".");            // cambia la coma por el punto para convertir el numero en numero flotante        
    // console.log("numero flotante" , parseFloat(n));
}

// validacion de formulario de agregar producto
inputs_producto.forEach((input) => {

    input.addEventListener("blur", (input) => {
        validar(input.target)
    });

    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado

        if (input.target.dataset.tipo == "precio") {        // comprueba solo el campo data-tipo="precio" en cada ingreso de teclado
            darFormatoMoneda(input.target);
        }
        validar(input.target);

       // habilitarBotonSubmit(inputs_contacto, boton_enviar_contacto);
    });

});



boton_submit_producto.addEventListener("click", (event) => {
    //event.preventDefault();
    inputs_producto.forEach((input) => {
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

addEventToInputsContacto(inputs_contacto, boton_enviar_contacto);

