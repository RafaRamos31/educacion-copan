import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import { RefetchContext } from "../contexts/RefetchContext.js";
import { ToastContext } from "../contexts/ToastContext.js";
import { modificarArchivo } from "../services/archivos-service.js";

export const ModificarArchivo = ({handleClose, archivo}) => {

  //Contexts
  const { setRefetch } = useContext(RefetchContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    idArchivo: archivo._id,
    nombre: archivo.nombre
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);


  //Subir noticia
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await modificarArchivo(process.env.REACT_APP_API_URL + '/archivos', values)
    setCorrect(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct === true){
      setRefetch(true)
      actualizarTitulo('Publicación modificada')
      setContent('La publicación se ha guardado con exito.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al modificar publicación')
      setContent('Ocurrió un error al intentar subir la publicación, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Modificar Publicación</h3>
      </Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel label="Nombre del Archivo">
            <Form.Control
              placeholder="Nombre del archivo"
              name='nombre'
              id='nombre'
              onChange={handleChange}
              value={values.nombre}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Unidad">
            <Form.Select aria-label=""  id="unidad" name="unidad">
              <option>Seleccione una Unidad</option>
              <option value={0}>Copán</option>
              <option value={1}>Ocotepeque</option>
              <option value={2}>Lempira</option>
              <option value={3}>Santa Bárbara</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Sub Unidad">
            <Form.Select aria-label=""  id="subunidad" name="subunidad">
              <option>Seleccione una Sub Unidad</option>
              <option value={0}>Copán</option>
              <option value={1}>Ocotepeque</option>
              <option value={2}>Lempira</option>
              <option value={3}>Santa Bárbara</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="info" type="submit" value="Modificar" />
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
  );
}
