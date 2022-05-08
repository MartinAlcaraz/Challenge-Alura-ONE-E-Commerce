

const listaProductos = () =>
  fetch("https://data-base-e-commerce.herokuapp.com/productos").then((respuesta) => respuesta.json());

const obtenerProducto = (id) =>
  fetch(`https://data-base-e-commerce.herokuapp.com/productos/${id}`).then((respuesta) => respuesta.json());


const subirProducto = (nombre, precio, categoria, descripcion, img) => {
  return fetch("https://data-base-e-commerce.herokuapp.com/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, id: uuid.v4(), categoria, descripcion, img }),
  });
};

const borrarProducto = (id) => {
  return fetch(`https://data-base-e-commerce.herokuapp.com/productos/${id}`, {
    method: "DELETE",
  });
}

const editarProducto = async (id, nombre, precio, descripcion, categoria, img) => {

  return fetch(`https://data-base-e-commerce.herokuapp.com/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, categoria, descripcion, img }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

const subirImagenCloudinary = (file) => {

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/imagenes-cloudinary/upload";
  const CLOUDINARY_UPLOAD_PRESET = "s0iz2jew";

  let formData = new FormData;
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  return axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData,        //console.log("Respuesta axios: ", response);     //console.log("URL de imagen: ", response.data.secure_url);   //console.log("Respuesta axios statusText: ", response.statusText);
    //withCredentials: true   // cookies . probar si funciona.
  });

}


/////////////////////

export const servicios = {
  listaProductos,
  obtenerProducto,
  subirProducto,
  borrarProducto,
  editarProducto,
  subirImagenCloudinary
}
