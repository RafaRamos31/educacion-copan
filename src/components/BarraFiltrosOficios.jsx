import { useState, useEffect } from 'react';
import {  Nav, NavDropdown, Navbar, Tab } from 'react-bootstrap';

export const BarraFiltrosOficios = ({setDocumentos, setImagenes, setView}) => {

  const [query] = useState('');
  const [refetch, setRefetch] = useState(false);
  
  //Buscar noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append('query', query)
        const response = await fetch(process.env.REACT_APP_API_URL +  `/query`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        const archivos = jsonData.filter((e) => e.tipo === 'Documento')
        const imagenes = jsonData.filter((e) => e.tipo === 'Imagen')
        setDocumentos(archivos)
        setImagenes(imagenes)
      } catch (error) {
        throw error;
      }
    }

    if(refetch){
      fetchData();
      setRefetch(false)
    }
  }, [query, refetch, setDocumentos, setImagenes])

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="publicaciones">
      <Navbar bg="light" expand="lg" className="justify-content-center">
      <Nav className="flex-column">
            <NavDropdown title="Publicaciones" className='w-100 text-center' id="documentos-dropdown">
              <NavDropdown.Item href="#documentos" onClick={() => setView('publicaciones')}>Todos los Archivos</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Caja de Herramientas" id="herramientas-dropdown">
              <NavDropdown.Item href="#herramientas" onClick={() => setView('herramientas')}>¿Qué es la Caja de Herramientas?</NavDropdown.Item>
              <NavDropdown.Divider />
              {
                process.env.REACT_APP_WEB_SECTOR === '1' ?
                <>
                  <NavDropdown.Item href="#herr-manuales" onClick={() => setView('herr-manuales')}>Manuales y Guías</NavDropdown.Item>
                  <NavDropdown.Item href="#herr-lineamientos" onClick={() => setView('herr-lineamientos')}>Lineamientos y Protocolos</NavDropdown.Item>
                  <NavDropdown.Item href="#herr-otros" onClick={() => setView('herr-otros')}>Otras Herramientas</NavDropdown.Item>
                </>
                :
                <>
                  <NavDropdown.Item href="#herr-instrumentos" onClick={() => setView('herr-instrumentos')}>Instrumentos Educativos</NavDropdown.Item>
                </>
              }
              
            </NavDropdown>
          </Nav>
      </Navbar>
    </Tab.Container>
  )
}
