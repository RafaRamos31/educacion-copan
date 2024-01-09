import { useContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { publicarArchivos } from "../services/archivos-service.js";
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { RefetchContext } from "../contexts/RefetchContext.js";
import { ToastContext } from "../contexts/ToastContext.js";

export const SubirArchivo = ({handleClose}) => {
  //Contexts
  const { setRefetch } = useContext(RefetchContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Formulario
  const { values, handleChange } = useForm({
    multimedia: []
  });

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Subir archivo  
  const [correct, setCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await publicarArchivos(values.multimedia)
    setCorrect(result)
    handleClose()
    setCharging(false)
  };

  useEffect(() => {
    if(correct === true){
      setRefetch(true)
      actualizarTitulo('Archivos Agregados')
      setContent('Se han cargado correctamente los archivos.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al Subir Archivos')
      setContent('Ocurrio un error al intentar subir los archivos, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Card>
      <Card.Header>
        <h3>Subir Archivos</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Multimedia (imagenes o documentos)</Form.Label>
          <Form.Control type="file" name="multimedia" id="multimedia" multiple onChange={handleChange}/>
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
  );
}
