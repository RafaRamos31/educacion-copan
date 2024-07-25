import useFetch from "../hooks/useFetch.js";
import useForm from "../hooks/useForm.js";
import { sendNoticia } from "../services/noticias-service.js";
import { Button, Card, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import { RefetchContext } from "../contexts/RefetchContext.js";
import { ToastContext } from "../contexts/ToastContext.js";

export const Publicar = ({handleClose}) => {

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/unidadestecnicas');

  const { data: dataMuni, isLoading: isLoadingMuni } = useFetch(process.env.REACT_APP_API_URL + '/municipios');

  //Contexts
  const { setRefetch } = useContext(RefetchContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    unidadTecnica: '',
    municipio: '',
    contenido: '',
    multimedia: []
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);


  //Subir noticia
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await sendNoticia(process.env.REACT_APP_API_URL + '/noticias', values)
    setCorrect(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct === true){
      setRefetch(true)
      actualizarTitulo('Publicación registrada')
      setContent('La publicación se ha guardado con exito.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al registrar publicación')
      setContent('Ocurrió un error al intentar subir la publicación, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Agregar Publicación</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel label="Unidad Técnica">
            <Form.Select aria-label="Select unidadTecnica"  id="unidadTecnica" name="unidadTecnica" onChange={handleChange}>
              <option>Seleccione una Unidad</option>
              {
                !isLoading &&
                data.map(ut => (<option key={ut._id} value={ut._id}>{ut.nombre}</option>))
              }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Municipio">
            <Form.Select aria-label="Select Municipio"  id="municipio" name="municipio" onChange={handleChange}>
              <option>Seleccionar Municipio</option>
              {
                !isLoadingMuni &&
                dataMuni.map(municipio => (<option key={municipio._id} value={municipio._id}>{municipio.nombre}</option>))
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
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Multimedia (imagenes o documentos)</Form.Label>
          <Form.Control type="file" name="multimedia" id="multimedia" multiple onChange={handleChange}/>
        </Form.Group>
        <div className="d-grid gap-2">
          {
            !charging ? 
            <Button as="input" variant="info" type="submit" value="Publicar" />
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
