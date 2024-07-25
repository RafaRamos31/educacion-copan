import { Button, Card, Col, Row, Modal, Image, Spinner } from 'react-bootstrap'
import { useState, useContext, useEffect } from "react"
import { aumentarDescarga, eliminarArchivo } from '../../services/archivos-service.js';
import { UserContext } from '../../contexts/UserContext';
import { ToastContext } from '../../contexts/ToastContext';
import '../../assets/styles/documento.css'
import { ModificarArchivo } from '../../views/ModificarArchivo.jsx';

export const Documento = ({archivo}) => { 
  //Visibilidad del componente
  const [visible, setVisible] = useState(true);

  //Contador
  const [count, setCount] = useState(archivo.totalDescargas)

  //Contextos
  const { userData } = useContext(UserContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Modal Vista Previa
  const [showVista, setShowVista] = useState(false);
  const handleCloseVista = () => setShowVista(false);
  const handleShowVista = () => setShowVista(true);

  //Modal Eliminar
  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  //Modal Modificar
  const [showModificar, setShowModificar] = useState(false);
  const handleCloseModificar = () => setShowModificar(false);
  const handleShowModificar = () => setShowModificar(true);

  //Boton de carga
  const [charging, setCharging] = useState(false);

  //Descargar archivo
  const handleDownload = () => {
    setCharging(true)
    aumentarDescarga(archivo._id)
    setTimeout(() => {
      setCharging(false)
    }, 500);
    setCount(count + 1)
  }

  //Eliminar archivo
  const [correct, setCorrect] = useState(null);
  const [deleting, setDeleting] = useState(false);


  const handleDelete = async () => {
    setDeleting(true);
    const result = await eliminarArchivo(archivo._id)
    setShowEliminar(false)
    setCorrect(result)
    setVisible(false)
  }

  useEffect(() => {
    if(deleting && correct !== null){
      if(correct){
        actualizarTitulo('Archivo Eliminado')
        setContent('Se ha eliminado con exito el archivo seleccionado.')
        setVariant('info')
        setShowToast(true)
      }
      else{
        actualizarTitulo('Error al Eliminar Archivo')
        setContent('Ocurrio un error al tratar de eliminar el archivo, intente de nuevo.')
        setVariant('danger')
        setShowToast(true)
      }
      setDeleting(false)
    }
  // eslint-disable-next-line
  }, [correct, deleting])
  

  if (!visible) {
    return null;
  }

  return (
    <>
    <Card className='my-2 px-0 documento mx-auto' style={{maxWidth: '400px'}}>
      <Card.Header style={{backgroundColor: 'var(--mp-azul-5)'}}>{archivo.nombre}</Card.Header>
      <Card.Body className='d-flex flex-wrap justify-content-around'>
        <Image height={'90px'} width={'90px'} src={require(`../../assets/images/doctypes/${archivo.docType}_icon.png`)} onClick={handleShowVista} style={{cursor: 'pointer'}}></Image>
        <div className='my-auto d-flex  flex-column justify-content-around'>
          <Button variant='info' onClick={handleShowVista} className='mb-3'>
            <i className="bi bi-eye-fill"></i>{' '}Vista Previa
          </Button>
          {
            !charging ? 
            <Button variant='info' href={archivo.descargar} onClick={handleDownload}>
              <i className="bi bi-download"></i>{' '}Descargar
            </Button>
            : <Button variant="info"> 
              <Spinner
                as="span"
                animation="border"
                size='sm'
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Cargando...</span>
            </Button>
          }
          
        </div>
      </Card.Body>
      <Card.Footer>
        <Row>
          {
            userData && 
            <>
              <Col className='px-1'>
                <Button variant='warning' onClick={handleShowModificar}>
                  Editar
                </Button>
              </Col>
              <Col className='px-1'>
                <Button variant='danger' onClick={handleShowEliminar}>
                  Eliminar
                </Button>
              </Col>
            </>
          }
          <Col className="my-auto">{Number(archivo.tamano / 1024 / 1024).toFixed(2) + ' MB'}</Col>
          <Col xs={2} className="d-flex justify-content-end my-auto"><i className="bi bi-arrow-down"></i> {count}</Col>
        </Row>
      </Card.Footer>
    </Card>
   
    {/*Modal Vista Previa*/}
    <Modal size='lg' show={showVista} onHide={handleCloseVista}>
      <iframe title={archivo.nombre} src={`https://drive.google.com/file/d/${archivo.fileId}/preview`} 
      width="auto" height="480" allow="autoplay"></iframe>
    </Modal>

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
    <Modal size='lg' show={showModificar} onHide={handleCloseModificar}>
      <ModificarArchivo handleClose={handleCloseModificar} archivo={archivo}/>
    </Modal>
    </>
  )
}
