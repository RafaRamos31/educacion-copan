import { Navbar, Container, Nav, Button, Modal, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo-educacion.png";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../views/Login";
import { useContext, useState, useEffect } from "react";
import { logout } from "../services/login-service";
import { UserContext } from "../contexts/UserContext";
import { CambiarPassword } from "../views/CambiarPassword";
import info from '../data/info-pagina.json'

export const SiteNavBar = () => {
  const [actual, setActual] = useState('');

  const navigate = useNavigate();

  //Contexts
  const {valid, userData} = useContext(UserContext);

  //Modal Login
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Modal FirstLogin
  const [showFirst, setShowFirst] = useState(false);
  const handleCloseFirst = () => setShowFirst(false);
  // eslint-disable-next-line
  const handleShowFirst = () => setShowFirst(true);

  useEffect(() => {
    if(userData.firstLogin){
      handleShowFirst()
    } 
    const dirs = window.location.href.split('/')[3]
    setActual(dirs)
  }, [userData, handleShowFirst])

  const navigateLink = (url) => {
    navigate(url);
  }
  
  return (
    <>
    <Navbar expand="lg"  className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="50"
            height="40"
            className="d-inline-block align-top"
          />
          <label className="mt-1 mx-1" style={{cursor: 'pointer'}}>
          {' ' + info.subtitulo}
          </label>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'var(--mp-azul-4)'}}>Menú</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="ml-auto">
            <Link to={'/'} className={`nav-link ${actual === '' ? 'active' : ''}`}><i className="bi bi-house-fill"></i>{' '}Inicio</Link>
            <Link to={'/noticias'} className={`nav-link ${actual === 'noticias' ? 'active' : ''}`}><i className="bi bi-newspaper"></i>{' '}Publicaciones</Link>
            <Link to={'/recursos'} className={`nav-link ${actual === 'recursos' ? 'active' : ''}`}><i className="bi bi-archive-fill"></i>{' '}Recursos</Link>
            <Link to={'/contacto'} className={`nav-link ${actual === 'contacto' ? 'active' : ''}`}><i className="bi bi-telephone-fill"></i>{' '}Contacto</Link>
            {
              valid ? 
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={'S.E. COPÁN'}
                menuVariant="light"
                align='end'
              >
                {
                  userData.rol === 'Master' ? <NavDropdown.Item onClick={() => navigateLink('/admin/roles')}>Gestión de Roles</NavDropdown.Item> : null
                }
                <NavDropdown.Divider />
                <div className="w-100 d-flex justify-content-center">
                  <Button variant="danger" onClick={logout} className="w-90"><i className="bi bi-door-open-fill"></i>{' '}Cerrar Sesión</Button>
                </div>
              </NavDropdown>
              : 
              <Button variant="warning" onClick={handleShow} ><i className="bi bi-door-open-fill"></i>{' '}Gestión</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
      <Login />
    </Modal>
    <Modal show={showFirst} onHide={handleCloseFirst}>
      <CambiarPassword handleClose={handleCloseFirst} />
    </Modal>
    </>
  );
};
