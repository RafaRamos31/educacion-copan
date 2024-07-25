
export async function sendLogin(nombre, password) {
  
  const formValues = new FormData();

  formValues.append("username", nombre);
  formValues.append("password", password);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/usuarios/login', {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al iniciar sesion");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error.message;
  }
}

export function logout(){
  localStorage.removeItem("user-token");
  window.location.reload();
}


export async function register({username, nombre}) {
  
  const formValues = new FormData();

  formValues.append("username", username);
  formValues.append("nombre", nombre);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/usuarios/register', {
      method: "POST",
      body: formValues,
    });

    if (!response.ok) {
      throw new Error("Error al registrar usuario");
    }
    const jsonData = await response.json();
    return {...jsonData, valid: response.ok};
  } catch (error) {
    return error.message;
  }
}

export async function cambiarPassword({password, confirmarPassword, idUsuario}) {
  console.log(password, confirmarPassword, idUsuario)
  if(password !== confirmarPassword){
    return false;
  }

  const formValues = new FormData();

  formValues.append("id", idUsuario);
  formValues.append("password", password);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/usuarios/password', {
      method: "PUT",
      body: formValues,
    });
    return response.ok

  } catch (error) {
    return error.message;
  }
}

export async function deleteUser(userId) {

  const formValues = new FormData();

  formValues.append("id", userId);

  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/usuarios', {
      method: "DELETE",
      body: formValues,
    });
    return response.ok;

  } catch (error) {
    return error.message;
  }
}