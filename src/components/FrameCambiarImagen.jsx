import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { getImageUrl } from "../services/stringFormatter";
import defaultRepresentante from '../assets/images/defaultImages/default-representante.jpg'
import defaultOrganigrama from '../assets/images/defaultImages/default-organigrama.png'
import educacionNosotros from '../assets/images/defaultImages/educacion-nosotros.png'
import educacionValores from '../assets/images/defaultImages/educacion-valores.png'
import saludNosotros from '../assets/images/defaultImages/salud-nosotros.jpg'
import saludValores from '../assets/images/defaultImages/salud-valores.png'
import { SubirImagenHome } from "../views/SubirImagenHome";

export const HomeImage = ({imagen, edit=false}) => {
  //Modal publicar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(edit){
    return (
      <div className="d-flex">
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button onClick={handleShow} style={{position: 'absolute', margin: '0.5rem'}} variant="warning"><i className="bi bi-image"></i></Button>
      </div>
      {
          imagen && imagen.enlace ?
          <iframe style={{border: 0}} title={imagen.enlace} height={imagen?.nombre !== 'Organigrama' ? 300 : 600} width={imagen?.nombre !== 'Organigrama' ? 'auto' : 700}
          src={getImageUrl(imagen.enlace)}
          ></iframe>
          :
          <Image id="img-about" src={getSource(imagen?.nombre)} fluid roundedCircle={imagen?.nombre !== 'Organigrama'} style={{backgroundColor: 'white', padding: '2rem'}}/>
        }
        <Modal show={show} onHide={handleClose}>
          <SubirImagenHome nombre={imagen?.nombre} handleClose={handleClose} />
        </Modal>
      </div>
    )
  }

  return (
    <>
    {
      imagen && imagen.enlace ?
      <iframe style={{border: 0}} title={imagen.enlace} height={imagen?.nombre !== 'Organigrama' ? 300 : 600} width={imagen?.nombre !== 'Organigrama' ? 'auto' : 700}
      src={getImageUrl(imagen.enlace)}
      ></iframe>
      :
      <Image id="img-about" src={getSource(imagen?.nombre)} fluid roundedCircle={imagen?.nombre !== 'Organigrama'} style={{backgroundColor: 'white', padding: '2rem'}}/>
    }
    </>
  )
}

const getSource = (tipo) => {
  if(tipo === 'Nosotros'){
    return process.env.WEB_SECTOR === '1' ? saludNosotros : educacionNosotros
  }

  if(tipo === 'Valores'){
    return process.env.WEB_SECTOR === '1' ? saludValores : educacionValores
  }

  if(tipo === 'Organigrama'){
    return defaultOrganigrama
  }

  if(tipo === 'Representante'){
    return defaultRepresentante
  }

  return null
}
