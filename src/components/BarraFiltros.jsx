import { Form, ListGroup } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import dataMunicipios from "../data/municipiosCopan.json"
import { useEffect, useState } from 'react';

export const BarraFiltros = ({activeFilter, setFiltro, setMunicipios, resetIndex}) => {
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');

  const [muni, setMuni] = useState(0)

  const handleFilter = (deptoId) => {
    if(deptoId !== activeFilter){
      setFiltro(deptoId)
    }
    else{
      setFiltro('')
    }
    resetIndex()
  }

  const handleFilterMunicipios = (e) => {
    setMuni(e.target.value)
  }

  useEffect(() => {
    if(muni !== 0){
      setMunicipios(muni)
    }
    else{
      setMunicipios('')
    }
    resetIndex()
  
  }, [muni, resetIndex, setMunicipios])
  

  return (
    <aside className="px-3 mt-4">

      <h3>Municipio</h3>
      <Form>
        <Form.Group className="mb-3">
            <Form.Select aria-label=""  id="municipio" name="municipio" value={muni} onChange={handleFilterMunicipios}>
              <option value={''}>Todos los Municipios</option>
              {
                dataMunicipios.municipios.map((municipio, index) => (
                  <option key={index} value={municipio}>{municipio}</option>
                ))
              }
            </Form.Select>
        </Form.Group>
      </Form>

      <h3>Unidades y Direcciones</h3>
      <ListGroup variant='dark'>
        {
          !isLoading &&
          data.map(depto => (
            <ListGroup.Item key={depto._id} variant='info' action 
            onClick={() => handleFilter(depto._id)} active={depto._id === activeFilter}>
              {depto.nombre}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </aside>
  )
}
