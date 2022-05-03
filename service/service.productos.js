
const listaProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const obtenerProducto = (id) =>
  fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());


const subirProducto = (nombre, precio, categoria, descripcion, img) => {
  return fetch("http://localhost:3000/productos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, id: uuid.v4(), categoria, descripcion, img }),
  });
};

const borrarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
}


export const servicios = {
  listaProductos,
  obtenerProducto,
  subirProducto,
  borrarProducto
}
