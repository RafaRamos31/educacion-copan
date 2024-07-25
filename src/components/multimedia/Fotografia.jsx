import React, { useState } from 'react'
import { getImageUrl } from '../../services/stringFormatter'
import { Modal } from 'react-bootstrap'

export const Fotografia = ({enlace}) => {

  //Modal vista ampliada
  const [showVista, setShowVista] = useState(false);
  const handleShowVista = () => setShowVista(true);
  const handleCloseVista = () => setShowVista(false);


  return (
    <>
      <div style={{padding: '1rem', backgroundColor: 'lightgray'}} onClick={handleShowVista}>
        <iframe style={{border: 0}} title={enlace} onClick={handleShowVista}
        src={getImageUrl(enlace)}
        ></iframe>
      </div>

      {/*Modal Vista Previa*/}
      <Modal size='lg' show={showVista} centered onHide={handleCloseVista}>
        <iframe style={{border: 0}} title={enlace} height={600}
          src={getImageUrl(enlace)}
          ></iframe>
      </Modal>
    </>
  )
}