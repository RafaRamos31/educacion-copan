import { Button, Container, Modal } from "react-bootstrap";
import { Layout } from "./Layout";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Configuracion } from "./Configuracion";
import useFetch from "../hooks/useFetch";
import { ConfiguracionValores } from "./ConfiguracionValores";
import { ConfiguracionFooter } from "./ConfiguracionFooter";
import { LoadingScreen } from "./LoadingScreen";
import { ConfiguracionContactos } from "./ConfiguracionContacto";

export const Configuraciones = () => {
  //Validacion
  const {valid, userData} = useContext(UserContext);
  const navigation = useNavigate()
  useEffect(() => {
    if(!valid || userData.rol === 'Publish'){
      navigation('/')
    }
  }, [valid, userData, navigation])

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/config`);
  
  //Modal General
  const [showGeneral, setShowGeneral] = useState(false);
  const handleCloseGeneral = () => setShowGeneral(false);
  const handleShowGeneral = () => setShowGeneral(true);

  //Modal Valores
  const [showValores, setShowValores] = useState(false);
  const handleCloseValores = () => setShowValores(false);
  const handleShowValores = () => setShowValores(true);

  //Modal Footer
  const [showFooter, setShowFooter] = useState(false);
  const handleCloseFooter = () => setShowFooter(false);
  const handleShowFooter = () => setShowFooter(true);

  //Modal Contacto
  const [showContacto, setShowContacto] = useState(false);
  const handleCloseContacto = () => setShowContacto(false);
  const handleShowContacto = () => setShowContacto(true);

  if(isLoading){
    return <LoadingScreen />
  }

  return (
    <>
    <Layout pagina={"Configuraciones"}>
      <Container className='d-flex flex-column align-items-center gap-3'>
        <h1 className="titulo-contacto">Configuraciones</h1>
        <Button variant="warning" className="px-3" onClick={handleShowGeneral}>
          <i className="bi bi-tools"></i>{' '}Configuracion General
        </Button>  
        <Button variant="warning" className="px-3" onClick={handleShowValores}>
          <i className="bi bi-tools"></i>{' '}Valores
        </Button> 
        <Button variant="warning" className="px-3"  onClick={handleShowFooter}>
          <i className="bi bi-tools"></i>{' '}Pie de Pagina
        </Button> 
        <Button variant="warning" className="px-3">
          <i className="bi bi-tools"></i>{' '}Secciones
        </Button> 
        <Button variant="warning" className="px-3" onClick={handleShowContacto}>
          <i className="bi bi-tools"></i>{' '}Contacto
        </Button> 
      </Container>
    </Layout>
    <Modal show={showGeneral} onHide={handleCloseGeneral} size="lg">
      <Configuracion data={data} handleClose={handleCloseGeneral}/>
    </Modal>
    <Modal show={showValores} onHide={handleCloseValores} size="lg">
      <ConfiguracionValores data={data ? data.valores : null} handleClose={handleCloseValores}/>
    </Modal>
    <Modal show={showFooter} onHide={handleCloseFooter} size="lg">
      <ConfiguracionFooter data={data} handleClose={handleCloseFooter}/>
    </Modal>
    <Modal show={showContacto} onHide={handleCloseContacto} size="lg">
      <ConfiguracionContactos data={data.contactos} handleClose={handleCloseContacto}/>
    </Modal>
    </>
  );
}
