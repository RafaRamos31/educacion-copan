import { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { EditREDIAN } from '../components/EditREDIAN';
import { FormREDIAN } from './FormREDIAN';


export const ConfiguracionREDIAN = ({data, handleClose=null}) => {

  const [valores, setValores] = useState(data)

  const handleAddValor = (valor) => {
    setValores(v => v.concat(valor))
  }

  //Modal Crear
  const [showCrear, setShowCrear] = useState(false);
  const handleCloseCrear = () => setShowCrear(false);
  const handleShowCrear = () => setShowCrear(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Card>
      <Form onSubmit={handleSubmit}>
      <Card.Header>
        <h3>Editar Infomación del Tablero</h3>
      </Card.Header>
      <Card.Body>
        <div className="d-grid gap-2 mt-2 mb-4">
          <Button variant='success' onClick={handleShowCrear}>Agregar Tablero</Button>
        </div>
        {
          valores && valores.map((valor, index) => (
            <div key={index}>
              <EditREDIAN valor={valor} />
            </div>
          ))
        }
      </Card.Body>
      </Form>
    </Card>
    <Modal show={showCrear} onHide={handleCloseCrear} size="lg">
      <FormREDIAN handleClose={handleCloseCrear} handleAddValor={handleAddValor}/>
    </Modal>
    </>
  );
}
