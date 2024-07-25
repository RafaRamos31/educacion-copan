
export async function publicarArchivos(files){
  
    // Realiza la solicitud al backend
    try {
      const formData = new FormData();
      for(let el of files){
        formData.append(el.nombre, el);
      }
      await fetch(process.env.REACT_APP_API_URL + '/archivos', {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      throw new Error("Error al publicar el archivo: " + error);
    }
  return true
}

export async function publicarImagenHome(nombre, file){
  // Realiza la solicitud al backend
  try {
    const formData = new FormData();
    formData.append('imagen', file);
    formData.append('nombre', nombre);
    
    const result = await fetch(process.env.REACT_APP_API_URL + '/images', {
      method: "PUT",
      body: formData,
    });
    return result.ok;

  } catch (error) {
    throw new Error("Error al subir imagen: " + error);
  }
}


export async function publicarArchivosNoticia(files, id){
  
  // Realiza la solicitud al backend
  try {
    const formData = new FormData();
    formData.append('id', id);
    for(let el of files){
      formData.append(el.nombre, el);
    }
    await fetch(process.env.REACT_APP_API_URL + '/noticias/addfile', {
      method: "PUT",
      body: formData,
    });
  } catch (error) {
    throw new Error("Error al modificar el archivo: " + error);
  }
return true
}


export async function aumentarDescarga(fileId){
  const data = new FormData();

  data.append('id', fileId)
  fetch(process.env.REACT_APP_API_URL + '/archivos/sumar', {
    method: "PUT",
    body: data
  });
}


export async function modificarArchivo(url, values){
  const data = new FormData();

  data.append('id', values.id)
  data.append('nombre', values.nombre)

  try {
    const response = await fetch(url, {
      method: "PUT",
      body: data,
    });
    return response.ok

  } catch (error) {
    return error.message;
  }
}



export async function eliminarArchivo(fileId){
  const data = new FormData();

  data.append('id', fileId)

  const result = await fetch(process.env.REACT_APP_API_URL + '/archivos', {
    method: "DELETE",
    body: data
  });

  return result.ok;
}

