import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { ToastContext } from "../contexts/ToastContext.js";
import { editValor } from "../services/valores-service.js";

export const FormEditValor = ({handleClose, valor, setData}) => {

  //Contexts
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    id: valor?._id,
    nombre: valor?.nombre,
    descripcion: valor?.descripcion
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await editValor(values)
    setCorrect(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct){
      actualizarTitulo('Archivos Agregados')
      setContent('Se han cargado correctamente los archivos.')
      setVariant('info')
      setShowToast(true)
      setData(correct)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Editar Valor</h3>
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

        <Form.Group className="mb-3">
          <FloatingLabel label="Descripción">
            <Form.Control
              placeholder="Descripción del Valor"
              name='descripcion'
              id='descripcion'
              onChange={handleChange}
              value={values.descripcion}
            />
          </FloatingLabel>
        </Form.Group>

        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="success" type="submit" value="Editar Valor" />
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
