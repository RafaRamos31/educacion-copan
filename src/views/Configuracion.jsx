import useForm from "../hooks/useForm.js";
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { updateGeneralConfig } from "../services/config-service.js";

export const Configuracion = ({data, handleClose=null}) => {
  const { values, handleChange } = useForm(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGeneralConfig(values)
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
        <h3>Editar Infomación de la Página</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nosotros">Sobre Nosotros</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Sobre nosotros"
            style={{ height: '200px' }}
            name='nosotros'
            id='nosotros'
            value={values.nosotros}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="mensaje">Mensaje de representante</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Mensaje"
            style={{ height: '100px' }}
            name='mensaje'
            id='mensaje'
            value={values.mensaje}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-4">
          <FloatingLabel label="Representante">
            <Form.Control aria-label="Representante"  id="autor" name="autor" onChange={handleChange} value={values.autor} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Cargo">
            <Form.Control aria-label="Cargo"  id="cargo" name="cargo" onChange={handleChange} value={values.cargo} required/>
          </FloatingLabel>
        </Form.Group>
        
        <Form.Group className="mb-3">
        <Form.Label htmlFor="mision">Misión</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Misión"
            style={{ height: '100px' }}
            name='mision'
            id='mision'
            value={values.mision}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="vision">Visión</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Visión"
            style={{ height: '100px' }}
            name='vision'
            id='vision'
            value={values.vision}
            onChange={handleChange}
          />
        </Form.Group>
        <Button as="input" variant="info" type="submit" value="Guardar Cambios" />
      </Form>
      </Card.Body>
    </Card>
  );
}
