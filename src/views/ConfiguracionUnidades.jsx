import { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { EditUnidad } from '../components/EditUnidad';
import { FormUnidad } from './FormUnidad';


export const ConfiguracionUnidades = ({data, handleClose=null}) => {

  const [unidades, setUnidades] = useState(data)

  const handleAddUnidad = (unidad) => {
    setUnidades(u => u.concat(unidad))
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
        <h3>Editar Unidades Técnicas</h3>
      </Card.Header>
      <Card.Body>
        <div className="d-grid gap-2 mt-2 mb-4">
          <Button variant='success' onClick={handleShowCrear}>Agregar Unidad Técnica</Button>
        </div>
        {
          unidades && unidades.map((unidad, index) => (
            <div key={index}>
              <EditUnidad unidad={unidad} />
            </div>
          ))
        }
      </Card.Body>
      </Form>
    </Card>
    <Modal show={showCrear} onHide={handleCloseCrear} size="lg">
      <FormUnidad handleClose={handleCloseCrear} handleAddUnidad={handleAddUnidad}/>
    </Modal>
    </>
  );
}
