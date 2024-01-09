import { enviarArchivos } from "./archivos-service.js";

export async function sendNoticia(url, values) {
  
  const archivos = await enviarArchivos(values.multimedia)

  const formValues = new FormData();
  formValues.append("departamento", values.departamento);
  formValues.append("municipio", values.municipio);
  formValues.append("contenido", values.contenido);
  formValues.append("archivos", JSON.stringify(archivos));

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formValues,
    });

    return response.ok

  } catch (error) {
    return error.message;
  }
}

export async function editNoticia(url, values) {

  const formValues = new FormData();
  formValues.append("contenido", values.contenido);
  formValues.append("departamento", values.departamento);
  formValues.append("idNoticia", values.idPublicacion);

  try {
    const response = await fetch(url, {
      method: "PUT",
      body: formValues,
    });
    return response.ok

  } catch (error) {
    return error.message;
  }
}

export async function eliminarNoticia(idNoticia) {
  
  const formValues = new FormData();
  formValues.append("idNoticia", idNoticia);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/noticias', {
      method: "DELETE",
      body: formValues,
    });

    return response.ok
    
  } catch (error) {
    return error.message;
  }
}
