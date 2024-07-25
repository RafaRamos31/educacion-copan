
export async function updateGeneralConfig(values) {

  const formValues = new FormData();
  formValues.append("nosotros", values.nosotros);
  formValues.append("mensaje", values.mensaje);
  formValues.append("autor", values.autor);
  formValues.append("cargo", values.cargo);
  formValues.append("mision", values.mision);
  formValues.append("vision", values.vision);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/home', {
      method: "PUT",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al actualizar la configuracion.");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}

export async function updateValoresConfig(names, values) {

  const formValues = new FormData();

  formValues.append('names', JSON.stringify(names));
  formValues.append('values', JSON.stringify(values));
  
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/config/valores', {
      method: "PUT",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al actualizar la configuracion.");
    }
    const jsonData = await response.json();
    return jsonData;
    
  } catch (error) {
    return error.message;
  }
}


export async function updateFooterConfig(values) {

  const formValues = new FormData();
  formValues.append("correo", values.correo);
  formValues.append("direccion", values.direccion);
  formValues.append("telefono", values.telefono);
  formValues.append("facebook", values.facebook);
  formValues.append("instagram", values.instagram);
  formValues.append("youtube", values.youtube);
  formValues.append("twitter", values.twitter);
  
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/footer', {
      method: "PUT",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al actualizar la configuracion.");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}


export async function updateContactoConfig(values) {

  const formValues = new FormData();
  formValues.append("contactos", JSON.stringify(values.contactos));
  
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/config/contactos', {
      method: "PUT",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al actualizar la configuracion.");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}



