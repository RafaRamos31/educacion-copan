import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { ToastContext } from "../contexts/ToastContext.js";
import { sendRedian } from "../services/redian-service.js";

export const FormREDIAN = ({handleClose, handleAddValor}) => {

  //Contexts
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    nombre: '',
    descripcion: ''
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await sendRedian(values)
    setCorrect(result)
    handleAddValor(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct){
      actualizarTitulo('Tablero Agregado')
      setContent('Se ha cargado correctamente el Tablero.')
      setVariant('info')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Agregar Tablero</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <FloatingLabel label="Nombre">
            <Form.Control
              placeholder="Nombre del Tablero"
              name='nombre'
              id='nombre'
              autoComplete="off"
              onChange={handleChange}
              value={values.nombre}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="Enlace de Tableau">
            <Form.Control
              placeholder="Enlace de Tableau"
              name='enlace'
              id='enlace'
              autoComplete="off"
              onChange={handleChange}
              value={values.enlace}
            />
          </FloatingLabel>
        </Form.Group>

        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="success" type="submit" value="Subir" />
            : <Button variant="success"> 
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
  );
}
