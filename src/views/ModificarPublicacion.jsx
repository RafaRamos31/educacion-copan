import useFetch from "../hooks/useFetch.js";
//import { mockDepartamentos } from "../services/mock-service.js";
import useForm from "../hooks/useForm.js";
import { editNoticia } from "../services/noticias-service.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import { RefetchContext } from "../contexts/RefetchContext.js";
import { ToastContext } from "../contexts/ToastContext.js";

export const ModificarPublicacion = ({handleClose, noticia}) => {
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');

  //Contexts
  const { setRefetch } = useContext(RefetchContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    idPublicacion: noticia._id,
    departamento: noticia.departamento._id,
    contenido: noticia.contenido
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);


  //Subir noticia
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await editNoticia(process.env.REACT_APP_API_URL + '/noticias', values)
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
          <FloatingLabel label="Departamento">
            <Form.Select aria-label="Select Departamento"  id="departamento" name="departamento" onChange={handleChange} value={values.departamento}>
              <option>Seleccione un Departamento</option>
              {
                !isLoading &&
                data.map(depto => (<option key={depto._id} value={depto._id}>{depto.nombre}</option>))
              }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Contenido">
            <Form.Control
              as="textarea"
              placeholder="Contenido"
              style={{ height: '200px' }}
              name='contenido'
              id='contenido'
              onChange={handleChange}
              value={values.contenido}
            />
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
