import { Carousel, Modal } from 'react-bootstrap'
import { ImagenGaleria } from './ImagenGaleria'
import { Fotografia } from './Fotografia'
import { useState } from 'react'

export const Galeria = ({archivos}) => {

  //Modal vista ampliada
  const [showVista, setShowVista] = useState(false);
  const handleCloseVista = () => setShowVista(false);
  const handleShowVista = () => setShowVista(true);

  if(archivos.length === 0){
    return null
  }

  if(archivos.length === 1){
    return <Fotografia enlace={archivos[0].enlace}/>
  }

  return (
    <>
      <Carousel className='w-100' data-bs-theme="dark">
        {
          archivos.map((archivo) => (
            <Carousel.Item key={archivo._id} onClick={handleShowVista} style={{height: '300px'}}>
              <div className='h-100 w-100 d-flex jusfity-content-center align-items-center' style={{maxWidth: '95vw'}}>
                <ImagenGaleria key={archivo._id} enlace={archivo.enlace}/>
              </div>
            </Carousel.Item>
          ))
        }
      </Carousel>
      {/*Modal Vista Previa*/}
      <Modal size='lg' show={showVista} centered onHide={handleCloseVista} className='h-80'>
        <Carousel className='w-100' data-bs-theme="dark">
          {
            archivos.map((archivo) => (
              <Carousel.Item key={archivo._id}>
                <div className='d-flex jusfity-content-center align-items-center' style={{maxWidth: '95vw'}}>
                  <ImagenGaleria key={archivo._id} enlace={archivo.enlace} modal/>
                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Modal>
  </>
  )
}
