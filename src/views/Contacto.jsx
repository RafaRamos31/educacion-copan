import { Accordion, Button, Col, Container, Form, Row, Image, Modal } from "react-bootstrap";
import useForm from "../hooks/useForm.js";
import { Layout } from "./Layout.jsx";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import banner from "../assets/images/contacto.jpg"
import '../assets/styles/contacto.css'
import { LoadingScreen } from "./LoadingScreen.jsx";
import useFetch from "../hooks/useFetch.js";
import { ConfiguracionContactos } from "./ConfiguracionContacto.jsx";
import { sendMail } from "../services/mail-service.js";
import info from '../data/info-pagina.json';

export const Contacto = () => {
  const {valid, userData} = useContext(UserContext);

  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/config/contactos`);

  const { values, handleChange } = useForm({
    pagina: info.subtitulo,
    nombre: "",
    apellido: "",
    municipio: "",
    comunidad: "",
    correo: "",
    telefono: "",
    asunto: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail(values);
  };

  //Modal Contacto
  const [showContacto, setShowContacto] = useState(false);
  const handleCloseContacto = () => setShowContacto(false);
  const handleShowContacto = () => setShowContacto(true);

  if(isLoading){
    return <LoadingScreen />
  }

  return (
    <>
    <Layout pagina={"Contacto"}>
      <Image src={banner}
      className="animate__animated animate__fadeIn w-100" fluid/>
      <h1 className="titulo-contacto">CONTACTO</h1>
      <p className="subtitulo-contacto">Estamos para ayudarle</p>
      <Container>
        <Row>
          <Col lg={5} className="px-4">
            <h3 className="my-3">Nuestros Telefonos</h3>
            <Accordion alwaysOpen>
              {
                data.contactos && data.contactos.map((municipio, index) => (
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{municipio.name}</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {
                          municipio.referencias.map((ref, i) => (
                            <li key={i}>{ref}</li>
                          ))
                        }
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ))
              }
            </Accordion>
            {
              (valid && userData.rol !== 'Publish') ?  
                <Button variant="warning" className="mt-3" onClick={handleShowContacto}>
                  <i className="bi bi-tools"></i>{' '}Editar
                </Button>
                : ''
              }
          </Col>
          <Col lg={7}>
            <h3 className="my-3">Formulario de Contacto</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="nombre"
                      id="nombre"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      name="apellido"
                      id="apellido"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control
                      name="municipio"
                      id="municipio"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Comunidad</Form.Label>
                    <Form.Control
                      name="comunidad"
                      id="comunidad"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                      type="email"
                      name="correo"
                      id="correo"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      name="telefono"
                      id="telefono"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ingrese su mensaje..."
                  style={{ height: "200px" }}
                  name="asunto"
                  id="asunto"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                className="mb-3"
                as="input"
                variant="info"
                type="submit"
                value="Enviar Formulario"
              />
            </Form>
          </Col>
        </Row>
      </Container>            
    </Layout>
    <Modal show={showContacto} onHide={handleCloseContacto} size="lg">
      <ConfiguracionContactos data={data.contactos} handleClose={handleCloseContacto}/>
    </Modal>
    </>
  );
};
