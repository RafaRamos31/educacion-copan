export async function sendNoticia(url, values) {
  
  const formValues = new FormData();
  formValues.append("unidadTecnicaId", values.unidadTecnica);
  formValues.append("municipioId", values.municipio);
  formValues.append("contenido", values.contenido);

  for(let el of values.multimedia){
    formValues.append(el.nombre, el);
  }

  const token = localStorage.getItem("user-token")

  const headers = {
    "Authorization": 'Bearer '+ token
  };

  try {
    
    const response = await fetch(url, {
      headers: headers,
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
  formValues.append("unidadTecnicaId", values.unidadTecnicaId);
  formValues.append("municipioId", values.municipioId);
  formValues.append("id", values.id);

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

export async function eliminarNoticia(idNoticia, deleteFiles) {
  
  const formValues = new FormData();
  formValues.append("id", idNoticia);
  formValues.append("deleteFiles", deleteFiles);

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
