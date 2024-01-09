import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";


export const PublicarOficio = ({handleClose}) => {

  //Formulario
  const { values, handleChange } = useForm({
    month: '',
    type: '',
    file: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values)
    //const result = await sendNoticia(process.env.REACT_APP_API_URL + '/noticias', values)
    handleClose()
  };

  return (
    <Card>
      <Card.Header>
        <h3>Agregar Oficio</h3>
      </Card.Header>
      <Card.Body style={{backgroundColor: 'var(--mp-azul-4)'}}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Mes de Publicación</Form.Label>
            <Form.Control type="month" name="month" id="month" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Tipo de Documento">
              <Form.Select aria-label="Select Tipo Documento"  id="type" name="type" onChange={handleChange}>
                <option value={'oficio'}>Oficio</option>
                <option value={'reglamento'}>Reglamento</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Documento</Form.Label>
            <Form.Control type="file" name="file" id="file" onChange={handleChange}/>
          </Form.Group>
          <Button as="input" variant="info" type="submit" value="Publicar" />
        </Form>
      </Card.Body>
    </Card>
  );
}
