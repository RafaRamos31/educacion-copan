
export async function sendMail(values) {

  const formValues = new FormData();
  formValues.append("nombre", values.nombre);
  formValues.append("apellido", values.apellido);
  formValues.append("municipio", values.municipio);
  formValues.append("comunidad", values.comunidad);
  formValues.append("correo", values.correo);
  formValues.append("telefono", values.telefono);
  formValues.append("asunto", values.asunto);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/mail', {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al enviar mensaje.");
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
  formValues.append("footerCorreo", values.footerCorreo);
  formValues.append("footerDireccion", values.footerDireccion);
  formValues.append("footerTelefonos", values.footerTelefonos);
  formValues.append("footerDesc", values.footerDesc);
  formValues.append("footerEnlace", values.footerEnlace);
  formValues.append("footerRedes", JSON.stringify(values.footerRedes));
  
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/config/footer', {
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


