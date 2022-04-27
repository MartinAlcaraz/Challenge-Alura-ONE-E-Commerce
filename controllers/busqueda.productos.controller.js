import { servicios } from "../service/service.productos.js"
import { nuevoItem } from "../controllers/funciones.js";

const buscar = document.querySelector("#busqueda");
const grilla_resultados = document.querySelector("[data-tipo-grillaResultadoBusqueda]");

const producto_a_buscar = () => {
    let url = new URL(window.location);
    let search = url.searchParams.get("search");

    if (search === null) {
        location.href = "./index.html";              
    }

    return search;
}


const buscarProductos = async (prod_buscado) => {

    prod_buscado = prod_buscado.trim();
    prod_buscado = prod_buscado.toLowerCase();

    try {
        let listaDeProductos = await servicios.listaProductos();
        
        listaDeProductos.forEach((data) => {

            let nombreProducto = data.nombre.toLowerCase();           

            if ( nombreProducto.search(prod_buscado) != -1 ){

                let item = nuevoItem(data.id, data.nombre, data.precio, data.img);        
                grilla_resultados.appendChild(item);
            }        

        });
        if (grilla_resultados.innerHTML == ""){
            let element = document.createElement("p");
            element.innerHTML = "No hay resultados.";
            grilla_resultados.appendChild(element);
        }
    } catch (error) {
        console.log("Ocurrio un error al cargar los productos");
    }
}

grilla_resultados.innerHTML = "";
let producto_buscado = producto_a_buscar();
buscar.innerHTML = producto_buscado;

buscarProductos( producto_buscado );
