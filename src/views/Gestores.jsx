import { Accordion, Container, Image } from "react-bootstrap";
import { Layout } from "./Layout.jsx";
import banner from "../assets/images/bannerGestores.jpg"
import '../assets/styles/contacto.css'
import useFetch from '../hooks/useFetch.js'

export const Gestores = () => {
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/departamentos');

  return (
    <Layout pagina={"Gestores"}>
      <Image src={banner}
      className="animate__animated animate__fadeIn w-100" style={{maxHeight: '300px', objectFit: 'cover'}} fluid/>
      <h1 className="titulo-contacto">GESTORES</h1>
      <Container>
      <Accordion alwaysOpen>
            
      {
        !isLoading &&
        data.map((depto, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{depto.nombre}</Accordion.Header>
            <Accordion.Body>
             <img className='icon-departamento' src={depto.urlLogo} alt={"logo" + depto.nombre} />
              <p>El Departamento de Salud y Servicios Humanos trabaja con los gobiernos estatales y locales en todo el país para realizar investigaciones y prestar servicios públicos de salud, programas de seguridad de alimentos y medicamentos, programas de seguro médico de salud y muchos otros servicios.</p>
            </Accordion.Body>
          </Accordion.Item>
        ))
        } 
        </Accordion>
      </Container>            
    </Layout>
  );
};
