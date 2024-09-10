import { useState } from 'react';
import { Button, Card, CloseButton, Modal } from 'react-bootstrap';
import { EditContacto } from '../components/EditContacto';
import { FormContacto } from './FormContacto';

export const ConfiguracionContactos = ({data, handleClose=null}) => {

  const [contactos, setContactos] = useState(data)

  const handleAddContacto = (contacto) => {
    setContactos(c => c.map(muni => {
      if(muni.nombre === contacto.municipio.nombre){
        muni.contactos.push({
          _id: contacto._id,
          establecimiento: contacto.establecimiento,
          municipio: contacto.municipio._id,
          municipioName: contacto.municipio.nombre,
          telefono: contacto.telefono,
          correo: contacto.correo,
        })
      }
      return muni;
    }))
  }


  //Modal Crear
  const [showCrear, setShowCrear] = useState(false);
  const handleCloseCrear = () => setShowCrear(false);
  const handleShowCrear = () => setShowCrear(true);
  
  return (
    <>
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
        <div></div>
        <h3 className='my-2'>Editar Infomación de Contacto</h3>
        <CloseButton onClick={handleClose}/>
        </div>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <div className="d-grid gap-2 mt-2 mb-4">
        <Button variant='success' onClick={handleShowCrear}>Agregar Contacto</Button>
      </div>
        {
          contactos && contactos.map((municipio, index) => (
            <div key={index}>
            <h4 className='my-0 py-0'>{municipio.nombre}</h4>
            <hr className='mt-2'/>
            {
              municipio.contactos.map((contacto, index) => (
                <EditContacto key={index} contacto={contacto} />
              ))
            }
            </div>
          ))
        }
      </Card.Body>
    </Card>
    <Modal show={showCrear} onHide={handleCloseCrear} size="lg">
      <FormContacto handleClose={handleCloseCrear} handleAddContacto={handleAddContacto}/>
    </Modal>
    </>
  );
}
