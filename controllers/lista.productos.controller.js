import { servicios } from "../service/service.productos.js"
import { nuevoItem } from "../controllers/funciones.js";

const grilla_starwars = document.querySelector("[data-tipo-grilla-starwars]");
const grilla_consolas = document.querySelector("[data-tipo-grilla-consolas]");
const grilla_diversos = document.querySelector("[data-tipo-grilla-diversos]");

const buscador = document.querySelector("[data-tipo-buscador]");
const lista_desplegable = document.querySelector("[data-lista]");

const productosLista = [];

buscador.addEventListener("focus", async () => {
    try {
        let listaDeProductos = await servicios.listaProductos();
        listaDeProductos.forEach((data) => {
            let nombre = data.nombre;
            productosLista.push(nombre.toLowerCase());
        });
    } catch (error) {
        console.log("Error al solicitar la lista de los productos en el buscador.");
    }
});

buscador.addEventListener("keyup", (event) => {
    let input = event.target.value;
    lista_desplegable.innerHTML = "";

    if (input == "") {
        while(lista_desplegable.childElementCount > 0){
            lista_desplegable.removeChild();
        }        
    } else {
        productosLista.forEach((nombre) => {

            if (nombre.startsWith(input)) {
                let li = document.createElement("li");
                li.classList.add("caja-busqueda__list-item");
                li.innerHTML = nombre;
                lista_desplegable.appendChild(li);
            }
        });
    }



});



const cargarProductos = async () => {

    try {
        let listaDeProductos = await servicios.listaProductos();
        listaDeProductos.forEach((data) => {
            let item = nuevoItem(data.id, data.nombre, data.precio, data.img);

            grilla_starwars.appendChild(item);

            switch (data.categoria) {
                case "starwars":
                    grilla_starwars.appendChild(item);
                    break;
                case "consolas":
                    grilla_consolas.appendChild(item);
                    break;
                case "diversos":
                    grilla_diversos.appendChild(item);
                    break;

                default:
                    console.log("La categoria cardaga no existe");
                    break;
            }
        });
    } catch (error) {
        console.log("Ocurrio un error al cargar los productos");
    }
}

grilla_starwars.innerHTML = "";
grilla_consolas.innerHTML = "";
grilla_diversos.innerHTML = "";
cargarProductos();
