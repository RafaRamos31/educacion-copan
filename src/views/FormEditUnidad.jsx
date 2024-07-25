import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { ToastContext } from "../contexts/ToastContext.js";
import { editUnidad } from "../services/unidades-service.js";

export const FormEditUnidad = ({handleClose, unidad, setData}) => {

  //Contexts
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    id: unidad?._id,
    nombre: unidad?.nombre,
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await editUnidad(values)
    setCorrect(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct){
      actualizarTitulo('Unidad Modificada')
      setContent('Se han modificado correctamente la unidad.')
      setVariant('info')
      setShowToast(true)
      setData(correct)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Editar Unidad Técnica</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <FloatingLabel label="Nombre">
            <Form.Control
              placeholder="Nombre del Valor"
              name='nombre'
              id='nombre'
              onChange={handleChange}
              value={values.nombre}
            />
          </FloatingLabel>
        </Form.Group>

        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="success" type="submit" value="Editar Unidad Técnica" />
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
