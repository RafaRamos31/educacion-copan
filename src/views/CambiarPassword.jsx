import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { ToastContext } from "../contexts/ToastContext.js";
import { UserContext } from "../contexts/UserContext.js";
import { cambiarPassword } from "../services/login-service.js";

export const CambiarPassword = () => {
  //Contexts
  const { userData } = useContext(UserContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    password: '',
    confirmarPassword: '',
    idUsuario: userData.id
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await cambiarPassword(values)
    setCorrect(result)
    setCharging(false)
  };

  useEffect(() => {
    if(correct === true){
      window.location.reload()
      actualizarTitulo('Contraseña actualizada')
      setContent('Su contraseña ha sido actualizada exitosamente.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al Cambiar la contraseña')
      setContent('Ocurrio un error al intentar cambiar la contraseña del usuario, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <>
    <Card>
      <Card.Header>
        <h3>Cambiar Contraseña</h3>
      </Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <FloatingLabel label="Contraseña">
              <Form.Control aria-label="Contraseña" type="password" id="password" name="password" onChange={handleChange} required/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-4">
            <FloatingLabel label="Confirmar Contraseña">
              <Form.Control aria-label="Usuario" type="password" id="confirmarPassword" name="confirmarPassword" onChange={handleChange} required/>
            </FloatingLabel>
          </Form.Group>
        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="info" type="submit" value="Actualizar Contraseña" />
            : <Button variant="info"> 
              <Spinner
                as="span"
                animation="border"
                size="md"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Cargando...</span>
            </Button>
          }
        </div>
      </Form>
      </Card.Body>
    </Card>
  </>
  );
}
