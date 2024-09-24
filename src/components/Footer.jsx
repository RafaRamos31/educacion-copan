import { Button, Modal } from "react-bootstrap"
import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { ConfiguracionFooter } from "../views/ConfiguracionFooter";
import { getDepartamento, getTitle } from "../services/info-service";
import logo from "../assets/images/logos/logoHonduras.png";
import { UserContext } from "../contexts/UserContext";


export const Footer = () => {
  const {userData} = useContext(UserContext);
  const [values, setValues] = useState({});
  const { data: mongoData, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/footer`);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if(mongoData){
      setValues(mongoData)
    }
  }, [mongoData, isLoading])

  if(isLoading){
    return null
  }

  return (
    <>
    <footer
          className="text-center text-lg-start text-white mt-5"
          style={{backgroundColor: "var(--mp-azul-3)"}}
          >
    <div className="container p-4 pb-0">
      <div className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              {`${getTitle(process.env.REACT_APP_WEB_SECTOR)} de ${getDepartamento(process.env.REACT_APP_WEB_DEPTO)}`}
            </h6>
            <div className="d-flex align-items-center justify-content-center">
              <img src={logo} style={{width: '10rem'}} alt="logoHonduras"></img>
            </div>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Sobre Nosotros</h6>
            <p>
              <a className="text-white" href="/#sobre-nosotros">¿Quiénes somos?</a>
            </p>
            <p>
              <a className="text-white" href="/#mision-vision">Misión y Visión</a>
            </p>
            <p>
              <a className="text-white" href="/#organigrama">Organigrama</a>
            </p>
            <p>
              <a className="text-white" href="/#valores">Valores</a>
            </p>
            <p>
              <a className="text-white" href="/#cobertura">Cobertura</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              {'Enlaces de Interés'}
            </h6>
            <ul>
              <li><a className="text-white" href="https://arsa.gob.hn/" target='_blank' rel='noreferrer'>ARSA</a></li>
              <li><a className="text-white" href="https://www.se.gob.hn/" target='_blank' rel='noreferrer'>SEDUC</a></li>
              <li><a className="text-white" href="https://www.salud.gob.hn/sshome/" target='_blank' rel='noreferrer'>SESAL</a></li>
              <li><a className="text-white" href="https://www.utsan.hn/" target='_blank' rel='noreferrer'>UTSAN</a></li>
              <li><a className="text-white" href="https://www.paho.org/es/honduras?page=1" target='_blank' rel='noreferrer'>OPS</a></li>
              <li><a className="text-white" href="https://www.incap.int/index.php/es/" target='_blank' rel='noreferrer'>INCAP</a></li>
              <li><a className="text-white" href="https://www.sgjd.gob.hn/" target='_blank' rel='noreferrer'>SGDJ</a></li>
              <li><a className="text-white" href="https://www.unicef.org/honduras/" target='_blank' rel='noreferrer'>UNICEF</a></li>
              <li><a className="text-white" href="https://www.advancingnutrition.org/where-we-work/honduras" target='_blank' rel='noreferrer'>USAID AN</a></li>
            </ul>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
            <p><i className="fas fa-home mr-3"></i>{' '}{values.direccion}</p>
            <p><i className="fas fa-envelope mr-3"></i>{' '}{values.correo}</p>
            <p><i className="fas fa-phone mr-3"></i>{' '}{values.telefono}</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Nuestras Redes</h6>

            {
              values.facebook &&
              <a
                className="btn btn-primary btn-floating m-1"
                style={{backgroundColor: "#3b5998"}}
                href={values.facebook}
                target="_blank"
                rel="noreferrer"
                role="button"
                ><i className="fab fa-facebook-f"></i>
              </a>
            }

            {
              values.instagram &&
              <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              href={values.instagram}
              target="_blank"
              rel="noreferrer"
              role="button"
              ><i className="fab fa-instagram"></i>
              </a>
            }

            {
              values.twitter &&
              <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#55acee"}}
              href={values.twitter}
              target="_blank"
              rel="noreferrer"
              role="button"
              ><i className="fab fa-twitter"></i>
              </a>
            }

            {
              values.tiktok &&
              <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "black"}}
              href={values.tiktok}
              target="_blank"
              rel="noreferrer"
              role="button"
              ><i className="bi bi-tiktok"></i>
              </a>
            }

            {
              values.youtube &&
              <a
              className="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#c4302b"}}
              href={values.youtube}
              target="_blank"
              rel="noreferrer"
              role="button"
              ><i className="fab fa-youtube"></i>
              </a>
            }
            <div>
            {
              (userData && userData.rol === 'ADMIN') && 
              <Button variant="warning" onClick={handleShow}>
                <i className="bi bi-tools"></i>{' '}Modificar
              </Button> 
            }
          </div>
          </div>
        </div>
      </div>
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "var(--mp-rojo-1)"}}
         >
      © 2023 Copyright:
      <br /><a className="text-white" href={values.footerEnlace}>{`${getTitle(process.env.REACT_APP_WEB_SECTOR)} de ${getDepartamento(process.env.REACT_APP_WEB_DEPTO)}`}
      </a>
    </div>
  </footer>
  <Modal show={show} onHide={handleClose} size="lg">
      <ConfiguracionFooter data={values}/>
  </Modal>
  </>
  )
}
