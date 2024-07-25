import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FormEditValor } from '../views/FormEditValor';
import { eliminarValor } from '../services/valores-service';

export const EditValor = ({valor}) => {

  const [valorData, setValorData] = useState(valor);

  //Visibilidad del componente
  const [visible, setVisible] = useState(true);

  //Modal Contacto
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Modal Eliminar
  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);
  const handleShowEliminar = () => setShowEliminar(true);

  //Eliminar archivo
  const [correct, setCorrect] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    const result = await eliminarValor(valorData._id)
    setShowEliminar(false)
    setCorrect(result)
    setVisible(false)
  }

  useEffect(() => {
    if(deleting && correct !== null){
      if(correct){
        setVisible(false)
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
    <div className='my-3 d-flex justify-content-between align-items-center' style={{backgroundColor: 'lightcyan', padding: '1rem', fontSize: '1.1rem'}}>
      {`${valorData.nombre}: ${valorData.descripcion}`}
      <div>
      <Button className='mx-2' variant='info' onClick={handleShow} ><i className="bi bi-pencil-fill"></i></Button>
      <Button variant='danger' onClick={handleShowEliminar}><i className="bi bi-trash-fill"></i></Button>
      </div>
    </div>

    <Modal show={show} onHide={handleClose} size="lg">
      <FormEditValor handleClose={handleClose} valor={valorData} setData={setValorData} />
    </Modal>

    {/*Modal Eliminar*/}
    <Modal show={showEliminar} onHide={handleCloseEliminar}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Valor</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Desea eliminar este Valor? Esta accion no puede revertirse.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="px-3" onClick={handleCloseEliminar}>
          Volver
        </Button>
        <Button variant="danger" className="px-3" onClick={handleDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
