import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { ToastContext } from "../contexts/ToastContext.js";
import useFetch from "../hooks/useFetch.js";
import { sendContacto } from "../services/contactos-service.js";

export const FormContacto = ({handleClose, handleAddContacto}) => {
  //Data Municipios
  const { data: dataMuni, isLoading: isLoadingMuni } = useFetch(process.env.REACT_APP_API_URL +  `/municipios`);

  //Contexts
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    municipio: '',
    establecimiento: '',
    telefono: '',
    correo: ''
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await sendContacto(values)
    setCorrect(result)
    handleAddContacto(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct){
      actualizarTitulo('Archivos Agregados')
      setContent('Se han cargado correctamente los archivos.')
      setVariant('info')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Crear Contacto</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel label="Municipio">
            <Form.Select id="municipioId" name="municipioId" onChange={handleChange} value={values.municipioId}>
              <option>Seleccione un Municipio</option>
              {
                !isLoadingMuni &&
                dataMuni.map(municipio => (<option key={municipio._id} value={municipio._id}>{municipio.nombre}</option>))
              }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="Establecimiento">
            <Form.Control
              placeholder="Nombre del Establecimiento/Contacto"
              autoComplete="off"
              name='establecimiento'
              id='establecimiento'
              onChange={handleChange}
              value={values.establecimiento}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="Teléfono">
            <Form.Control
              placeholder="Número de Teléfono"
              autoComplete="off"
              name='telefono'
              id='telefono'
              onChange={handleChange}
              value={values.telefono}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="Correo Electrónico">
            <Form.Control
              placeholder="Correo Electrónico"
              autoComplete="off"
              type="email"
              name='correo'
              id='correo'
              onChange={handleChange}
              value={values.correo}
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
