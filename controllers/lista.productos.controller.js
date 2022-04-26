import { servicios } from "../service/service.productos.js"

const grilla_starwars = document.querySelector("[data-tipo-grilla-starwars]");
const grilla_consolas = document.querySelector("[data-tipo-grilla-consolas]");
const grilla_diversos = document.querySelector("[data-tipo-grilla-diversos]");


const nuevoItem = (id, nombre, precio, img) => {
    let item = document.createElement("div");
    item.classList.add("item");
    let content = `
        <a href="./productos-similares.html?id=${id}"><img class="item__imagen" src="${img}" alt="imagen producto"></a>
        <p class="item__nombre">Producto ${nombre}</p>
        <p class="item__precio">$ ${precio}</p>
        <a class="item__enlace" href="./productos-similares.html?id=${id}">Ver producto</a>`
        ;

    item.innerHTML = content;
    return item;
}

const cargarProductos = async () => {

    try {
        let listaDeProductos = await servicios.listaProductos();
        listaDeProductos.forEach((data) => {
            let item = nuevoItem(data.id, data.nombre, data.precio, data.img);
            console.log("id: ",data.id);
            
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
                    alert("La categoria cardaga no existe");
                    break;
            }
        });
    } catch (error) {
        alert("Ocurrio un error al cargar los productos");
    }
}

grilla_starwars.innerHTML = "";
grilla_consolas.innerHTML = "";
grilla_diversos.innerHTML = "";
cargarProductos();
