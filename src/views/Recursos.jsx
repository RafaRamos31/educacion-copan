import { Button, Col, Row, Container, Image, Modal, Tab, Tabs } from "react-bootstrap";
import banner from '../assets/images/banners/bannerRecursos.jpg'
import { ContainerDocumentos } from "../components/ContainerDocumentos.jsx";
import { useContext, useEffect, useState } from "react";
import { SubirArchivo } from "./SubirArchivo.jsx";
import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";
import { UserContext } from "../contexts/UserContext.js";
import { ContainerImagenes } from "../components/ContainerImagenes.jsx";
import { PaginacionRecursos } from "../components/PaginacionRecursos.jsx";
import { RefetchContext } from "../contexts/RefetchContext.js";
import { GridPlaceholderDocumentos } from "../components/GridPlaceholderDocumentos.jsx";
import { BarraBuscarRecursos } from "../components/BarraBuscarRecursos";
import { BarraFiltrosOficios } from "../components/BarraFiltrosOficios";
import { CajaHerramientas } from "../components/CajaHerramientas.jsx";
import { Oficios } from "./Oficios.jsx";
import { CajaHerramientasLaminas } from "../components/CajaHerramientasLaminas.jsx";
import useForm from "../hooks/useForm.js";
import '../assets/styles/recursos.css'

export const Recursos = () => {
  useTitle("Recursos");
  const { userData } = useContext(UserContext)
  const { refetch, setRefetch } = useContext(RefetchContext)

  const [loading, setLoading] = useState(true)
  const [totaldocs, settotaldocs] = useState(1)
  const [data, setData] = useState(null)
  const [dataImages, setDataImages] = useState(null)

  const [view, setView] = useState('publicaciones')

  //Navigation filters

  const {values, setValues} = useForm({
    page: 0,
    tipo: 'Documento',
    query: ''
  })

   //Buscar archivos
  useEffect(() => {
    const fetchData = async () => {
      const formValues = new FormData();
      formValues.append("page", values.page);
      formValues.append("pageSize", values.tipo === 'Documento' ? 6 : 9);
      formValues.append("tipo", values.tipo);
      formValues.append("queryArchivo", values.query);
      try {
        setLoading(true)
        const response = await fetch(process.env.REACT_APP_API_URL +  `/archivos/paged`, {
          method: "POST",
          body: formValues,
        });
        setLoading(false)
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        if(values.tipo === 'Documento'){
          setData(jsonData.archivos)
        }
        else{ 
          setDataImages(jsonData.archivos)
        }
        settotaldocs(jsonData?.count)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    setRefetch(false);
  }, [values, refetch, setRefetch])
  
  //Formulario subir recurso
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Cambio de Tabs
  const handleTabChange = (key) => {
    setValues(v => ({...v, 
      page: 0,
      tipo: key
    }))
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
              userData && 
              <div className="d-flex justify-content-center">
                <Button variant="warning" className="mx-4" onClick={handleShow}>
                  <i className="bi bi-tools"></i>{' '}Publicar
                </Button>
              </div>
            }
            <BarraBuscarRecursos setFilter={setValues} setRefetch={setRefetch}/>
            <BarraFiltrosOficios setDocumentos={setData} setImagenes={setDataImages} setView={setView}/>
          </Col>
          <Col lg={9}>
            <Container>
              {
                view === 'publicaciones' &&
                <>
                  <PaginacionRecursos setValues={setValues} tipo={values.tipo} totaldocs={totaldocs} index={values.page+1} />
                  <Tabs
                    defaultActiveKey="Documento"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    onSelect={handleTabChange}
                  >
                    <PaginacionRecursos setValues={setValues} tipo={values.tipo} totaldocs={totaldocs} index={values.page+1} />
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
                  <PaginacionRecursos setValues={setValues} tipo={values.tipo} totaldocs={totaldocs} index={values.page+1} />
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
