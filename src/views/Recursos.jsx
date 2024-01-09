import { Button, Col, Row, Container, Image, Modal, Tab, Tabs } from "react-bootstrap";
import banner from '../assets/images/bannerRecursos.jpg'
//import { mockImagenes } from "../services/mock-service.js";
import { ContainerDocumentos } from "../components/ContainerDocumentos.jsx";
import { useContext, useEffect, useState } from "react";
import { SubirArchivo } from "./SubirArchivo.jsx";
import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";
import { UserContext } from "../contexts/UserContext.js";
import '../assets/styles/recursos.css'
import { ContainerImagenes } from "../components/ContainerImagenes.jsx";
import { PaginacionRecursos } from "../components/PaginacionRecursos.jsx";
import { RefetchContext } from "../contexts/RefetchContext.js";
import { GridPlaceholderDocumentos } from "../components/GridPlaceholderDocumentos.jsx";
import { BarraBuscarRecursos } from "../components/BarraBuscarRecursos";
import { BarraFiltrosOficios } from "../components/BarraFiltrosOficios";
import { CajaHerramientas } from "../components/CajaHerramientas.jsx";
import { Oficios } from "./Oficios.jsx";
import { CajaHerramientasLaminas } from "../components/CajaHerramientasLaminas.jsx";

export const Recursos = () => {
  useTitle("Recursos");
  const { valid } = useContext(UserContext)
  const { refetch, setRefetch } = useContext(RefetchContext)

  const [index, setIndex] = useState(1);
  const [tipo, setTipo] = useState('Documento')

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [dataImages, setDataImages] = useState(null)

  const [view, setView] = useState('publicaciones')

   //Buscar archivos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(process.env.REACT_APP_API_URL +  `/archivos/${index}/${tipo ? tipo : 'Documento'}`);
        setLoading(false)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        if(tipo === 'Documento'){
          setData(jsonData)
        }
        else{ 
          setDataImages(jsonData)
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    setRefetch(false);
  }, [index, tipo, refetch, setRefetch])
  
  //Formulario subir recurso
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Cambio de Tabs
  const handleTabChange = (key) => {
    setIndex(1)
    setTipo(key)
  };


  return (
    <Layout pagina={"Recursos"}>
      <main>
      <Image src={banner}
      className="animate__animated animate__fadeIn w-100" style={{maxHeight: '300px', objectFit: 'cover'}} fluid/>
        <h1 className="titulo-recursos">Recursos Disponibles</h1>
        <Row>
          <Col lg={3}>
            {
              valid && 
              <div className="d-flex justify-content-center">
                <Button variant="warning" className="mx-4" onClick={handleShow}>
                  <i className="bi bi-tools"></i>{' '}Publicar
                </Button>
              </div>
            }
            <BarraBuscarRecursos setDocumentos={setData} setImagenes={setDataImages}/>
            <BarraFiltrosOficios setDocumentos={setData} setImagenes={setDataImages} setView={setView}/>
          </Col>
          <Col lg={9}>
            <Container>
              {
                view === 'publicaciones' &&
                <>
                  <PaginacionRecursos tipo={tipo} index={index} setIndex={setIndex}/>
                  <Tabs
                    defaultActiveKey="Documento"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    onSelect={handleTabChange}
                  >
                    <PaginacionRecursos tipo={tipo} index={index} setIndex={setIndex}/>
                    <Tab eventKey="Documento" title="Documentos">
                      {
                        loading ?
                        <GridPlaceholderDocumentos />
                        : <ContainerDocumentos documentos={data} />
                      }
                    </Tab>
                    <Tab eventKey="Imagen" title="Imagenes">
                      <Container>
                        <ContainerImagenes imagenes={dataImages} />
                      </Container>
                    </Tab>
                  </Tabs>
                  <PaginacionRecursos tipo={tipo} index={index} setIndex={setIndex}/>
                </>
              }
              {
                view === 'oficios' &&
                <>
                  <Oficios />
                </>
              }
              {
                view === 'herramientas' &&
                <>
                  <CajaHerramientas />
                </>
              }
              {
                view === 'herr-laminas' &&
                <>
                  <CajaHerramientasLaminas />
                </>
              }
            </Container>
          </Col>
        </Row>
      </main>
      <Modal show={show} onHide={handleClose}>
        <SubirArchivo handleClose={handleClose}/>
      </Modal>
    </Layout>
  );
}
