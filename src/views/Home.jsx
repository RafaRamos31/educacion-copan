import useFetch from "../hooks/useFetch.js";
import { Layout } from "./Layout.jsx";
import { Button, Card, Col, Container, Row, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import { Configuracion } from "./Configuracion.jsx";
import { LoadingScreen } from "./LoadingScreen.jsx";
import { HomeImage } from "../components/FrameCambiarImagen.jsx";
import { ConfiguracionValores } from "./ConfiguracionValores.jsx";
import { HomeBackground } from "../components/HomeBackground.jsx";
import '../assets/styles/home.css';

export const Home = () => {
  const {userData} = useContext(UserContext);

  const { data: dataImages, isLoading: isLoadingImages } = useFetch(process.env.REACT_APP_API_URL + '/images');

  const [images, setImages] = useState([]) 
  useEffect(() => {
    if(dataImages && !isLoadingImages){
      const formatted = {}
      dataImages.map(i => {
        formatted[i.nombre] = {
          _id: i._id,
          nombre: i.nombre,
          fileId: i.fileId,
          enlace: i.enlace
        }
        return i;
      })
      setImages(formatted)
    }
  }, [dataImages, isLoadingImages])
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Modal Valores
  const [showValores, setShowValores] = useState(false);
  const handleCloseValores = () => {
    setShowValores(false);
    window.location.reload();
  };
  const handleShowValores = () => setShowValores(true);

  const [values, setValues] = useState({});
  const { data: mongoData, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/home`);

  useEffect(() => {
    if(mongoData){
      setValues(mongoData)
    }
  }, [mongoData, isLoading])


  const [valoresValues, setValoresValues] = useState([]);
  const { data: valoresData, isLoading: valoresLoading } = useFetch(process.env.REACT_APP_API_URL +  `/valores`);

  useEffect(() => {
    if(valoresData){
      setValoresValues(valoresData)
    }
  }, [valoresData, valoresLoading])


  if(isLoading || isLoadingImages){
    return <LoadingScreen />
  }

  return(
    <>
    <Layout pagina={'Inicio'}>
      <Container>
        <section className="initial-view">
          {
              (userData && userData.rol === 'ADMIN') ? 
              <>
              <Button variant="warning" className="config-button" onClick={handleShow}><i className="bi bi-tools"></i>{' '}Editar Informacion General</Button>
              </>
              : ''
          }
          <HomeBackground />
        </section>

        <section className="sobre-nosotros" id="sobre-nosotros">
          <h2 className="sub-title">¿Quiénes Somos?</h2>
          <Card style={{borderRadius: '30px'}}>
            <Card.Body className="nosotros-container" style={{borderRadius: '30px'}}>
              <Row>
              <Col md={9} className="d-flex flex-column justify-content-center" >
                <p className="text-nosotros">
                  {values.nosotros}
                </p>
              </Col>
              <Col md={3}>
                <HomeImage imagen={images['Nosotros']} edit={userData?.rol === 'ADMIN'}/>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </section>

        <section className="representante" id="representante">
          <h2 className="sub-title">Nuestro personal</h2>
          <Card style={{borderRadius: '30px'}}>
            <Card.Body className="nosotros-container" style={{borderRadius: '30px'}}>
              <Row>
              <Col md={9} className="d-flex flex-column justify-content-center" >
                <p className="text-nosotros">
                  {values.mensaje}
                </p>
                <h6>{values.autor}</h6>
                <h6><i>{` ${values.cargo || ''}`}</i></h6>
              </Col>
              <Col md={3}>
                <HomeImage imagen={images['Representante']} edit={userData?.rol === 'ADMIN'}/>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </section>

        <section className="mision-vision" id="mision-vision">
          <h2 className="sub-title">Misión y Visión</h2>
          <Row>
            <Col md={6}>
              <Card className="h-100" style={{borderRadius: '30px'}}>
                <Card.Body className="item" style={{borderRadius: '30px'}}>
                  <div className="icon">
                    <i className="bi bi-book text-icon"></i>Misión
                  </div>
                  <div className="content">
                    {values.mision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100" style={{borderRadius: '30px'}}>
                <Card.Body className="item" style={{borderRadius: '30px'}}>
                  <div className="icon">
                    <i className="bi bi-search text-icon"></i>Visión
                  </div>
                  <div className="content">
                    {values.vision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="organigrama" id="organigrama">
          <h2 className="sub-title">Organigrama</h2>
          <div className="media-container">
            <HomeImage imagen={images['Organigrama']} edit={userData?.rol === 'ADMIN'}/>
          </div>
        </section>

        <section className="valores" id="valores">
          <h2 className="sub-title">Nuestros Valores</h2>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <HomeImage imagen={images['Valores']} edit={userData?.rol === 'ADMIN'}/>
                </Col>
                <Col md={9} className="d-flex flex-column justify-content-center" >
                  <ul>
                    {
                      valoresValues && valoresValues.map((valor, i) => (<li key={i}>
                        <b>{valor.nombre}</b>{': ' + valor.descripcion}
                      </li>))
                    }
                  </ul>
                </Col>
              </Row>
            </Card.Body>
            {
              (userData && userData.rol === 'ADMIN') ? 
                <Card.Footer>
                  <Button variant="warning" onClick={handleShowValores}><i className="bi bi-tools"></i>{' '}Editar Valores</Button>
                </Card.Footer>
                : ''
            }
          </Card>
        </section>

        <section className="cobertura" id="cobertura">
          <h2 className="sub-title">Cobertura</h2>
          <div className="media-container">
            <iframe title={'Mapa de Cobertura'} src={process.env.REACT_APP_MAP_URL + '&noprof=1'} 
            width="600" height="480"></iframe>
          </div>
        </section>
      </Container>
    </Layout>
    <Modal show={show} onHide={handleClose} size="lg">
      <Configuracion data={values}/>
    </Modal>
    <Modal show={showValores} onHide={handleCloseValores} size="lg">
      <ConfiguracionValores data={valoresValues} handleClose={handleCloseValores}/>
    </Modal>
    </>
  );
}
