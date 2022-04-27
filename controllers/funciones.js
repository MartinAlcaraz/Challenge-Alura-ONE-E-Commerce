
export const nuevoItem = (id, nombre, precio, img) => {
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