import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { getDateString } from "../services/stringFormatter";
import { Departamento } from "./Departamento";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { eliminarNoticia } from "../services/noticias-service";
import { ToastContext } from "../contexts/ToastContext";
import { Galeria } from "./multimedia/Galeria";
import { DocumentosNoticia } from "./multimedia/DocumentosNoticia";
import { ModificarPublicacion } from "../views/ModificarPublicacion";

export const Noticia = ({noticia, isModal = false}) => {
  //Contexts
  const {valid} = useContext(UserContext)
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  //Visibilidad del componente
  const [visible, setVisible] = useState(true);

  //Modal Eliminar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Modal Vista
  const [showVista, setShowVista] = useState(false);
  const handleCloseVista = () => setShowVista(false);
  const handleShowVista = () => setShowVista(true);

  //Modal Modificar
  const [showModificar, setShowModificar] = useState(false);
  const handleCloseModificar = () => setShowModificar(false);
  const handleShowModificar = () => setShowModificar(true);

  //Eliminar noticia
  const [correct, setCorrect] = useState(null);

  const handleDelete = async () => {
    const result = await eliminarNoticia(noticia._id)
    setCorrect(result)
    setVisible(false)
  }

  useEffect(() => {
    if(correct === true){
      actualizarTitulo('Publicación Eliminada')
      setContent('Se ha eliminado con exito la publicación seleccionada.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct === false){
      actualizarTitulo('Error al Eliminar Publicación')
      setContent('Ocurrió un error al tratar de eliminar la publicación, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])


  //Separar imagenes de documentos
  const filesNoticia = noticia.archivos.filter((archivo) => archivo.tipo === "Documento")
  const imagesNoticia = noticia.archivos.filter((archivo) => archivo.tipo === "Imagen")


  if(!visible){
    return null
  }

  return (
    <>
    <Card className="mb-4 mr-3 noticia" >
      <Card.Header className="encabezado">
        <Row onClick={handleShowVista}>
          <Col sm={8}>
            <div className="h-100 d-flex align-items-center">
              <Departamento key={noticia._id} nombre={noticia.departamento.nombre} />
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-flex flex-column align-items-end">
              <h6>{getDateString(noticia.fechaPublicacion)}</h6>
              <h6>{noticia.municipio}</h6>
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <p onClick={handleShowVista}>
          {noticia.contenido}
        </p>
        <div className="container-multimedia d-flex flex-column justify-content-around">
          <DocumentosNoticia documentos={filesNoticia}/>
          <Galeria archivos={imagesNoticia} />
        </div>
      </Card.Body>
      {
        (valid && !isModal) &&
        <Card.Footer>
          <Button variant="warning" onClick={handleShowModificar}><i className="bi bi-tools "></i>{' '}Modificar</Button>
          <Button variant="danger" className="mx-3" onClick={handleShow}><i className="bi bi-tools"></i>{' '}Eliminar</Button>
        </Card.Footer>
      }
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea eliminar esta publicación y los archivos incluidos en la misma? Esta acción no puede revertirse.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="px-3" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="danger" className="px-3" onClick={handleDelete}>
            Eliminar Publicación
          </Button>
        </Modal.Footer>
      </Modal>
      {
        !isModal && <Modal size='lg' show={showVista} onHide={handleCloseVista}>
          <Noticia key={noticia._id} noticia={noticia} isModal={true}/>
        </Modal>
      }
      <Modal size='lg' show={showModificar} onHide={handleCloseModificar}>
        <ModificarPublicacion handleClose={handleCloseModificar} noticia={noticia}/>
      </Modal>
    </>
  );
};
