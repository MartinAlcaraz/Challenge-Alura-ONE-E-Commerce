import { validar, habilitarBotonSubmit, formularioValido } from "./validaciones.js";
import { addEventToInputsContacto } from "./script.js";
import { servicios } from "../../service/service.productos.js";

const inputs_contacto = document.querySelectorAll(".input-contacto");
const boton_enviar_contacto = document.querySelector("[data-submit-contacto]");

const inputImagen = document.querySelector("[data-input-imagen]");
const boton_subir_img = document.querySelector("#boton-subir-img");

const inputs_producto = document.querySelectorAll(".agregar-producto__input");

    	        	  
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
        if (input.target.dataset.tipo !== "imagen") {
            validar(input.target);
        }
    });


    input.addEventListener("keyup", (input) => {    // comprueba despues de ingresar un caracter del teclado

        if (input.target.dataset.tipo == "precio") {        // comprueba solo el campo data-tipo="precio" en cada ingreso de teclado
            darFormatoMoneda(input.target);
        }
        validar(input.target);

    });

});



/////////////////// mostrar imagen en box-image
inputImagen.addEventListener("input", (event) => {

    // si se elige un archivo se carga y valida el archivo de imagen
    if (event.target.files.length > 0) {
        cargarImagen(event);
        validar(inputImagen);
    }
});


function cargarImagen(evento) {
    
    let file = evento.target.files[0];
    let reader = new FileReader();
    let img = document.querySelector("#imagen-cargada");
    reader.onload = function (event) {

        img.classList.add("box-image__imagen-cargada--visible");
        let imagen = event.target.result;
        img.src = imagen;

        let fondo = document.querySelector("#fondo");
        fondo.classList.add("box-image__imagen-fondo--invisible");
    }

    // si existe un archivo y es una imagen
    if (file && file.type.match('image')) {
        reader.readAsDataURL(file);
    } else {
        
        //  si se carga un archivo y no es una imagen se borra al anteriormente cargada( si se habia cargado una antes) para mostrar el mensaje de error
        if (file !== undefined) {
            img.classList.remove("box-image__imagen-cargada--visible");
            img.src = "";
        }
    }
};


boton_subir_img.addEventListener("click", (event) => {
    event.preventDefault();
    inputImagen.click();
});


// validacion de formulario de contacto

addEventToInputsContacto(inputs_contacto, boton_enviar_contacto);

