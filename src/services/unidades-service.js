
export async function sendUnidad(values) {
  
  const formValues = new FormData();
  formValues.append("nombre", values.nombre);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/unidadestecnicas', {
      method: "POST",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}

export async function editUnidad(values) {
  
  const formValues = new FormData();
  formValues.append("id", values.id);
  formValues.append("nombre", values.nombre);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/unidadestecnicas', {
      method: "PUT",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}


export async function eliminarUnidad(id){
  const data = new FormData();

  data.append('id', id)

  const result = await fetch(process.env.REACT_APP_API_URL + '/unidadestecnicas', {
    method: "DELETE",
    body: data
  });

  return result.ok;
}

