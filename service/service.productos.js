
const listaProductos = () =>
    fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const obtenerProducto = (id) =>
fetch(`http://localhost:3000/productos/${id}`).then( (respuesta) => respuesta.json() );


export const servicios = {
    listaProductos,
    obtenerProducto
}
