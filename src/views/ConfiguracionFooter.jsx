import { Button, Card, FloatingLabel, Form, Table } from 'react-bootstrap';
import { updateFooterConfig } from '../services/config-service';
import useForm from '../hooks/useForm';

export const ConfiguracionFooter = ({data, handleClose=null}) => {

  const { values, handleChange, setValues } = useForm(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateFooterConfig(values);
  
    if(!handleClose){
      window.location.reload();
    }
    else{
      handleClose()
    } 
  };

  const toggleCheck = (index) => {
    let newRedes = values.footerRedes;
    newRedes[index].exists = !newRedes[index].exists;
    setValues({ ...values, footerRedes: newRedes });
  }

  const updateEnlace = (index, value) => {
    let newRedes = values.footerRedes;
    newRedes[index].enlace = value;
    setValues({ ...values, footerRedes: newRedes });
  }

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Pie de Página</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="resumen">Resumen</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Resumen"
            style={{ height: '100px' }}
            name='footerDesc'
            id='footerDesc'
            value={values.footerDesc}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Direccion">
            <Form.Control aria-label="Direccion"  id="footerDireccion" name="footerDireccion" value={values.footerDireccion} onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Correo">
            <Form.Control aria-label="Correo"  id="footerCorreo" name="footerCorreo" value={values.footerCorreo}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Telefono">
            <Form.Control aria-label="Telefono"  id="footerTelefonos" name="footerTelefonos" value={values.footerTelefonos}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Enlace">
            <Form.Control aria-label="Enlace"  id="footerEnlace" name="footerEnlace" value={values.footerEnlace} onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>
      </Form>  
      <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th>Red Social</th>
              <th>Existe</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {
              values.footerRedes.map((red, i) => (
                <tr key={i}>
                  <td>{red.name}</td>
                  <td><input type="checkbox" name="" id="" checked={red.exists} onChange={() => toggleCheck(i)}/></td>
                  <td><input type="text" disabled={!red.exists} style={{width: '100%'}} value={red.enlace} onChange={(e) => updateEnlace(i, e.target.value)}/></td>
                </tr>
              ))
            }
          </tbody>
        </Table>

      </Card.Body>
      <Card.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </Card.Footer>
    </Card>
  );
}