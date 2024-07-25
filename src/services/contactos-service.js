
export async function sendContacto(values) {
  
  const formValues = new FormData();
  formValues.append("municipioId", values.municipioId);
  formValues.append("establecimiento", values.establecimiento);
  formValues.append("telefono", values.telefono);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/contactos', {
      method: "POST",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}

export async function editContacto(values) {
  
  const formValues = new FormData();
  formValues.append("id", values.id);
  formValues.append("municipioId", values.municipioId);
  formValues.append("establecimiento", values.establecimiento);
  formValues.append("telefono", values.telefono);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/contactos', {
      method: "PUT",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}


export async function eliminarContacto(id){
  const data = new FormData();

  data.append('id', id)

  const result = await fetch(process.env.REACT_APP_API_URL + '/contactos', {
    method: "DELETE",
    body: data
  });

  return result.ok;
}

