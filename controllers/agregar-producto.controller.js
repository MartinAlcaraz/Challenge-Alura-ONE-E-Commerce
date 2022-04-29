import { servicios } from "../service/service.productos.js"
import { nuevoItem ,addEventToInputBuscador } from "../controllers/funciones.controller.js";

const buscar = document.querySelector("#busqueda");

const boton_form = document.querySelector("#input-boton");
const input_buscador = document.querySelector("[data-tipo-buscador]");
const lista_desplegable = document.querySelector("[data-lista]");


//   agrega los eventos para deplegar la lista de resultados en el input de busqueda
addEventToInputBuscador(input_buscador, lista_desplegable, boton_form);