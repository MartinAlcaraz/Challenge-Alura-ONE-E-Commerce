import { servicios } from "../service/service.productos.js";


const grilla_similares = document.querySelector("[data-tipo-grilla-similares]");

const producto_descripcion = document.querySelector("[data-tipo-producto-descripcion]");

const nuevoItemConDescripcion = (id, nombre, precio, descripcion, img) => {
    let item = document.createElement("div");
    let contenido = `
    <div class="item-seleccionado">
        <img class="item-seleccionado__imagen" src=${img}>
        <div class="item-seleccionado__info">
            <p class="item-seleccionado__nombre">${nombre}</p>
            <p class="item-seleccionado__precio">$ ${precio}</p>
            <p class="item-seleccionado__descripcion">${descripcion}</p>
        </div>    
    </div>`
    ;
    item.innerHTML = contenido;
    return item;
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

const obtenerId = () => {
    //  funcion que obtiene el id del objeto desde la url de la pagina
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "./index.html";
    }
    return id;
}

const cargarProductosSimilares = async (id) => {

    try {
        let prod = await servicios.obtenerProducto(id);
        let itemConDescripcion = nuevoItemConDescripcion(prod.id, prod.nombre, prod.precio, prod.descripcion, prod.img);
        
        producto_descripcion.appendChild(itemConDescripcion);
        
        
        let listaDeProductos = await servicios.listaProductos();
        listaDeProductos.forEach((data) => {
            
            if (data.categoria == prod.categoria && data.id != prod.id){
                let item = nuevoItem(data.id, data.nombre, data.precio, data.img);
                grilla_similares.appendChild(item);   
            }              
        });

    } catch (error) {
        alert("Ocurrio un error al cargar los productos");
    }
}

producto_descripcion.innerHTML = "";
grilla_similares.innerHTML = "";
cargarProductosSimilares( obtenerId() );
