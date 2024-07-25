import { Button, Form, ListGroup, Modal } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ConfiguracionUnidades } from '../views/ConfiguracionUnidades';

export const BarraFiltros = ({filter, setFilter, handleChange}) => {
  const { userData } = useContext(UserContext);
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/unidadestecnicas');

  const { data: dataMuni, isLoading: isLoadingMuni } = useFetch(process.env.REACT_APP_API_URL + '/municipios');

  const handleFilter = (unidadTecnicaId) => {
    if(unidadTecnicaId !== filter.unidadTecnicaId){
      setFilter(f => ({...f, unidadTecnicaId, page: 0}))
    }
    else{
      setFilter(f => ({...f, unidadTecnicaId: '', page: 0}))
    }
  }

  //Modal Unidades
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  return (
    <>
    <aside className="px-3 mt-4">

      <h3>Municipio</h3>
      <Form>
        <Form.Group className="mb-3">
            <Form.Select id="municipioId" name="municipioId" value={filter.municipioId} onChange={handleChange}>
              <option value={''}>Todos los Municipios</option>
              {
                !isLoadingMuni &&
                dataMuni.map((municipio) => (
                  <option key={municipio._id} value={municipio._id}>{municipio.nombre}</option>
                ))
              }
            </Form.Select>
        </Form.Group>
      </Form>

      <h3>Unidades y Direcciones</h3>
      {
        userData && userData.rol === 'ADMIN' ?  
        <Button className="mx-3 my-3" variant="warning" onClick={handleShow}>
          <i className="bi bi-tools"></i>{' '}Editar Unidades
        </Button>
        : ''
      }
      <ListGroup variant='dark'>
        {
          !isLoading &&
          data.map(ut => (
            <ListGroup.Item key={ut._id} variant='info' action 
            onClick={() => handleFilter(ut._id)} active={ut._id === filter.unidadTecnicaId}>
              {ut.nombre}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </aside>
    <Modal show={show} onHide={handleClose} size="lg">
      <ConfiguracionUnidades data={data}  handleClose={handleClose}/>
    </Modal>
    </>
  )
}
