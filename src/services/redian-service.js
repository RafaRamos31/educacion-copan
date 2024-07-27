
export async function sendRedian(values) {
  
  const formValues = new FormData();
  formValues.append("nombre", values.nombre);
  formValues.append("enlace", values.enlace);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/redian', {
      method: "POST",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}

export async function editRedian(values) {
  
  const formValues = new FormData();
  formValues.append("id", values.id);
  formValues.append("nombre", values.nombre);
  formValues.append("enlace", values.enlace);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/redian', {
      method: "PUT",
      body: formValues,
    });

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    return error.message;
  }
}


export async function eliminarREDIAN(id){
  const data = new FormData();

  data.append('id', id)

  const result = await fetch(process.env.REACT_APP_API_URL + '/redian', {
    method: "DELETE",
    body: data
  });

  return result.ok;
}

