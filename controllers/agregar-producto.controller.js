import { servicios } from "../service/service.productos.js"
import { addEventToInputBuscador } from "../controllers/funciones.controller.js";
import { validar, formularioValido } from "../assets/script/validaciones.js";

const inputs_producto = document.querySelectorAll(".agregar-producto__input");
const boton_submit_producto = document.querySelector("[data-input-submit]");

// inputs de barra de busqueda
const boton_form = document.querySelector("#input-boton");
const input_buscador = document.querySelector("[data-tipo-buscador]");
const lista_desplegable = document.querySelector("[data-lista]");



//   agrega los eventos para deplegar la lista de resultados en el input de busqueda
addEventToInputBuscador(input_buscador, lista_desplegable, boton_form);


const convertirMonedaAString = (st) => {

    st = st.replace(/[\$\.]/g, "");      // elimina los signos $ y .   

    st = st.replace(/[\,]+/g, ".");            // cambia la coma por el punto para convertir el numero en numero flotante  si fuera necesario      

    return st;
}

boton_submit_producto.addEventListener("click", (event) => {
    event.preventDefault();

    inputs_producto.forEach((input) => {
        validar(input);
    });

    if (formularioValido(inputs_producto)) {

        let data = getDatos();
        servicios.subirProducto(data.nombre, data.precio, data.categoria, data.descripcion, data.img).then(() => {

            window.location.href = "./todos-los-productos.html";
        }
        ).catch((err) => console.log(err));
    }
});


const getDatos = () => {
    let obj = {};

    let file = document.querySelector("[data-input-imagen]").files[0];
    let directorio = "./imagenesSubidas/"+file.name;
    let precio = document.querySelector("[data-input-precio]").value;
    
    obj.nombre = document.querySelector("[data-input-nombre]").value;
    obj.precio = convertirMonedaAString(precio);
    obj.categoria = "diversos";
    obj.descripcion = document.querySelector("[data-input-descripcion]").value;
    obj.img = directorio;

    return obj;
}