import { servicios } from "../service/service.productos.js"
import { nuevoItem } from "../controllers/funciones.js";

const grilla_starwars = document.querySelector("[data-tipo-grilla-starwars]");
const grilla_consolas = document.querySelector("[data-tipo-grilla-consolas]");
const grilla_diversos = document.querySelector("[data-tipo-grilla-diversos]");


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
