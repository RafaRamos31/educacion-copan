import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Modal, Spinner } from 'react-bootstrap';
import { ToastContext } from "../contexts/ToastContext.js";
import { UserContext } from "../contexts/UserContext.js";
import { register } from "../services/login-service.js";

export const RegistrarUsuario = ({handleClose}) => {
  //Contexts
  const { userData } = useContext(UserContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

 
  //Formulario
  const { values, handleChange } = useForm({
    nombre: '',
    username: '',
    rol: '',
    masterId: userData._id
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Modal Resultado
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [codigo, setCodigo] = useState('');

  const handleCloseModal = () => {
    setShow(false)
    handleClose()
  };

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await register(values)
    setCorrect(!!result.valid)
    setCodigo(result.codigo)
    setCharging(false)
  };

  useEffect(() => {
    if(correct === true){
      handleShow();
    }
    if(correct === false){
      actualizarTitulo('Error al Registrar Usuario')
      setContent('Ocurrio un error al intentar registrar al usuario, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <>
    <Card>
      <Card.Header>
        <h3>Registrar Usuario</h3>
      </Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control aria-label="Nombre"  id="nombre" name="nombre" onChange={handleChange} placeholder="Su nombre y apellido. Ej. Juan Gomez" required/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control aria-label="Usuario"  id="username" name="username" onChange={handleChange} placeholder="Ej. juangomez01" required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Rol">
              <Form.Select aria-label="Select Rol"  id="rol" name="rol" onChange={handleChange}>
                <option>Rol de usuario</option>
                <option value={'Admin'}>Administrador</option>
                <option value={'Publish'}>Publicador</option>
                <option value={'Viewer'}>Lector</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="info" type="submit" value="Subir" />
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
    <Modal show={show} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Usuario Registrado Exitosamente</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Usuario: {values.username} </p>
      <p>Clave temporal: {codigo} </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleCloseModal}>
        Terminar
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}
