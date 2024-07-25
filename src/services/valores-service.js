
export async function sendValor(values) {
  
  const formValues = new FormData();
  formValues.append("nombre", values.nombre);
  formValues.append("descripcion", values.descripcion);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/valores', {
      method: "POST",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}

export async function editValor(values) {
  
  const formValues = new FormData();
  formValues.append("id", values.id);
  formValues.append("nombre", values.nombre);
  formValues.append("descripcion", values.descripcion);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/valores', {
      method: "PUT",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}


export async function eliminarValor(id){
  const data = new FormData();

  data.append('id', id)

  const result = await fetch(process.env.REACT_APP_API_URL + '/valores', {
    method: "DELETE",
    body: data
  });

  return result.ok;
}

