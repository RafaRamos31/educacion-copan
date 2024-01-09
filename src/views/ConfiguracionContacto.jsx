import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FormMunicipio } from '../components/FormMunicipio';
import { updateContactoConfig } from '../services/config-service';

export const ConfiguracionContactos = ({data, handleClose=null}) => {

  const [contactos, setContactos] = useState(data)
  
  const handleAddMunicipio = () => {
    setContactos([...contactos, {name: '', referencias: [":"]}])
  }

  const handleDeleteMunicipio = () => {

    var newContactos = [];

    for (var i = 0; i < Object.keys(contactos).length - 1; i++) {
      newContactos[i] = contactos[i];
    }
    setContactos(newContactos)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateContactoConfig(contactos)
  
    if(!handleClose){
      window.location.reload();
    }
    else{
      handleClose()
    } 
  };

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Contacto</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
        {
          contactos && contactos.map((municipio, index) => (
            <FormMunicipio municipio={municipio} key={index} index={index} contactos={contactos} setContactos={setContactos}/>
          ))
        }
        <Button variant="info" onClick={handleAddMunicipio}>
          Agregar Municipio
        </Button>
        <Button variant="danger" className='mx-2' onClick={handleDeleteMunicipio}>
          Eliminar Municipio
        </Button>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-center'>
        <Button variant="warning" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </Card.Footer>
    </Card>
  );
}
