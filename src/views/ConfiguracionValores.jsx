import { Button, Card, Form, Table } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import { useState } from 'react';
import { range } from 'lodash';
import { updateValoresConfig } from '../services/config-service';

export const ConfiguracionValores = ({data, handleClose=null}) => {

  const nombres = {}
  const descripciones = {}
  const [size, setSize] = useState(data.length)

  data.map((valor, i) => {
    nombres[`name-${i}`] = valor.nombre;
    descripciones[`desc-${i}`] = valor.descripcion
    return i;
  })

  //Formulario
  const { values: nameValues, handleChange: handleChangeNames} = useForm(nombres);
  const { values: descValues, handleChange: handleChangeDesc } = useForm(descripciones);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateValoresConfig(nameValues, descValues)
  
    if(!handleClose){
      window.location.reload();
    }
    else{
      handleClose()
    } 
  };

  const handleAdd = () => {
    setSize(size + 1)
  }

  const handleDelete = () => {
    setSize(size - 1)
  }


  return (
    <Card>
      <Form onSubmit={handleSubmit}>
      <Card.Header>
        <h3>Editar Infomación de Valores</h3>
      </Card.Header>
      <Card.Body>
      <Table responsive bordered>
          <thead>
            <tr>
              <th style={{minWidth: '150px'}}>Valor</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {
              range(0, size).map(i => (
                <tr key={i}>
                  <td><input type="text" style={{width: '100%'}} name={`name-${i}`} id={`name-${i}`} value={nameValues[`name-${i}`]} onChange={handleChangeNames}/></td>
                  <td><textarea cols="50" rows="3" name={`desc-${i}`} id={`desc-${i}`} value={descValues[`desc-${i}`]} onChange={handleChangeDesc}></textarea></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <Button variant="info" onClick={handleAdd}>
          Agregar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i>{' '}Eliminar
        </Button>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-center'>
        <Button variant="warning" type='submit'>
          Guardar Cambios
        </Button>
      </Card.Footer>
      </Form>
    </Card>
  );
}
