import { servicios } from "../service/service.productos.js";

const grilla_todos = document.querySelector("[data-tipo-grillaTodosLosProductos]");
const categoria_producto = document.querySelector("#categoria-producto");

const obtenerCategoria = () => {
    let url = new URL(window.location);
    let categoria = url.searchParams.get("categoria");

    if (categoria === null) {
        return "";              
    }
    return categoria;
}

const nuevoItem = (id, nombre, precio, img) => {
    let item = document.createElement("div");
    item.classList.add("item");
    let content = `
        <a href="./productos-similares.html?id=${id}"><img class="item__imagen" src="${img}" alt="imagen producto"></a>
        <p class="item__nombre">${nombre}</p>
        <p class="item__precio">$ ${precio}</p>
        <a class="item__enlace" href="./productos-similares.html?id=${id}">Ver producto</a>`
        ;

    item.innerHTML = content;
    return item;
}


const cargarTodosLosProductos = async (categoria) => {

    try {
        const listaDeProductos = await servicios.listaProductos();

        if (categoria == "") {
            listaDeProductos.forEach((data) => {
                let item = nuevoItem(data.id, data.nombre, data.precio, data.img);
                grilla_todos.appendChild(item);
            });
        } else {
            categoria_producto.innerHTML = categoria;
            listaDeProductos.forEach((data) => {
                let item = nuevoItem(data.id, data.nombre, data.precio, data.img);
                if (categoria == data.categoria) {
                    grilla_todos.appendChild(item);
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}


grilla_todos.innerHTML = "";
cargarTodosLosProductos(obtenerCategoria());
