import React, { useState } from 'react'
import { getImageUrl } from '../../services/stringFormatter'
import { Image, Modal } from 'react-bootstrap'

export const Fotografia = ({enlace}) => {

  //Modal vista ampliada
  const [showVista, setShowVista] = useState(false);
  const handleCloseVista = () => setShowVista(false);
  const handleShowVista = (e) => {
    e.stopPropagation();
    setShowVista(true);
  }

  return (
    <>
      <Image className='noticia-img' src={getImageUrl(enlace)} onClick={handleShowVista} thumbnail fluid/>

      {/*Modal Vista Previa*/}
      <Modal size='lg' show={showVista} centered onHide={handleCloseVista}>
        <Image src={getImageUrl(enlace)} thumbnail fluid/>
      </Modal>
    </>
  )
}