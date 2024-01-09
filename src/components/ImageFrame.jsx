import { Button, Card, Modal } from 'react-bootstrap'
import { Fotografia } from '../components/multimedia/Fotografia'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { ToastContext } from '../contexts/ToastContext'
import { eliminarArchivo } from '../services/archivos-service'

export const ImageFrame = ({imagen, imageId}) => {
  //Visibilidad del componente
  const [visible, setVisible] = useState(true);

  const {valid} = useContext(UserContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Modal Eliminar
  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  //Eliminar archivo
  const [correct, setCorrect] = useState(null);

  const handleDelete = async () => {
    const result = await eliminarArchivo(imageId)
    setShowEliminar(false)
    setCorrect(result)
    setVisible(false)
  }

  useEffect(() => {
    if(correct === true){
      actualizarTitulo('Archivo Eliminado')
      setContent('Se ha eliminado con exito el archivo seleccionado.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al Eliminar Archivo')
      setContent('Ocurrio un error al tratar de eliminar el archivo, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  if (!visible) {
    return null;
  }

  return (
    <>
    <Card className='mb-3 px-0' >
      <Card.Header>
        <p>{imagen.nombre}</p>
      </Card.Header>
      <Card.Body className='d-flex align-items-center justify-content-center'>
        <Fotografia key={imagen._id} enlace={imagen.enlace}/>
      </Card.Body>
      {
        (valid) &&
        <Card.Footer>
          <Button variant="danger" className="mx-3" onClick={handleShowEliminar}><i className="bi bi-tools"></i>{' '}Eliminar</Button>
        </Card.Footer>
      }
    </Card>
    {/*Modal Eliminar*/}
    <Modal show={showEliminar} onHide={handleCloseEliminar}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Noticia</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Desea eliminar esta recurso? Esta accion no puede revertirse.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="px-3" onClick={handleCloseEliminar}>
          Volver
        </Button>
        <Button variant="danger" className="px-3" onClick={handleDelete}>
          Eliminar Recurso
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
