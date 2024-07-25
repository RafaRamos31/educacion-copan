import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { updateFooterConfig } from '../services/config-service';
import useForm from '../hooks/useForm';

export const ConfiguracionFooter = ({data, handleClose=null}) => {

  const { values, handleChange } = useForm(data);

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

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Pie de Página</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-4">
          <FloatingLabel label="Direccion">
            <Form.Control aria-label="Direccion"  id="direccion" name="direccion" value={values.direccion} onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Correo">
            <Form.Control aria-label="Correo"  id="correo" name="correo" value={values.correo}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Telefono">
            <Form.Control aria-label="Telefono"  id="telefono" name="telefono" value={values.telefono}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Facebook">
            <Form.Control aria-label="Facebook"  id="facebook" name="facebook" value={values.facebook}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Instagram">
            <Form.Control aria-label="instagram"  id="instagram" name="instagram" value={values.instagram}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Youtube">
            <Form.Control aria-label="youtube"  id="youtube" name="youtube" value={values.youtube}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Twitter">
            <Form.Control aria-label="twitter"  id="twitter" name="twitter" value={values.twitter}  onChange={handleChange} required/>
          </FloatingLabel>
        </Form.Group>

      </Form>  
      </Card.Body>
      <Card.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          Guardar Cambios
        </Button>
      </Card.Footer>
    </Card>
  );
}